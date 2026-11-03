import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

// Nombre pintado con spray de grafiti: el bote se agita, recorre cada letra soltando pintura
// y la letra aparece borrosa y se enfoca, como pintura recién aplicada.
function sprayName() {
  const chars = gsap.utils.toArray<HTMLElement>('.name-char');
  const can = document.querySelector<SVGElement>('.spray-can');
  const host = can?.parentElement;
  if (!chars.length || !can || !host) return;

  // Márgenes negativos para no cortar la tilde de la Ñ ni los trazos que sobresalen; 110% = vacío total.
  const hidden = 'inset(-30% 110% -30% -10%)';
  const shown = 'inset(-30% -10% -30% -10%)';
  gsap.set(chars, { clipPath: hidden, filter: 'blur(6px)' });

  const NOZZLE = { x: 1, y: 6 }; // boquilla dentro del svg
  const AIM = { x: 12, y: -16 }; // el bote pinta a distancia, arriba a la derecha del trazo

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
  document.fonts.ready.then(() => {
    const aimAt = (el: HTMLElement, end: boolean) => ({
      x: el.offsetLeft + (end ? el.offsetWidth : 0) + AIM.x - NOZZLE.x,
      y: el.offsetTop + el.offsetHeight / 2 + AIM.y - NOZZLE.y,
    });
    const nozzle = () => ({ x: Number(gsap.getProperty(can, 'x')) + NOZZLE.x, y: Number(gsap.getProperty(can, 'y')) + NOZZLE.y });

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

// Sin animaciones si el usuario pidió movimiento reducido: el contenido ya es visible por defecto.
mm.add('(prefers-reduced-motion: no-preference)', () => {
  // 1. Telarañas que se "tejen": cada hilo se dibuja con stroke-dashoffset.
  document.querySelectorAll<SVGPathElement>('.hero-web path, .contact-web path').forEach((path) => {
    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
  });
  gsap.to('.hero-web path', { strokeDashoffset: 0, duration: 1.6, ease: 'power2.out', stagger: 0.04 });
  gsap.to('.contact-web path', {
    strokeDashoffset: 0,
    duration: 1.2,
    stagger: 0.03,
    scrollTrigger: { trigger: '#contact', start: 'top 70%' },
  });

  // 2. Entrada del hero estilo cómic: golpe + leve rotación.
  gsap.from('.hero-item', { y: 60, opacity: 0, rotate: -2, duration: 0.8, ease: 'back.out(1.7)', stagger: 0.12, delay: 0.2 });
  // Sticker "Hola, mi nombre es" pegándose de golpe.
  gsap.from('.name-tag', { scale: 1.6, rotate: -18, opacity: 0, duration: 0.5, ease: 'back.out(2.5)', delay: 0.1 });
  sprayName();
  gsap.from('.burst', { scale: 0, rotate: -45, duration: 0.6, ease: 'elastic.out(1, 0.4)', delay: 1.1 });

  // 3. Parallax de la telaraña del hero.
  gsap.to('.hero-web', { yPercent: 25, rotate: 8, ease: 'none', scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true } });

  // 4. Revelados al hacer scroll.
  gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
    gsap.from(el, { y: 50, opacity: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
  });

  // 5. Tarjetas de proyecto: aparecen como viñetas en otro universo (skew + desfase).
  gsap.set('.project-card', { y: 80, skewY: 6, opacity: 0 });
  ScrollTrigger.batch('.project-card', {
    start: 'top 85%',
    onEnter: (batch) => gsap.to(batch, { y: 0, skewY: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12 }),
  });
});
