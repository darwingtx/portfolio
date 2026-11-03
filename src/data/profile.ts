// Única fuente de contenido, en español (/) e inglés (/en/). Edita aquí y toda la página se actualiza.

export type Lang = 'es' | 'en';
export const getLang = (locale?: string): Lang => (locale === 'en' ? 'en' : 'es');

const me = {
  name: 'Darwin Castaño',
  fullName: 'Darwin David Castaño Hernández',
  email: 'darwingtx@gmail.com',
  github: 'https://github.com/darwingtx',
  linkedin: 'https://www.linkedin.com/in/darwincastao',
  avatar: 'https://avatars.githubusercontent.com/u/79672629?v=4',
};

// Datos que no cambian con el idioma, en el mismo orden que los textos de cada proyecto.
const projectsBase = [
  {
    year: '2024 –',
    stack: ['Spring Boot', 'Java 21', 'React 19', 'FastAPI', 'scikit-learn', 'MQTT', 'MicroPython', 'Docker', 'Kubernetes'],
    links: [
      { label: 'smartpot.app', href: 'https://smartpot.app' },
      { label: 'Repos', href: 'https://github.com/SmartPotTech' },
    ],
    accent: 'cyan',
  },
  {
    year: '2026 –',
    stack: ['Docker', 'llama.cpp RPC', 'prima.cpp', 'distributed-llama', 'AnythingLLM', 'RAG'],
    links: [],
    accent: 'violet',
  },
  {
    year: '2025',
    stack: ['Next.js', 'TypeScript', 'Avalanche', 'Smart Contracts', 'Ethers.js', 'Tailwind CSS'],
    links: [{ label: 'Repo', href: 'https://github.com/darwingtx/SynProof' }],
    accent: 'pink',
  },
  {
    year: '2025',
    stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'GraphQL', 'JWT', 'React Native'],
    links: [
      { label: 'API', href: 'https://github.com/darwingtx/LeetCodeStreak-API' },
      { label: 'App', href: 'https://github.com/darwingtx/LeetCodeStreak-Fronted-Mobile' },
    ],
    accent: 'yellow',
  },
  {
    year: '2026',
    stack: ['Python', 'GTK4', 'Bash', 'ImageMagick', 'matugen', 'Hyprland'],
    links: [{ label: 'Repo', href: 'https://github.com/darwingtx/hypr-wallpaper-picker' }],
    accent: 'cyan',
  },
  {
    year: '2026',
    stack: ['Python', 'asyncio', 'WebSockets', 'threading', 'Tkinter'],
    links: [{ label: 'Repo', href: 'https://github.com/darwingtx/Sopa-de-letras-Paralela' }],
    accent: 'pink',
  },
] as const;

const skillItems = [
  ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL', 'MicroPython'],
  ['Claude Code', 'OpenCode', 'Codex', 'herdr', 'n8n', 'MCP', 'AnythingLLM', 'Open-source LLMs', 'RAG'],
  ['Node.js', 'NestJS', 'Spring Boot', 'FastAPI', 'Firebase', 'REST', 'JWT'],
  ['React', 'Tailwind CSS', 'Astro'],
  ['Linux', 'Docker', 'AWS', 'Google Cloud'],
  ['PostgreSQL', 'MongoDB', 'MariaDB', 'Oracle', 'Firestore'],
];

