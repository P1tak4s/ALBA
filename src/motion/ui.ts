// Site UI behaviour: header that steps aside, the menu dialog, the mail composer, print.
import { gsap } from 'gsap';
import { onPage, onScroll, stopScroll, startScroll, prefersReducedMotion, ease } from '../engine';

export function startUi() {
  // Header steps aside while reading down, returns on the way up.
  let last = 0;
  onScroll(({ y }) => {
    if (Math.abs(y - last) < 6) return;
    const h = document.documentElement.classList;
    h.toggle('header-away', y > 220 && y > last && !h.contains('menu-open'));
    h.toggle('header-solid', y > 8);
    last = y;
  });

  onPage(() => {
    document.documentElement.classList.remove('header-away', 'menu-open');
    const off: (() => void)[] = [];
    const listen = (el: EventTarget, type: string, fn: EventListener) => { el.addEventListener(type, fn); off.push(() => el.removeEventListener(type, fn)); };

    // Menu: dialog with focus trap, Escape, focus return.
    const menu = document.querySelector<HTMLElement>('[data-menu]');
    const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
    const closeBtn = document.querySelector<HTMLButtonElement>('[data-menu-close]');
    if (menu && openBtn && closeBtn) {
      const focusables = () => [...menu.querySelectorAll<HTMLElement>('a, button')];
      const open = () => {
        menu.hidden = false;
        openBtn.setAttribute('aria-expanded', 'true');
        document.documentElement.classList.add('menu-open');
        stopScroll();
        if (!prefersReducedMotion()) {
          gsap.fromTo(menu, { clipPath: 'inset(0% 50% 0% 50%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8, ease: ease.inOut });
          gsap.from(menu.querySelectorAll('.menu__link span'), { yPercent: 110, duration: 1, ease: ease.out, stagger: 0.05, delay: 0.25 });
        }
        closeBtn.focus();
      };
      const close = (restore = true) => {
        if (menu.hidden) return;
        const done = () => { menu.hidden = true; startScroll(); };
        openBtn.setAttribute('aria-expanded', 'false');
        document.documentElement.classList.remove('menu-open');
        if (prefersReducedMotion()) done();
        else gsap.to(menu, { clipPath: 'inset(0% 50% 0% 50%)', duration: 0.6, ease: ease.inOut, onComplete: done });
        if (restore) openBtn.focus();
      };
      listen(openBtn, 'click', () => open());
      listen(closeBtn, 'click', () => close());
      listen(menu, 'click', (e) => { if ((e.target as HTMLElement).closest('a')) close(false); });
      listen(document, 'keydown', ((e: KeyboardEvent) => {
        if (menu.hidden) return;
        if (e.key === 'Escape') { e.preventDefault(); close(); }
        if (e.key === 'Tab') {
          const f = focusables(); const first = f[0]; const lastEl = f[f.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); lastEl.focus(); }
          else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); first.focus(); }
        }
      }) as EventListener);
      off.push(() => { menu.hidden = true; startScroll(); });
    }

    // Mail composer: opens the visitor's email app with the message filled in. Nothing is
    // posted anywhere. ponytail: mailto only; a form backend (Formspree etc.) is the upgrade.
    const form = document.querySelector<HTMLFormElement>('[data-mailform]');
    if (form) {
      const status = form.querySelector<HTMLElement>('[data-status]')!;
      listen(form, 'submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const get = (k: string) => String(data.get(k) || '').trim();
        const nameEl = form.querySelector<HTMLInputElement>('#f-name')!;
        const reachEl = form.querySelector<HTMLInputElement>('#f-reach')!;
        const missing = [nameEl, reachEl].filter((el) => !el.value.trim());
        [nameEl, reachEl].forEach((el) => el.setAttribute('aria-invalid', String(missing.includes(el))));
        if (missing.length) { status.textContent = form.dataset.required || ''; missing[0].focus(); return; }
        const labels = [...form.querySelectorAll('label')].reduce<Record<string, string>>((a, l) => ({ ...a, [l.htmlFor]: l.textContent || '' }), {});
        const lines = [`${labels['f-name']}: ${get('name')}`, `${labels['f-reach']}: ${get('reach')}`];
        if (get('who')) lines.push(`${labels['f-who']}: ${get('who')}`);
        if (get('service')) lines.push(`${labels['f-service']}: ${get('service')}`);
        lines.push('', get('message'));
        const url = `mailto:${form.dataset.to}?subject=${encodeURIComponent(form.dataset.subject || '')}&body=${encodeURIComponent(lines.join('\n'))}`;
        location.href = url;
        status.textContent = form.dataset.opened || '';
      });
    }

    const print = document.querySelector('[data-print]');
    if (print) listen(print, 'click', () => window.print());

    return () => off.forEach((f) => f());
  });
}
