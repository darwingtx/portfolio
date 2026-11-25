// Única fuente de contenido, en español (/) e inglés (/en/). Edita aquí y toda la página se actualiza.

export type Lang = 'es' | 'en';
export const getLang = (locale?: string): Lang => (locale === 'en' ? 'en' : 'es');

const me = {
  name: 'Darwin Castaño',
  fullName: 'Darwin David Castaño Hernández',
  email: 'darwingtx@gmail.com',
  github: 'https://github.com/darwingtx',
  linkedin: 'https://www.linkedin.com/in/darwincastao',
  avatar: '/avatar-2026.webp',
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
    sfx: 'THWIP!',
  },
  {
    year: '2026 –',
    stack: ['Docker', 'llama.cpp RPC', 'prima.cpp', 'distributed-llama', 'AnythingLLM', 'RAG'],
    links: [],
    accent: 'violet',
    sfx: 'PING!',
  },
  {
    year: '2025',
    stack: ['Next.js', 'TypeScript', 'Avalanche', 'Smart Contracts', 'Ethers.js', 'Tailwind CSS'],
    links: [{ label: 'Repo', href: 'https://github.com/darwingtx/SynProof' }],
    accent: 'pink',
    sfx: 'ZAP!',
  },
  {
    year: '2025',
    stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'GraphQL', 'JWT', 'React Native'],
    links: [
      { label: 'API', href: 'https://github.com/darwingtx/LeetCodeStreak-API' },
      { label: 'App', href: 'https://github.com/darwingtx/LeetCodeStreak-Fronted-Mobile' },
    ],
    accent: 'yellow',
    sfx: 'BLIP!',
  },
  {
    year: '2026',
    stack: ['Python', 'GTK4', 'Bash', 'ImageMagick', 'matugen', 'Hyprland'],
    links: [{ label: 'Repo', href: 'https://github.com/darwingtx/hypr-wallpaper-picker' }],
    accent: 'cyan',
    sfx: 'SWISH!',
  },
] as const;

const skillItems = [
  ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL', 'MicroPython', 'Bash'],
  ['Claude Code', 'MCP', 'n8n', 'AnythingLLM', 'RAG', 'Open-source LLMs', 'llama.cpp RPC', 'prima.cpp'],
  ['NestJS', 'Spring Boot', 'FastAPI', 'Node.js', 'REST', 'GraphQL', 'JWT', 'MQTT'],
  ['React', 'React Native', 'Astro', 'Tailwind CSS', 'GTK4'],
  ['Linux', 'Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Cloudflare Tunnel'],
  ['PostgreSQL', 'MongoDB', 'MariaDB', 'Oracle', 'Prisma', 'Firestore'],
];