const es = {
  meta: { title: `${me.name} — Backend Developer · AI Engineer`, locale: 'es_CO' },
  profile: {
    ...me,
    role: 'Backend Developer · AI Engineer en formación',
    location: 'Medellín, Colombia',
    summary:
      'Estudiante de 9° semestre de Ingeniería Informática en el Politécnico Colombiano Jaime Isaza Cadavid. Construyo backends con TypeScript, Java y Python, automatizo procesos con agentes de IA y despliego LLMs open-source sobre hardware convencional.',
    about:
      'Estoy en camino de convertirme en <strong class="text-pink">AI Engineer</strong>. Hoy trabajo como backend developer construyendo automatizaciones con agentes de IA, y en el semillero <strong class="text-cyan">SIIC</strong> investigo cómo desplegar LLMs open-source en clústeres de hardware convencional.',
    aboutExtra: 'Trabajo a diario en Linux con agentes de código como Claude Code, OpenCode, Codex y herdr. Me apasionan la tecnología, la ciencia y la historia. Medellín, Colombia.',
    interests: ['Inferencia distribuida', 'RAG', 'MLOps', 'Agentes de IA'],
  },
  ui: {
    nav: ['Sobre mí', 'Experiencia', 'Proyectos', 'Skills', 'Contacto'],
    talk: 'Hablemos',
    hello: 'Hola',
    myNameIs: 'mi nombre es',
    seeProjects: 'Ver proyectos',
    photoAlt: `Foto de ${me.name}`,
    kickers: { about: 'origen', experience: 'línea temporal', projects: 'multiverso de proyectos', skills: 'poderes' },
    titles: { about: 'Sobre mí', experience: 'Experiencia', projects: 'Proyectos', skills: 'Skills' },
    problem: 'El problema',
    solution: 'La solución',
    present: 'hoy',
    contactKicker: '¿construimos algo?',
    contactText: 'Abierto a proyectos de backend, automatización e IA.',
    madeWith: 'Hecho con Astro, Tailwind y GSAP',
    switchLabel: '🇺🇸',
    switchTitle: 'Read in English',
  },
  experience: [
    {
      role: 'Backend Developer', company: 'Calenardhon', period: '09/2026 – Presente', place: 'Medellín (híbrido)',
      points: [
        'Go-to-market engineering: pipelines de automatización para lanzamientos y operación comercial con TypeScript y agentes de IA (Claude Code).',
        'Automatización interna de correos, eventos y comunicaciones entre plataformas.',
        'Integración de APIs y servicios externos.',
      ],
    },
    {
      role: 'Desarrollador de Automatizaciones e IA', company: 'Freelance', period: '05/2025 – Presente', place: 'Remoto',
      points: [
        'Flujos de automatización con n8n integrando APIs REST/GraphQL.',
        'Agentes de IA para automatizar procesos y mejorar la interacción con usuarios.',
      ],
    },
    {
      role: 'Desarrollador Full Stack JS', company: 'MARKENBREIT S.A.S.', period: '12/2025 – 08/2026', place: 'Medellín',
      points: [
        '3 proyectos web entregados a clientes y mantenimiento evolutivo.',
        'APIs con Firebase; frontend con React y Tailwind CSS.',
        'AWS (SES, SNS, CloudWatch) y Google Cloud Platform.',
        'Sistema interno de gestión de tiempos con dashboards por empleado.',
      ],
    },
    {
      role: 'Desarrollador Full Stack', company: 'SmartPotTech', period: '2024 – Presente', place: 'Medellín',
      points: [
        'Backend IoT agrícola con Spring Boot: cultivos, usuarios y sensores.',
        'APIs REST con JWT y control de acceso entre frontend, backend e IoT.',
        'Controladores ESP32 en MicroPython y arquitectura del sistema.',
      ],
    },
  ],
  projects: [
    {
      title: 'SmartPot', tag: 'IoT · IA · Hidroponía',
      problem: 'Un cultivo hidropónico hay que vigilarlo todos los días: temperatura, humedad, luz, pH y nutrientes. Un descuido de unas horas puede arruinar la cosecha, y las soluciones comerciales son caras o cerradas.',
      solution: [
        'Cada cultivo, ya sea un ESP32 real o uno virtual que sigue el clima real de tu ciudad, envía sus lecturas por MQTT cifrado cada pocos segundos.',
        'La API compara cada lectura con el rango ideal de la especie. Un asistente de IA (sistema experto, lógica difusa, ML y agente reactivo) diagnostica el cultivo, calcula su índice de salud y anticipa cuándo regar o ventilar.',
        'Una PWA muestra el cultivo en vivo, con un switch por actuador (bomba, luz UV, ventilador) o modo automático, y Telegram avisa aunque no tengas la app abierta.',
      ],
    },
    {
      title: 'Clúster LLM Universitario', tag: 'Investigación · Semillero SIIC',
      problem: 'Correr LLMs grandes exige GPUs que una universidad pública no tiene, y mandar los datos a APIs externas compromete su soberanía.',
      solution: [
        'Un clúster con los PCs de laboratorio que ya existen, en red convencional, que reparte el modelo entre nodos con llama.cpp RPC, distributed-llama y prima.cpp sobre Docker.',
        'AnythingLLM como capa de aplicación: RAG y multiusuario, sin que los datos salgan del campus.',
        'Medición de tokens/s, TFLOPS efectivos y energía, comparando frameworks en hardware idéntico, sobre una revisión de más de 35 papers (2023–2026).',
      ],
    },
    {
      title: 'SynProof', tag: '🏆 3.er lugar · Hackathon GDC Fusion',
      problem: 'En centros de datos, universidades y corporaciones con miles de equipos, el monitoreo centralizado es un punto único de fallo y sus registros se pueden manipular, lo que complica las auditorías.',
      solution: [
        'Los registros de monitoreo se guardan en una L1 propia de Avalanche (testnet Fuji) mediante smart contracts, así que son inmutables y auditables.',
        'Frontend en Next.js con Ethers.js para consultar el estado de cada equipo.',
        'MVP construido y presentado ante el jurado en 48 horas.',
      ],
    },
    {
      title: 'LeetCode Streak', tag: 'API + App móvil',
      problem: 'La racha oficial de LeetCode no tiene en cuenta tu zona horaria: aunque resuelvas un problema cada día en tu hora local, puedes perderla. Tampoco hay forma de mantener rachas con amigos.',
      solution: [
        'API en NestJS que sincroniza los datos oficiales con la API GraphQL de LeetCode y calcula la racha según la zona horaria de cada usuario.',
        'Historial permanente de rachas y envíos en PostgreSQL con Prisma, y autenticación con JWT.',
        'App móvil en React Native para ver tus rachas; las rachas grupales están en desarrollo.',
      ],
    },
    {
      title: 'Hypr Wallpaper Picker', tag: 'Linux · Open source',
      problem: 'En Hyprland con el shell Noctalia, cambiar de fondo significa buscar, descargar y recortar imágenes a mano. Además, el shell tapa los backends clásicos (hyprpaper, swaybg) y el tema no se adapta a la imagen.',
      solution: [
        'Galería en GTK4 con previews ligeras de wallhaven y Bing: solo se descarga la imagen elegida, ya recortada a tu resolución.',
        'Al aplicarla, delega en el script del propio shell, y matugen regenera la paleta Material You de la terminal, las apps Qt y el shell.',
        'Instalador con atajos de teclado y caché de miniaturas, para que la segunda búsqueda sea instantánea.',
      ],
    },
    {
      title: 'Sopa de Letras Concurrente', tag: 'Multijugador · Concurrencia',
      problem: 'Generar un tablero único para cada jugador y atender a varios en tiempo real, sin congelar la interfaz ni corromper los datos compartidos entre hilos.',
      solution: [
        'Servidor WebSocket con asyncio y un protocolo JSON propio para iniciar, validar y resolver partidas.',
        'Tablero de 15×15 generado de forma concurrente: un hilo por palabra, sincronizados con un Lock sobre la matriz compartida, en 8 direcciones.',
        'Cliente en Tkinter con un hilo de red aparte y una cola de mensajes, para que la UI nunca se bloquee.',
      ],
    },
  ],
  skillGroups: ['Lenguajes', 'IA y automatización', 'Backend', 'Frontend', 'Cloud e infra', 'Bases de datos'],
};

