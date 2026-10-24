// The driver: one module owns `--we`, the gap between the two halves of every mark.
//   scroll  header/hero marks: apart at the top of a page, met at the bottom (reading = meeting)
//   intro   the hero figure: the open arch slides in on first paint, then rests met
//   reveal  step marks: close from apart to their own value when they scroll into view
//   still   footer and 404: hold their value
// Idle: every visible mark breathes on a 10 s cycle, six breaths a minute, a resting rate.
// Off screen marks are skipped; under reduced motion every mark holds its base value.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onPage, prefersReducedMotion, scrollState, ease } from '../engine';

type Mark = { el: HTMLElement | SVGElement; mode: string; base: number; extra: { v: number }; on: boolean };
const BREATH = (Math.PI * 2) / 10; // radians per second
let marks: Mark[] = [];

function value(m: Mark, p: number, t: number) {
  const breath = Math.sin(t * BREATH) * (m.mode === 'intro' ? 0.05 : 0.07);
  if (m.mode === 'scroll') return m.base * (1 - p) + breath;
  return m.base + m.extra.v + breath;
}

function tick(t: number) {
  const p = scrollState().progress;
  for (const m of marks) if (m.on) m.el.style.setProperty('--we', value(m, p, t).toFixed(4));
}

export function startWe() {
  if (prefersReducedMotion()) {
    onPage(() => {
      document.querySelectorAll<HTMLElement>('[data-we]').forEach((el) => {
        const mode = el.dataset.we;
        el.style.setProperty('--we', mode === 'scroll' || mode === 'intro' ? '0' : el.dataset.weBase || '0');
      });
    });
    return;
  }
  gsap.ticker.add(tick);
  onPage(({ intro }) => {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) { const m = marks.find((x) => x.el === e.target); if (m) m.on = e.isIntersecting; }
    });
    marks = [...document.querySelectorAll<HTMLElement>('[data-we]')].map((el) => {
      const m: Mark = { el, mode: el.dataset.we || 'still', base: parseFloat(el.dataset.weBase || '0'), extra: { v: 0 }, on: true };
      io.observe(el);
      if (m.mode === 'intro') {
        m.extra.v = 1.15; // start a full step apart, then meet with the page intro
        intro.add(gsap.to(m.extra, { v: 0, duration: 2.2, ease: ease.out }), 0.15);
      }
      if (m.mode === 'reveal') {
        m.extra.v = 1.4;
        gsap.to(m.extra, { v: 0, duration: 1.8, ease: ease.out, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
      }
      return m;
    });
    // The header logo should read canonical on short pages too.
    if (document.documentElement.scrollHeight <= innerHeight + 4) marks.forEach((m) => { if (m.mode === 'scroll') m.base = 0; });
    ScrollTrigger.refresh();
    return () => { io.disconnect(); marks = []; };
  });
}
