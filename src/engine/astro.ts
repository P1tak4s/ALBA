// Astro adapter (ClientRouter). Call start(setup) once from the layout's <script>.
// The leave animation runs IN PARALLEL with fetching the next page, so transitions add no latency.
import { boot, cleanup, enter, leave, syncFlags } from './index';

let navigating = false;
let popstate = false;

export function start(setup?: () => void) {
  document.addEventListener('astro:before-preparation', (e) => {
    navigating = true;
    popstate = e.navigationType === 'traverse';
    if (popstate) return; // back/forward: no curtain, restore instantly
    const load = e.loader;
    e.loader = async () => { await Promise.all([leave(), load()]); };
  });
  document.addEventListener('astro:before-swap', () => cleanup());
  document.addEventListener('astro:after-swap', () => syncFlags()); // Astro replaces <html> attributes
  document.addEventListener('astro:page-load', () => {
    if (!navigating) return void boot(setup); // first load (boot is idempotent)
    navigating = false;
    enter(popstate ? { transition: false, scrollTop: false } : {});
  });
  // Module scripts run after parsing: boot now instead of waiting for the first astro:page-load.
  boot(setup);
}