const en: typeof es = {
  meta: { title: `${me.name} — Backend Developer · AI Engineer`, locale: 'en_US' },
  profile: {
    ...me,
    role: 'Backend Developer · Aspiring AI Engineer',
    location: 'Medellín, Colombia',
    summary:
      'Final-year Computer Engineering student at Politécnico Colombiano Jaime Isaza Cadavid. I build backends with TypeScript, Java and Python, automate processes with AI agents, and deploy open-source LLMs on commodity hardware.',
    about:
      'I am on my way to becoming an <strong class="text-pink">AI Engineer</strong>. Today I work as a backend developer building automations with AI agents, and at the <strong class="text-cyan">SIIC</strong> research group I study how to deploy open-source LLMs on clusters of commodity hardware.',
    aboutExtra: 'I work on Linux every day with coding agents like Claude Code, OpenCode, Codex and herdr. I love technology, science and history. Medellín, Colombia.',
    interests: ['Distributed inference', 'RAG', 'MLOps', 'AI agents'],
  },
  ui: {
    nav: ['About', 'Experience', 'Projects', 'Skills', 'Contact'],
    talk: "Let's talk",
    hello: 'Hello',
    myNameIs: 'my name is',
    seeProjects: 'See projects',
    photoAlt: `Photo of ${me.name}`,
    kickers: { about: 'origin story', experience: 'timeline', projects: 'project multiverse', skills: 'powers' },
    titles: { about: 'About me', experience: 'Experience', projects: 'Projects', skills: 'Skills' },
    problem: 'The problem',
    solution: 'The solution',
    present: 'now',
    contactKicker: 'shall we build something?',
    contactText: 'Open to backend, automation and AI projects.',
    madeWith: 'Built with Astro, Tailwind and GSAP',
    switchLabel: '🇨🇴',
    switchTitle: 'Leer en español',
  },
  experience: [
    {
      role: 'Backend Developer', company: 'Calenardhon', period: '09/2026 – Present', place: 'Medellín (hybrid)',
      points: [
        'Go-to-market engineering: automation pipelines for launches and sales operations with TypeScript and AI agents (Claude Code).',
        'Internal automation of email, events and communications across platforms.',
        'Integration of external APIs and services.',
      ],
    },
    {
      role: 'Automation & AI Developer', company: 'Freelance', period: '05/2025 – Present', place: 'Remote',
      points: [
        'n8n automation workflows integrating REST/GraphQL APIs.',
        'AI agents that automate processes and improve user interactions.',
      ],
    },
    {
      role: 'Full Stack JS Developer', company: 'MARKENBREIT S.A.S.', period: '12/2025 – 08/2026', place: 'Medellín',
      points: [
        'Delivered 3 client web projects plus ongoing maintenance.',
        'APIs with Firebase; frontend with React and Tailwind CSS.',
        'AWS (SES, SNS, CloudWatch) and Google Cloud Platform.',
        'Internal time-tracking system with per-employee dashboards.',
      ],
    },
    {
      role: 'Full Stack Developer', company: 'SmartPotTech', period: '2024 – Present', place: 'Medellín',
      points: [
        'Agricultural IoT backend with Spring Boot: crops, users and sensors.',
        'REST APIs with JWT and access control between frontend, backend and IoT.',
        'ESP32 controllers in MicroPython and system architecture.',
      ],
    },
  ],
  projects: [
    {
      title: 'SmartPot', tag: 'IoT · AI · Hydroponics',
      problem: 'A hydroponic crop needs daily attention: temperature, humidity, light, pH and nutrients. A few hours of neglect can ruin the harvest, and commercial solutions are expensive or closed.',
      solution: [
        'Each crop, either a real ESP32 or a virtual one that follows the real weather of your city, sends readings over encrypted MQTT every few seconds.',
        "The API compares each reading with the species' ideal range. An AI assistant (expert system, fuzzy logic, ML and a reactive agent) diagnoses the crop, computes a health index and predicts when to water or ventilate.",
        'A PWA shows the crop live, with a switch per actuator (pump, UV light, fan) or automatic mode, and Telegram alerts you even when the app is closed.',
      ],
    },
    {
      title: 'University LLM Cluster', tag: 'Research · SIIC group',
      problem: 'Running large LLMs requires GPUs a public university does not have, and sending data to external APIs gives up data sovereignty.',
      solution: [
        'A cluster built from existing lab PCs on a regular network, splitting the model across nodes with llama.cpp RPC, distributed-llama and prima.cpp on Docker.',
        'AnythingLLM as the application layer: RAG and multi-user, with data that never leaves campus.',
        'Measuring tokens/s, effective TFLOPS and energy, comparing frameworks on identical hardware, backed by a review of 35+ papers (2023–2026).',
      ],
    },
    {
      title: 'SynProof', tag: '🏆 3rd place · GDC Fusion Hackathon',
      problem: 'In data centers, universities and companies with thousands of computers, centralized monitoring is a single point of failure and its logs can be tampered with, which makes audits hard.',
      solution: [
        'Monitoring records are stored on a custom Avalanche L1 (Fuji testnet) through smart contracts, so they are immutable and auditable.',
        'Next.js frontend with Ethers.js to check the status of each machine.',
        'MVP built and pitched to the judges in 48 hours.',
      ],
    },
    {
      title: 'LeetCode Streak', tag: 'API + Mobile app',
      problem: "LeetCode's official streak ignores your time zone: you can solve a problem every day in your local time and still lose it. There is also no way to keep streaks with friends.",
      solution: [
        "NestJS API that syncs official data through LeetCode's GraphQL API and computes the streak in each user's time zone.",
        'Permanent history of streaks and submissions in PostgreSQL with Prisma, plus JWT authentication.',
        'React Native mobile app to track your streaks; group streaks are in progress.',
      ],
    },
    {
      title: 'Hypr Wallpaper Picker', tag: 'Linux · Open source',
      problem: 'On Hyprland with the Noctalia shell, changing wallpaper means searching, downloading and cropping images by hand. The shell also hides classic backends (hyprpaper, swaybg) and the theme does not adapt to the image.',
      solution: [
        'GTK4 gallery with lightweight previews from wallhaven and Bing: only the chosen image is downloaded, already cropped to your resolution.',
        "Applying it delegates to the shell's own script, and matugen regenerates the Material You palette for the terminal, Qt apps and the shell.",
        'Installer with keyboard shortcuts and a thumbnail cache, so the second search is instant.',
      ],
    },
    {
      title: 'Concurrent Word Search', tag: 'Multiplayer · Concurrency',
      problem: 'Generate a unique board for each player and serve several players in real time, without freezing the UI or corrupting data shared between threads.',
      solution: [
        'WebSocket server with asyncio and a custom JSON protocol to start, validate and solve games.',
        '15×15 board generated concurrently: one thread per word, synchronized with a Lock on the shared grid, in 8 directions.',
        'Tkinter client with a separate network thread and a message queue, so the UI never blocks.',
      ],
    },
  ],
  skillGroups: ['Languages', 'AI & automation', 'Backend', 'Frontend', 'Cloud & infra', 'Databases'],
};

export const content = { es, en };

export function getContent(locale?: string) {
  const c = content[getLang(locale)];
  return {
    ...c,
    projects: c.projects.map((p, i) => ({ ...projectsBase[i], ...p })),
    skills: c.skillGroups.map((g, i) => [g, skillItems[i]] as const),
  };
}

// Autocomprobación: cada idioma debe tener un texto por proyecto.
if (es.projects.length !== projectsBase.length || en.projects.length !== projectsBase.length) {
  throw new Error('profile.ts: projects y projectsBase no tienen la misma longitud');
}
