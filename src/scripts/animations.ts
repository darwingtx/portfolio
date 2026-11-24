import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

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
      dot.className = 'pointer-events-none absolute rounded-full bg-coal';
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

// Tejido de una telaraña: primero los radios y luego los anillos.
// Cada hilo tarda un poco distinto para que el tejido no se sienta mecánico.
function weaveWeb(web: Element, config: gsap.TimelineVars = {}) {
  const spokes = gsap.utils.toArray<SVGPathElement>(web.querySelectorAll('.web-spoke'));
  const rings = gsap.utils.toArray<SVGPathElement>(web.querySelectorAll('.web-ring'));

  [...spokes, ...rings].forEach((path) => {
    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
  });

  const tl = gsap.timeline(config);

  spokes.forEach((path, i) => {
    tl.to(path, {
      strokeDashoffset: 0,
      duration: gsap.utils.random(0.35, 0.7),
      ease: 'power4.out',
    }, i * 0.025);
  });

  // Los anillos arrancan cuando los radios ya están casi tensos.
  const ringStart = Math.max(0, tl.duration() - 0.15);
  rings.forEach((path, i) => {
    tl.to(path, {
      strokeDashoffset: 0,
      duration: gsap.utils.random(0.35, 0.7),
      ease: 'power4.out',
    }, ringStart + i * 0.02);
  });

  return tl;
}

