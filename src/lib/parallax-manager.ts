/**
 * Manager compartido de parallax: un solo listener de scroll
 * (pasivo) y un solo loop de requestAnimationFrame para todos los
 * elementos registrados, en vez de un listener por componente.
 * Solo toca `transform` via DOM directo (nunca useState de React),
 * asi que no dispara renders ni jank por frame.
 */

type Entry = { el: HTMLElement; strength: number };

const entries = new Set<Entry>();
let ticking = false;
let listenerAttached = false;

function update() {
  const viewportCenter = window.innerHeight / 2;
  entries.forEach(({ el, strength }) => {
    const rect = el.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const offset = (viewportCenter - elementCenter) * strength;
    el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0) scale(1.12)`;
  });
  ticking = false;
}

function onScrollOrResize() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(update);
}

function ensureListener() {
  if (listenerAttached || typeof window === "undefined") return;
  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize);
  listenerAttached = true;
}

export function registerParallax(el: HTMLElement, strength: number) {
  ensureListener();
  const entry: Entry = { el, strength };
  entries.add(entry);
  update();
  return () => {
    entries.delete(entry);
    el.style.transform = "";
  };
}
