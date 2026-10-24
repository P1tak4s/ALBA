// Global motion, registered once before the first page: the curtain transition, the mark
// driver and the site UI.
import { gsap } from 'gsap';
import { setTransition, ease } from '../engine';
import { startWe } from './we';
import { startUi } from './ui';

export function setupMotion() {
  // Morning curtains: two panels meet in the middle on leave, a seam of first light appears,
  // then they part on the new page.
  setTransition({
    leave: (c) => gsap.timeline()
      .set(c, { autoAlpha: 1 })
      .set(c.querySelector('.curtain__seam'), { scaleY: 0, autoAlpha: 1 })
      .fromTo(c.querySelector('.curtain__panel--l'), { xPercent: -100 }, { xPercent: 0, duration: 0.75, ease: ease.inOut }, 0)
      .fromTo(c.querySelector('.curtain__panel--r'), { xPercent: 100 }, { xPercent: 0, duration: 0.75, ease: ease.inOut }, 0)
      .to(c.querySelector('.curtain__seam'), { scaleY: 1, duration: 0.45, ease: ease.out }, 0.5),
    enter: (c) => gsap.timeline()
      .to(c.querySelector('.curtain__panel--l'), { xPercent: -100, duration: 0.9, ease: ease.inOut }, 0.05)
      .to(c.querySelector('.curtain__panel--r'), { xPercent: 100, duration: 0.9, ease: ease.inOut }, 0.05)
      .to(c.querySelector('.curtain__seam'), { autoAlpha: 0, duration: 0.3 }, 0)
      .set(c, { autoAlpha: 0 }),
  });
  startWe();
  startUi();
}