// Sin animaciones si el usuario pidió movimiento reducido: el contenido ya es visible por defecto.
mm.add('(prefers-reduced-motion: no-preference)', () => {
  const PINK = 'rgba(255, 46, 136, 0.7)';
  const CYAN = 'rgba(0, 209, 234, 0.7)';
  // Desfase de registro: de muy separado a los 2px del estilo fijo (.misprint).
  const misprint = (d: number) => `${d}px ${d}px 0 ${PINK}, ${-d}px ${-d / 2}px 0 ${CYAN}`;

  // 1. Portada: una sola secuencia, como una página que sale de la imprenta.
  gsap.utils.toArray<SVGSVGElement>('.hero-web').forEach((web) => weaveWeb(web, { delay: 0.15 }));
  const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  intro
    // El sticker se pega de golpe
    .from('.name-tag', { scale: 1.5, rotate: -16, opacity: 0, duration: 0.45, ease: 'back.out(2)' }, 0.1)
    // La foto se imprime de arriba abajo, "a saltos" como en la película
    .from('.hero-photo', { clipPath: 'inset(0 0 100% 0)', duration: 0.6, ease: 'steps(8)' }, 0.3)
    // Las planchas rosa y cian salen de debajo y se separan: el desfase de impresión
    .from('.plate-cyan', { x: -10, y: -10, duration: 0.7, ease: 'power4.out' }, 0.75)
    .from('.plate-pink', { x: 10, y: 10, duration: 0.7, ease: 'power4.out' }, '<')
    // El cargo se pinta como un trazo de rotulador
    .from('.hero-role', { clipPath: 'inset(0 100% 0 0)', duration: 0.5, ease: 'steps(10)' }, 1.4)
    .from('.hero-item', { y: 16, opacity: 0, duration: 0.6, stagger: 0.1 }, 1.6)
    .from('.burst', { scale: 0, rotate: -30, duration: 0.3, ease: 'steps(5)' }, 1.2);
  sprayName();

  // Al bajar, la portada se "desregistra": las planchas se separan más y la foto sube un poco.
  const heroScroll = { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true };
  gsap.to('.hero-web', { rotate: 6, opacity: 0.5, ease: 'none', scrollTrigger: heroScroll });
  gsap.to('.hero-photo-wrap', { y: -50, ease: 'none', scrollTrigger: heroScroll });
  gsap.to('.plate-cyan', { x: 14, y: 8, ease: 'none', scrollTrigger: heroScroll });
  gsap.to('.plate-pink', { x: -14, y: -8, ease: 'none', scrollTrigger: heroScroll });

  // 2. Telarañas fuera de la portada: se tejen al entrar en pantalla.
  gsap.utils.toArray<SVGSVGElement>('.spider-web:not(.hero-web)').forEach((web) => {
    const tl = weaveWeb(web, { paused: true });
    ScrollTrigger.create({ trigger: web, start: 'top 85%', once: true, onEnter: () => tl.play() });
  });

  // 3. Títulos: letras que caen "on twos", el desfase que se asienta y la regla que se traza.
  waitForDisplayFont().then(() => {
    gsap.utils.toArray<HTMLElement>('.section-title').forEach((title) => {
      const split = SplitText.create(title, { type: 'words,chars' });
      const rule = title.parentElement?.querySelector('.title-rule');
      const tl = gsap.timeline({ scrollTrigger: { trigger: title, start: 'top 85%', once: true } });
      tl.from(split.chars, {
        y: -30,
        opacity: 0,
        rotate: () => gsap.utils.random(-15, 15),
        duration: 0.35,
        ease: 'steps(4)',
        stagger: 0.035,
      })
        .fromTo(title, { textShadow: misprint(10) }, { textShadow: misprint(2), duration: 0.6, ease: 'power3.out', clearProps: 'textShadow' }, 0.1);
      if (rule) tl.from(rule, { scaleX: 0, duration: 0.7, ease: 'power3.inOut' }, 0.15);
    });
    ScrollTrigger.refresh();
  });

  // 4. Revelados sencillos para bloques de texto.
  gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
    gsap.from(el, { y: 24, opacity: 0, duration: 0.6, ease: 'steps(10)', scrollTrigger: { trigger: el, start: 'top 85%' } });
  });

  // 5. Experiencia: la línea de tiempo se dibuja al ritmo del scroll y cada hito "se enciende".
  gsap.from('.timeline-line', {
    scaleY: 0,
    ease: 'none',
    scrollTrigger: { trigger: '.timeline', start: 'top 70%', end: 'bottom 60%', scrub: 0.5 },
  });
  gsap.utils.toArray<HTMLElement>('.job-dot').forEach((dot) => {
    gsap.from(dot, { scale: 0, duration: 0.3, ease: 'back.out(3)', scrollTrigger: { trigger: dot, start: 'top 70%' } });
  });

  // 6. Proyectos: la viñeta entra, su sombra de color se "imprime" y estalla la onomatopeya.
  gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
    const shadow = getComputedStyle(card).boxShadow; // p. ej. "rgb(255, 46, 136) 8px 8px 0px 0px"
    const flat = shadow.replace(/-?\d+(\.\d+)?px -?\d+(\.\d+)?px/, '0px 0px');
    const sfx = card.querySelector<HTMLElement>('.sfx');
    const tl = gsap.timeline({ scrollTrigger: { trigger: card, start: 'top 80%', once: true } });
    tl.from(card, { y: 40, opacity: 0, duration: 0.5, ease: 'power3.out' })
      .fromTo(card, { boxShadow: flat, x: 4, y: 4 }, { boxShadow: shadow, x: 0, y: 0, duration: 0.35, ease: 'steps(5)' })
      .fromTo(card.querySelectorAll('li, h3'), { opacity: 0 }, { opacity: 1, duration: 0.3, stagger: 0.02, ease: 'none' }, 0.2);
    if (sfx) {
      tl.fromTo(sfx, { scale: 0, opacity: 0 }, { scale: 1.2, opacity: 1, duration: 0.2, ease: 'steps(4)' }, 0.55)
        .to(sfx, { scale: 1, duration: 0.15, ease: 'steps(3)' });
    }
  });

  // 7. Skills: cada fila aparece y sus chips saltan uno tras otro.
  gsap.utils.toArray<HTMLElement>('.skill-row').forEach((row) => {
    gsap.timeline({ scrollTrigger: { trigger: row, start: 'top 88%', once: true } })
      .from(row.querySelector('dt'), { x: -20, opacity: 0, duration: 0.4, ease: 'power3.out' })
      .from(row.querySelectorAll('.skill-chip'), { scale: 0.5, opacity: 0, duration: 0.25, ease: 'back.out(2.5)', stagger: 0.03 }, 0.1);
  });

  // 8. Contacto: texto y botón entran detrás del título.
  gsap.from('.contact-body > :not(h2)', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: 'power3.out',
    stagger: 0.1,
    scrollTrigger: { trigger: '.contact-body', start: 'top 75%' },
  });

  // 9. La barra se esconde al bajar y vuelve al subir: más espacio para leer.
  const nav = document.querySelector('nav');
  if (nav) {
    const hideNav = gsap.to(nav, { yPercent: -100, duration: 0.3, ease: 'power2.out', paused: true });
    ScrollTrigger.create({
      start: 120,
      end: 'max',
      onUpdate: (self) => (self.direction === 1 ? hideNav.play() : hideNav.reverse()),
      onLeaveBack: () => hideNav.reverse(),
    });
  }

  // Las fuentes llegan después del primer cálculo y cambian la altura de la página: sin
  // recalcular, los disparadores del final quedan fuera del scroll y Contacto nunca aparece.
  waitForDisplayFont().then(() => document.fonts.ready).then(() => ScrollTrigger.refresh());
});

// Nav con sección activa. Mismos ids en ES y EN; sin movimiento, así que corre siempre.
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
      link.classList.toggle('text-red', active);
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
