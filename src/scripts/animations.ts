import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

// La hoja de Google Fonts ya no bloquea el render (media="print" + onload), así que hay que
// esperar a que Bangers esté aplicada antes de medir las letras: si no, el spray apunta con
// las métricas de la fuente de respaldo y queda desalineado cuando la tipografía entra.
async function waitForDisplayFont(timeout = 2500) {
  const started = performance.now();
  const loaded = () =>
    [...document.fonts].some(
      (font) => font.family.replace(/["']/g, '') === 'Bangers' && font.status === 'loaded',
    );
  while (!loaded() && performance.now() - started < timeout) {
    await new Promise((resolve) => setTimeout(resolve, 80));
  }
}

// Nombre pintado con spray de grafiti: el bote se agita, recorre cada letra soltando pintura
// y la letra aparece borrosa y se enfoca, como pintura recién aplicada.
function sprayName() {
  const chars = gsap.utils.toArray<HTMLElement>('.name-char');
  const can = document.querySelector<HTMLImageElement>('.spray-can');
  const host = can?.parentElement;
  if (!chars.length || !can || !host) return;

  // Márgenes negativos para no cortar la tilde de la Ñ ni los trazos que sobresalen; 110% = vacío total.
  const hidden = 'inset(-30% 110% -30% -10%)';
  const shown = 'inset(-30% -10% -30% -10%)';
  gsap.set(chars, { clipPath: hidden, filter: 'blur(6px)' });

  const NOZZLE = { x: 52, y: 17 }; // boquilla dentro de la imagen de referencia (97x120)
  const AIM = { x: -30, y: 6 }; // la lata rocía hacia arriba a la derecha: se coloca abajo a la izquierda del trazo
  const REFERENCE_WIDTH = 97; // ancho de la lata en su tamaño de referencia

  // Gotas de pintura que salen de la boquilla y se dispersan sobre la letra.
  const spray = (from: { x: number; y: number }, el: HTMLElement) => {
    for (let i = 0; i < 9; i++) {
      const dot = document.createElement('span');
      const size = gsap.utils.random(2, 5);
      dot.className = 'pointer-events-none absolute rounded-full bg-ink';
      Object.assign(dot.style, { width: `${size}px`, height: `${size}px`, left: '0', top: '0' });
      host.appendChild(dot);
      gsap.fromTo(dot,
        { x: from.x, y: from.y, opacity: 0.9 },
        {
          x: el.offsetLeft + gsap.utils.random(-6, el.offsetWidth + 6),
          y: el.offsetTop + gsap.utils.random(0, el.offsetHeight),
          opacity: 0,
          duration: gsap.utils.random(0.25, 0.5),
          ease: 'power2.out',
          onComplete: () => dot.remove(),
        });
    }
  };

  // offsetLeft/Top son relativos al h1 e ignoran el giro del sticker; se esperan las fuentes para medir bien.
  Promise.all([document.fonts.ready, waitForDisplayFont()]).then(() => {
    // La lata se escala en móvil con clamp(): la boquilla se mueve con ella.
    const scale = can.offsetWidth / REFERENCE_WIDTH || 1;
    const nozzleOffset = { x: NOZZLE.x * scale, y: NOZZLE.y * scale };

    const aimAt = (el: HTMLElement, end: boolean) => ({
      x: el.offsetLeft + (end ? el.offsetWidth : 0) + AIM.x - nozzleOffset.x,
      y: el.offsetTop + el.offsetHeight / 2 + AIM.y - nozzleOffset.y,
    });
    const nozzle = () => ({ x: Number(gsap.getProperty(can, 'x')) + nozzleOffset.x, y: Number(gsap.getProperty(can, 'y')) + nozzleOffset.y });

    const tl = gsap.timeline({ delay: 0.6 });
    tl.set(can, aimAt(chars[0], false))
      .to(can, { opacity: 1, duration: 0.15 })
      .to(can, { rotate: 14, duration: 0.07, yoyo: true, repeat: 5, ease: 'sine.inOut' }) // agitar el bote
      .set(can, { rotate: 0 });

    chars.forEach((ch, i) => {
      // Entre palabras el bote deja de pintar y salta al inicio de la siguiente.
      if (i > 0 && ch.parentElement !== chars[i - 1].parentElement) {
        tl.to(can, { ...aimAt(ch, false), duration: 0.18, ease: 'power1.inOut' });
      }
      const end = aimAt(ch, true);
      tl.to(ch, { clipPath: shown, filter: 'blur(0px)', duration: 0.16, ease: 'none' })
        .to(can, { x: end.x, y: end.y + gsap.utils.random(-3, 3), rotate: gsap.utils.random(-5, 5), duration: 0.16, ease: 'none' }, '<')
        .call(() => spray(nozzle(), ch), undefined, '<')
        .call(() => spray(nozzle(), ch), undefined, '<0.08');
    });
    tl.to(can, { x: '+=40', y: '-=30', opacity: 0, rotate: 20, duration: 0.4, ease: 'power2.in' });
  });
}

// Tejido de una telaraña: primero los radios, luego los anillos y al final la seda del centro.
// Cada hilo tarda un poco distinto para que el tejido no se sienta mecánico.
function weaveWeb(web: Element, config: gsap.TimelineVars = {}) {
  const spokes = gsap.utils.toArray<SVGPathElement>(web.querySelectorAll('.web-spoke'));
  const rings = gsap.utils.toArray<SVGPathElement>(web.querySelectorAll('.web-ring'));
  const silk = gsap.utils.toArray<SVGPathElement>(web.querySelectorAll('.web-silk'));

  [...spokes, ...rings, ...silk].forEach((path) => {
    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
  });

  const tl = gsap.timeline(config);

  spokes.forEach((path, i) => {
    tl.to(path, {
      strokeDashoffset: 0,
      duration: gsap.utils.random(0.9, 1.8),
      ease: 'power4.out',
    }, i * 0.06);
  });

  // Los anillos arrancan cuando los radios ya están casi tensos.
  const ringStart = Math.max(0, tl.duration() - 0.25);
  rings.forEach((path, i) => {
    tl.to(path, {
      strokeDashoffset: 0,
      duration: gsap.utils.random(0.9, 1.8),
      ease: 'power4.out',
    }, ringStart + i * 0.05);
  });

  // La seda acumulada en el centro aparece al final, como el último depósito.
  const silkStart = Math.max(0, tl.duration() - 0.2);
  silk.forEach((path, i) => {
    tl.to(path, {
      strokeDashoffset: 0,
      duration: gsap.utils.random(0.6, 1.1),
      ease: 'power4.out',
    }, silkStart + i * 0.08);
  });

  return tl;
}

// Sin animaciones si el usuario pidió movimiento reducido: el contenido ya es visible por defecto.
mm.add('(prefers-reduced-motion: no-preference)', () => {
  // 1. Telarañas que se "tejen": radios primero, anillos después.
  gsap.utils.toArray<SVGSVGElement>('.hero-web').forEach((web) => {
    weaveWeb(web, { delay: 0.15 });
  });
  // El resto de telarañas se tejen al entrar en pantalla.
  gsap.utils.toArray<SVGSVGElement>('.spider-web:not(.hero-web)').forEach((web) => {
    const tl = weaveWeb(web, { paused: true });
    ScrollTrigger.create({
      trigger: web,
      start: 'top 85%',
      once: true,
      onEnter: () => tl.play(),
    });
    // Si la página carga ya avanzada, las telarañas que quedaron arriba se tejen de una vez.
    if (web.getBoundingClientRect().top < window.innerHeight * 0.85) tl.play();
  });

  // 2. Entrada del hero estilo cómic: golpe + leve rotación.
  gsap.from('.hero-item', { y: 60, opacity: 0, rotate: -2, duration: 0.8, ease: 'back.out(1.7)', stagger: 0.12, delay: 0.2 });
  // Sticker "Hola, mi nombre es" pegándose de golpe.
  gsap.from('.name-tag', { scale: 1.6, rotate: -18, opacity: 0, duration: 0.5, ease: 'back.out(2.5)', delay: 0.1 });
  sprayName();
  gsap.from('.burst', { scale: 0, rotate: -45, duration: 0.6, ease: 'elastic.out(1, 0.4)', delay: 1.1 });

  // 3. La telaraña del hero no se desplaza: se tensa (gira y se apaga un poco) con el scroll.
  gsap.to('.hero-web', {
    rotate: 6,
    opacity: 0.55,
    ease: 'none',
    scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true },
  });

  // 4. Revelados al hacer scroll, animados "on twos" con steps(12).
  gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: 'steps(12)',
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
  });

  // 5. Tarjetas de proyecto: aparecen como viñetas en otro universo (skew + desfase),
  //    con una onomatopeya que estalla y se apaga, y un desfase cromático que se asienta.
  gsap.set('.project-card', { y: 80, skewY: 6, opacity: 0 });
  gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
    const sfx = card.querySelector<HTMLElement>('.sfx');
    if (!sfx) return;
    gsap.timeline({ scrollTrigger: { trigger: card, start: 'top 80%', once: true } })
      .fromTo(sfx,
        { scale: 0, opacity: 0, transformOrigin: 'center' },
        { scale: 1.15, opacity: 1, duration: 0.28, ease: 'steps(12)' })
      .to(sfx, { scale: 1, duration: 0.22, ease: 'steps(12)' });
  });

  ScrollTrigger.batch('.project-card', {
    start: 'top 85%',
    onEnter: (batch) => {
      gsap.to(batch, { y: 0, skewY: 0, opacity: 1, duration: 0.65, ease: 'steps(12)', stagger: 0.12 });
      // Impresión fuera de registro: rosa a la derecha, cian a la izquierda, que se asienta a 0.
      gsap.fromTo(batch,
        { textShadow: '2px 0 0 #ff2e88, -2px 0 0 #00e5ff' },
        { textShadow: '0px 0 0 #ff2e88, 0px 0 0 #00e5ff', duration: 0.6, ease: 'steps(12)', stagger: 0.12 });
    },
  });
});

// 6. Nav con sección activa. Mismos ids en ES y EN; sin movimiento, así que corre siempre.
const navLinks = new Map<string, HTMLAnchorElement>();
document.querySelectorAll<HTMLAnchorElement>('nav [data-nav-link]').forEach((link) => {
  const id = link.getAttribute('href')?.slice(1);
  if (id) navLinks.set(id, link);
});
const sections = document.querySelectorAll<HTMLElement>('main section[id]');

if (navLinks.size && sections.length) {
  const setActive = (id: string) => {
    navLinks.forEach((link, key) => {
      const active = key === id;
      link.classList.toggle('text-yellow', active);
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

  // Banda angosta en el centro del viewport: la sección que la cruza es la activa.
  const visible = new Set<Element>();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      // Si dos secciones comparten la banda, gana la última en el documento.
      const active = Array.from(sections).filter((section) => visible.has(section)).pop();
      setActive(active?.id ?? '');
    },
    { rootMargin: '-45% 0px -45% 0px' },
  );
  sections.forEach((section) => observer.observe(section));
}