const es = {
  meta: {
    title: `${me.name} — Backend Developer · Infraestructura e IA`,
    description: 'Darwin Castaño, backend developer en Medellín. TypeScript, Java y Python; infraestructura, automatización y agentes de IA en producción.',
    locale: 'es_CO',
  },
  profile: {
    ...me,
    role: 'Backend Developer · Infraestructura e IA',
    location: 'Medellín, Colombia',
    summary:
      'Backend developer en Calenardhon (TypeScript, Java, Python), donde automatizo procesos con agentes de IA. Me enfoco en la infraestructura que hace funcionar la IA: servidores, automatización y modelos en producción.',
    about: [
      'Soy estudiante de último año de Ingeniería Informática en el Politécnico Colombiano Jaime Isaza Cadavid, en Medellín. Me apasiona aprender, sobre todo entender cómo funcionan las cosas por dentro.',
      'Tengo una mezcla de gustos. Por un lado, la <strong>infraestructura</strong>: configurar y mantener servidores, automatizar despliegues y construir backends sólidos, con un ojo puesto en la <strong>ciberseguridad</strong>. Por otro, implementar <strong>IA</strong> y construir cosas con ella. Uso Linux a diario y tengo un homelab propio donde pongo todo eso en práctica.',
      'Mi enfoque está donde se cruzan: <strong class="text-red">la infraestructura que hace funcionar la IA</strong>. Desplegar, automatizar y operar modelos y agentes en servidores reales, de forma eficiente, segura y a bajo costo.',
      'En el semillero <strong>SIIC</strong> investigo cómo repartir y usar <strong>modelos grandes de lenguaje (LLMs)</strong> en computadores de uso común, de forma eficiente y a bajo costo, para que una universidad pueda correrlos sin GPUs costosas.',
    ],
    interests: ['Infraestructura', 'Servidores Linux', 'DevOps', 'Agentes de IA', 'LLMs en hardware común', 'Ciberseguridad'],
    languages: { group: 'Idiomas', items: ['Español · nativo', 'Inglés · B1'] },
  },
  ui: {
    nav: ['Sobre mí', 'Experiencia', 'Proyectos', 'Skills', 'Habilidades blandas', 'Contacto'],
    talk: 'Hagámoslo real',
    hello: 'Hola',
    myNameIs: 'mi nombre es',
    seeProjects: 'Ver proyectos',
    photoAlt: `Foto de ${me.name}`,
    titles: { about: 'Sobre mí', experience: 'Experiencia', projects: 'Proyectos', skills: 'Skills', soft: 'Habilidades blandas' },
    problem: 'El problema',
    solution: 'La solución',
    present: 'hoy',
    contactText: 'Abierto a oportunidades de backend, automatización e IA.',
    madeWith: 'Hecho por Darwin',
    cv: 'CV (PDF)',
    scroll: 'Desliza',
    skip: 'Saltar al contenido',
    switchLabel: '🇺🇸',
    switchTitle: 'Read in English',
    themeLabel: 'Cambiar entre tema claro y oscuro',
  },
  experience: [
    {
      role: 'Backend Developer', company: 'Calenardhon', period: '09/2026 – Presente', place: 'Medellín (híbrido)',
      points: [
        'Automatizaciones para lanzamientos y operación comercial (go-to-market) con TypeScript y agentes de IA.',
        'Automatización interna de correos, eventos y comunicaciones, integrando APIs externas.',
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
      problem: 'Un cultivo hidropónico necesita vigilancia diaria y un descuido de horas arruina la cosecha. Las soluciones comerciales son caras o cerradas.',
      solution: [
        'Sensores en ESP32 envían temperatura, humedad, luz y pH por MQTT cifrado cada pocos segundos.',
        'Un asistente de IA compara cada lectura con el rango ideal de la especie, diagnostica el cultivo y anticipa cuándo regar o ventilar.',
        'Una app web controla bomba, luz y ventilador en vivo, y Telegram avisa aunque la app esté cerrada.',
      ],
    },
    {
      title: 'Clúster LLM Universitario', tag: 'Investigación · Semillero SIIC',
      problem: 'Correr modelos grandes exige GPUs que una universidad pública no tiene, y enviar los datos a APIs externas implica perder el control sobre ellos.',
      solution: [
        'Clúster con los PCs del laboratorio y la red normal del campus: el modelo se reparte entre equipos con llama.cpp RPC, distributed-llama y prima.cpp en Docker.',
        'Comparación de los tres frameworks en el mismo hardware y con distintas redes (1 GbE, 2.5 GbE, Wi-Fi), con Qwen3-30B y un modelo de 70B que no cabe en un solo PC.',
        'Medición de velocidad, latencia y consumo de energía, con repeticiones y una revisión de más de 35 papers.',
        'Resultado: repartir el modelo no lo hace más rápido, por la latencia de red, pero sí permite correr modelos que no caben en un solo PC.',
      ],
    },
    {
      title: 'SynProof', tag: '🏆 3.er lugar · Hackathon GDC Fusion',
      problem: 'Donde hay miles de equipos, el monitoreo centralizado es un punto único de fallo y sus registros se pueden alterar, lo que complica las auditorías.',
      solution: [
        'Los registros se guardan en blockchain (una red propia en Avalanche) con smart contracts, así nadie puede alterarlos.',
        'Frontend en Next.js con Ethers.js para consultar el estado de cada equipo.',
        'MVP construido y presentado ante el jurado en 48 horas.',
      ],
    },
    {
      title: 'LeetCode Streak', tag: 'API + App móvil',
      problem: 'La racha de LeetCode ignora tu zona horaria: puedes resolver un problema cada día y aun así perderla. Tampoco permite rachas con amigos.',
      solution: [
        'API en NestJS que sincroniza los datos oficiales con la API GraphQL de LeetCode y calcula la racha según la zona horaria de cada usuario.',
        'Historial permanente de rachas y envíos en PostgreSQL con Prisma, y autenticación con JWT.',
        'App móvil en React Native para ver tus rachas; las rachas grupales están en desarrollo.',
      ],
    },
    {
      title: 'Hypr Wallpaper Picker', tag: 'Linux · Open source',
      problem: 'En mi escritorio Linux (Hyprland), cambiar de fondo era buscar, descargar y recortar imágenes a mano, y los colores del sistema no se adaptaban a la imagen.',
      solution: [
        'Galería en GTK4 con vistas previas de wallhaven y Bing: solo se descarga la imagen elegida, ya recortada a la pantalla.',
        'Al aplicarla, los colores de la terminal, las apps y el escritorio se regeneran a partir de la imagen.',
      ],
    },
  ],
  softSkills: [
    { title: 'Trabajo en equipo', evidence: 'Investigo en coautoría con un compañero y un asesor, y compito en hackathons en equipo.' },
    { title: 'Rigor', evidence: 'Cuando los datos del clúster tumbaron la hipótesis inicial, reformulamos el proyecto en vez de abandonarlo.' },
    { title: 'Aprendizaje autónomo', evidence: 'Aprendí por mi cuenta a desplegar LLMs open-source y a trabajar con agentes de código.' },
    { title: 'Comunicación técnica', evidence: 'Estado del arte e informe ejecutivo de la investigación, y presentación del MVP ante el jurado de la hackathon.' },
    { title: 'Pensamiento crítico', evidence: 'Comparo herramientas con mediciones propias y contrasto lo que leo con papers.' },
    { title: 'Mentalidad de producto', evidence: 'Pienso en quien usa la herramienta: SmartPot avisa por Telegram aunque la app esté cerrada.' },
  ],
  skillGroups: ['Lenguajes', 'IA y automatización', 'Backend', 'Frontend', 'Cloud e infra', 'Bases de datos'],
};

const en: typeof es = {
  meta: {
    title: `${me.name} — Backend Developer · Infrastructure & AI`,
    description: 'Darwin Castaño, backend developer in Medellín, Colombia. TypeScript, Java, Python; infrastructure, automation and AI agents in production.',
    locale: 'en_US',
  },
  profile: {
    ...me,
    role: 'Backend Developer · Infrastructure & AI',
    location: 'Medellín, Colombia',
    summary:
      'Backend developer at Calenardhon (TypeScript, Java, Python), automating processes with AI agents. I focus on the infrastructure that makes AI work: servers, automation and models in production.',
    about: [
      'I am a final-year Computer Engineering student at Politécnico Colombiano Jaime Isaza Cadavid, in Medellín. I am passionate about learning, especially about understanding how things work under the hood.',
      'My interests are a mix. On one side, <strong>infrastructure</strong>: configuring and running servers, automating deployments and building solid backends, with an eye on <strong>cybersecurity</strong>. On the other, implementing <strong>AI</strong> and building things with it. I use Linux every day and run my own homelab, where I put all of that into practice.',
      'My focus is where they meet: <strong class="text-red">the infrastructure that makes AI work</strong>. Deploying, automating and operating models and agents on real servers, efficiently, securely and at low cost.',
      'At the <strong>SIIC</strong> research group I study how to split and run <strong>large language models (LLMs)</strong> on everyday computers, efficiently and at low cost, so a university can run them without expensive GPUs.',
    ],
    interests: ['Infrastructure', 'Linux servers', 'DevOps', 'AI agents', 'LLMs on commodity hardware', 'Cybersecurity'],
    languages: { group: 'Languages', items: ['Spanish · native', 'English · B1'] },
  },
  ui: {
    nav: ['About', 'Experience', 'Projects', 'Skills', 'Soft skills', 'Contact'],
    talk: "Let's make it real",
    hello: 'Hello',
    myNameIs: 'my name is',
    seeProjects: 'See projects',
    photoAlt: `Photo of ${me.name}`,
    titles: { about: 'About me', experience: 'Experience', projects: 'Projects', skills: 'Skills', soft: 'Soft skills' },
    problem: 'The problem',
    solution: 'The solution',
    present: 'now',
    contactText: 'Open to backend, automation and AI opportunities.',
    madeWith: 'Made by Darwin',
    cv: 'CV (PDF, Spanish)',
    scroll: 'Scroll',
    skip: 'Skip to content',
    switchLabel: '🇨🇴',
    switchTitle: 'Leer en español',
    themeLabel: 'Switch between light and dark theme',
  },
  experience: [
    {
      role: 'Backend Developer', company: 'Calenardhon', period: '09/2026 – Present', place: 'Medellín (hybrid)',
      points: [
        'Go-to-market automations for launches and sales operations with TypeScript and AI agents.',
        'Internal automation of email, events and communications, integrating external APIs.',
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
      problem: 'A hydroponic crop needs daily attention and a few hours of neglect can ruin the harvest. Commercial solutions are expensive or closed.',
      solution: [
        'ESP32 sensors send temperature, humidity, light and pH over encrypted MQTT every few seconds.',
        "An AI assistant compares each reading with the species' ideal range, diagnoses the crop and predicts when to water or ventilate.",
        'A web app controls the pump, light and fan live, and Telegram alerts you even when the app is closed.',
      ],
    },
    {
      title: 'University LLM Cluster', tag: 'Research · SIIC group',
      problem: 'Running large models requires GPUs a public university does not have, and sending data to external APIs means losing control over it.',
      solution: [
        'A cluster built from lab PCs on the regular campus network: the model is split across machines with llama.cpp RPC, distributed-llama and prima.cpp on Docker.',
        'The three frameworks compared on the same hardware over different networks (1 GbE, 2.5 GbE, Wi-Fi), with Qwen3-30B and a 70B model that does not fit on a single PC.',
        'Speed, latency and energy measured with repeated runs, backed by a review of 35+ papers.',
        'Result: splitting the model does not make it faster, because of network latency, but it does run models that do not fit on one PC.',
      ],
    },
    {
      title: 'SynProof', tag: '🏆 3rd place · GDC Fusion Hackathon',
      problem: 'With thousands of machines, centralized monitoring is a single point of failure and its logs can be tampered with, which makes audits hard.',
      solution: [
        'Records are stored on a blockchain (a custom Avalanche network) through smart contracts, so nobody can alter them.',
        'Next.js frontend with Ethers.js to check the status of each machine.',
        'MVP built and pitched to the judges in 48 hours.',
      ],
    },
    {
      title: 'LeetCode Streak', tag: 'API + Mobile app',
      problem: "LeetCode's streak ignores your time zone: you can solve a problem every day and still lose it. It also has no streaks with friends.",
      solution: [
        "NestJS API that syncs official data through LeetCode's GraphQL API and computes the streak in each user's time zone.",
        'Permanent history of streaks and submissions in PostgreSQL with Prisma, plus JWT authentication.',
        'React Native mobile app to track your streaks; group streaks are in progress.',
      ],
    },
    {
      title: 'Hypr Wallpaper Picker', tag: 'Linux · Open source',
      problem: 'On my Linux desktop (Hyprland), changing wallpaper meant searching, downloading and cropping images by hand, and the system colors did not match the image.',
      solution: [
        'GTK4 gallery with previews from wallhaven and Bing: only the chosen image is downloaded, already cropped to the screen.',
        'Applying it regenerates the colors of the terminal, apps and desktop from the image.',
      ],
    },
  ],
  softSkills: [
    { title: 'Teamwork', evidence: 'I co-author research with a teammate and an advisor, and compete in hackathons as a team.' },
    { title: 'Rigor', evidence: 'When the cluster data broke our initial hypothesis, we reframed the project instead of abandoning it.' },
    { title: 'Self-directed learning', evidence: 'I taught myself to deploy open-source LLMs and to work with coding agents.' },
    { title: 'Technical communication', evidence: 'State of the art and executive report for the research, and the MVP pitch to the hackathon judges.' },
    { title: 'Critical thinking', evidence: 'I compare tools with my own measurements and check what I read against papers.' },
    { title: 'Product mindset', evidence: 'I think about the person using the tool: SmartPot alerts on Telegram even when the app is closed.' },
  ],
  skillGroups: ['Languages', 'AI & automation', 'Backend', 'Frontend', 'Cloud & infra', 'Databases'],
};

export const content = { es, en };

export function getContent(locale?: string) {
  const c = content[getLang(locale)];
  return {
    ...c,
    projects: c.projects.map((p, i) => ({ ...projectsBase[i], ...p })),
    skills: [
      ...c.skillGroups.map((g, i) => [g, skillItems[i]] as const),
      [c.profile.languages.group, c.profile.languages.items] as const,
    ],
  };
}

// Autocomprobación: cada idioma debe tener un texto por proyecto.
if (es.projects.length !== projectsBase.length || en.projects.length !== projectsBase.length) {
  throw new Error('profile.ts: projects y projectsBase no tienen la misma longitud');
}
