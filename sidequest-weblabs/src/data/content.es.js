// Spanish (Guatemala, es-GT) content bundle. Mirrors content.en.js exactly.
// Tone: warm "usted". English game-brand names are kept as proper nouns with a
// Spanish descriptor subtitle. Pricing is in Quetzales (Q). No em or en dashes.

const es = {
  meta: {
    htmlLang: 'es-GT',
    title: 'Sidequest Weblabs · Sitios web a la medida',
    description:
      'Estudio web boutique que diseña y desarrolla sitios web rápidos y a la medida para cualquier industria. Código limpio que es suyo, sin plantillas.',
  },

  contactInfo: {
    email: 'hello@sidequestweblabs.com',
    location: 'Remoto, trabajamos con clientes en todas partes',
  },

  nav: {
    items: [
      { label: 'Trabajo', href: '#work' },
      { label: 'Servicios', href: '#services' },
      { label: 'Precios', href: '#packages' },
      { label: 'Proceso', href: '#process' },
      { label: 'Preguntas', href: '#faq' },
      { label: 'Nosotros', href: '#about' },
      { label: 'Contacto', href: '#contact' },
    ],
    cta: 'Empiece su misión',
    menu: 'Menú',
    close: 'Cerrar',
    skipToContent: 'Saltar al contenido',
    homeLabel: 'Inicio de Sidequest Weblabs',
    openMenuLabel: 'Abrir menú',
    closeMenuLabel: 'Cerrar menú',
  },

  hero: {
    badge: 'Estudio web boutique · Agenda 2026',
    headline: {
      pre: 'Su próximo ',
      mark: 'gran',
      mid: ' sitio web.',
      nowPre: 'Ahora, una ',
      accent: 'sidequest',
      post: '.',
    },
    sub: 'Diseñamos y construimos sitios web rápidos y a la medida para cualquier industria, desde comercio y cine hasta clínicas y marcas personales. Código limpio que es totalmente suyo, sin plantillas recargadas.',
    ctaPrimary: 'Empiece su misión',
    ctaSecondary: 'Vea nuestro trabajo',
    proofs: ['El código es suyo', 'Carga en menos de 2s', 'Precio fijo', 'Accesible desde el inicio'],
    shaderCaption: 'renderizado en vivo · webgl',
    stickerText: 'Precio fijo · El código es suyo · ',
  },

  industriesEyebrow: 'Sitios a la medida para todo tipo de negocio',
  industries: [
    'Comercio',
    'Cine y Creativo',
    'Salud',
    'Negocio Local',
    'Marcas Personales',
    'Hotelería',
    'Bienes Raíces',
    'Startups',
    'ONG',
    'Restaurantes',
  ],

  highlights: [
    { value: '100%', label: 'Código a la medida que es suyo, sin ataduras a plantillas' },
    { value: '< 2s', label: 'Tiempo de carga objetivo en cada proyecto' },
    { value: 'WCAG AA', label: 'Accesibilidad incluida como estándar' },
    { value: 'Precio fijo', label: 'Cotizado por adelantado, sin cobros sorpresa' },
  ],

  work: {
    eyebrow: 'Trabajo seleccionado',
    title: { pre: 'Cuidamos cada ', accent: 'detalle', post: '.' },
    intro:
      'Un estudio joven con un estándar alto. Estos son nuestros proyectos para clientes, más una serie de sitios conceptuales por industria. Cada uno es un sitio real e interactivo que puede recorrer.',
    visitCta: 'Ver sitio en vivo',
    caseStudyCta: 'Ver caso de estudio',
    cursorLabel: 'ver',
    featured: {
      slug: 'lumetric-films',
      name: 'Lumetric Films',
      industry: 'Cine · Video y Fotografía',
      label: 'Proyecto de lanzamiento',
      blurb:
        'Un portafolio cinematográfico de una sola página para un estudio de video y fotografía. Reel de fondo, galería de video con vista previa al pasar el cursor y lightbox, galería de fotografía a pantalla completa, cursor con resplandor personalizado y acabado con grano de película. Construido en React 19, Vite y Tailwind, rápido y totalmente responsivo.',
      url: 'https://lumetric-films.vercel.app',
      domain: 'lumetric-films.vercel.app',
      tags: ['React 19', 'UI cinematográfica', 'Galería de video'],
      image: '/work/lumetric.jpg',
      alt: 'Página de inicio del sitio de Lumetric Films, un hero cinematográfico oscuro con el logo y eslogan del estudio',
    },
    clinic: {
      slug: 'colonyrecto',
      name: 'Colon y Recto S.A.',
      industry: 'Salud · Clínica médica',
      label: 'Proyecto de cliente',
      blurb:
        'Un sitio web renovado para una clínica de colon y recto en la Ciudad de Guatemala, del Dr. Héctor Enríquez Blanco. Conservamos cada servicio y detalle del sitio original y agregamos solicitud de citas en línea, WhatsApp, mapa, información para pacientes y SEO médico completo. Entregado como su propio sitio en producción.',
      url: 'https://colonyrecto.vercel.app',
      domain: 'colonyrecto.com.gt',
      tags: ['Solicitud de citas', 'WhatsApp', 'SEO médico'],
      image: '/work/colonyrecto.jpg',
      alt: 'Página de inicio del sitio de la clínica Colon y Recto, un hero médico azul y sereno con el doctor y una llamada a agendar cita',
    },
    samplesEyebrow: 'Sitios de muestra',
    samplesTitle: 'Sitios conceptuales, uno por industria',
    samplesNote:
      'Cuatro marcas ficticias, cuatro estilos, cuatro conjuntos de funciones. Cada uno es un sitio real e interactivo que puede explorar en vivo. Abra cualquiera para ver cómo trabajaríamos ese rubro.',
    samples: [
      {
        slug: 'saveur',
        name: 'Saveur',
        industry: 'Restaurante · Alta cocina',
        blurb:
          'Un sitio editorial y cálido para un bistró de temporada, con un menú por pestañas y un formulario de reserva que confirma al instante.',
        url: '/demos/saveur/',
        domain: 'saveur.restaurant',
        tags: ['Menú por pestañas', 'Reservas', 'Editorial'],
        image: '/work/saveur.jpg',
        alt: 'Página de inicio del demo de restaurante Saveur, un hero elegante en crema y borgoña sobre un plato servido',
      },
      {
        slug: 'pulse',
        name: 'Pulse',
        industry: 'Fitness · Estudio de fuerza',
        blurb:
          'Un sitio de estudio audaz y enérgico con cifras que suben al hacer scroll, un horario semanal interactivo y planes de membresía.',
        url: '/demos/pulse/',
        domain: 'pulsefitness.co',
        tags: ['Horario de clases', 'Cifras animadas', 'Planes de membresía'],
        image: '/work/pulse.jpg',
        alt: 'Página de inicio del demo de fitness Pulse, un hero oscuro de gimnasio con un titular en lima neón',
      },
      {
        slug: 'nimbus',
        name: 'Nimbus',
        industry: 'SaaS · Producto de analítica',
        blurb:
          'Un sitio de producto limpio con un panel de control simulado, un interruptor de precio mensual y anual, y preguntas frecuentes desplegables.',
        url: '/demos/nimbus/',
        domain: 'nimbus.app',
        tags: ['Interruptor de precio', 'Acordeón de FAQ', 'UI de panel'],
        image: '/work/nimbus.jpg',
        alt: 'Página de inicio del demo SaaS Nimbus, un hero claro con degradado junto a un panel de analítica tipo vidrio',
      },
      {
        slug: 'lustre',
        name: 'Lustre',
        industry: 'E-commerce · Joyería fina',
        blurb:
          'Una tienda de lujo minimalista con cuadrícula de productos, agregar a la bolsa y un carrito lateral que mantiene el subtotal y el conteo en vivo.',
        url: '/demos/lustre/',
        domain: 'lustre.jewelry',
        tags: ['Cuadrícula de productos', 'Carrito lateral', 'Lujo minimalista'],
        image: '/work/lustre.jpg',
        alt: 'Página de inicio del demo de joyería Lustre, un hero editorial y aireado sobre un collar de perlas',
      },
      {
        slug: 'aurelia',
        name: 'Aurelia',
        industry: 'Viajes · Resort boutique',
        blurb:
          'Un sitio inmersivo de resort costero con un hero con parallax, una barra de reservas por rango de fechas que cotiza la estadía y un lightbox de habitaciones a pantalla completa.',
        url: '/demos/aurelia/',
        domain: 'aurelia.hotel',
        tags: ['Calendario de reservas', 'Lightbox de habitaciones', 'Parallax'],
        image: '/work/aurelia.jpg',
        alt: 'Página de inicio del demo de resort Aurelia, un hero inmersivo de playa al atardecer con un titular serif elegante',
      },
      {
        slug: 'atelier',
        name: 'Atelier',
        industry: 'Arquitectura · Estudio de interiores',
        blurb:
          'Un sitio de estudio de arquitectura audaz con un portafolio de proyectos filtrable, un lightbox y un control deslizante de antes y después que revela una renovación.',
        url: '/demos/atelier/',
        domain: 'atelier.studio',
        tags: ['Trabajo filtrable', 'Antes y después', 'Arquitectónico'],
        image: '/work/atelier.jpg',
        alt: 'Página de inicio del demo de estudio Atelier, tipografía grotesca enorme junto a la foto de una casa moderna',
      },
      {
        slug: 'halcyon',
        name: 'Halcyon',
        industry: 'E-commerce · Tienda en línea',
        blurb:
          'Una tienda en línea completa con carrito en vivo, checkout, historial de pedidos y un panel para gestionar productos, stock y precios. Todo funciona y se guarda en el navegador.',
        url: '/demos/halcyon/',
        domain: 'halcyon.store',
        tags: ['Carrito y checkout', 'Historial de pedidos', 'Panel de administración'],
        image: '/work/halcyon.jpg',
        alt: 'Página de inicio del demo de tienda Halcyon, una tienda de artículos para el hogar con una cuadrícula de productos y carrito',
      },
    ],
    invite: {
      industry: 'Comercio · Negocios · Personal · Salud',
      name: 'Su proyecto aquí',
      blurb:
        'Estos cuatro son conceptos. El suyo sería lo real, un sitio a la medida de su rubro, construido de principio a fin y que queda en sus manos.',
      cta: 'Empiece su misión',
      url: '#contact',
    },
  },

  services: {
    eyebrow: 'Qué hacemos',
    title: { pre: 'Todo lo que su sitio necesita, ', accent: 'en un solo lugar', post: '.' },
    intro:
      'Diseño, desarrollo, lanzamiento y más allá. Un solo equipo se encarga de todo, así que usted obtiene un único estándar y un sitio que de verdad rinde.',
    items: [
      {
        icon: 'PenTool',
        name: 'Diseño Web a la Medida',
        description:
          'UX y UI guiados por estrategia, construidos alrededor de su marca y no de una plantilla genérica. Wireframes, diseños responsivos y un sistema de diseño real.',
      },
      {
        icon: 'Code2',
        name: 'Desarrollo Web',
        description:
          'Desarrollo front-end programado a mano sobre frameworks modernos. Rápido, accesible y limpio, con formularios, analítica e integraciones listas.',
      },
      {
        icon: 'ShoppingBag',
        name: 'E-commerce',
        description:
          'Páginas de producto, pagos seguros y checkout en Shopify o en una plataforma totalmente a la medida, hecho para vender y fácil de administrar.',
      },
      {
        icon: 'Clapperboard',
        name: 'Portafolios y Sitios Creativos',
        description:
          'Sitios cinematográficos y con mucho contenido para cineastas, fotógrafos y artistas, donde la experiencia es la propuesta. Vea Lumetric Films.',
      },
      {
        icon: 'Palette',
        name: 'Marca e Identidad',
        description:
          'Sistemas de logo, color y tipografía con una guía de marca sencilla, para que su sitio y todo a su alrededor se sienta hecho por un mismo estudio.',
      },
      {
        icon: 'Gauge',
        name: 'Rendimiento y Bases de SEO',
        description:
          'Cargas en menos de 2 segundos, ajuste de Core Web Vitals y SEO en la página desde el primer día, no como un agregado posterior.',
      },
      {
        icon: 'Accessibility',
        name: 'Accesibilidad',
        description:
          'Contraste WCAG 2.1 AA, navegación por teclado y textos alternativos descriptivos como estándar, para que cualquier persona pueda usar su sitio.',
      },
      {
        icon: 'RefreshCw',
        name: 'Rediseños y Migraciones',
        description:
          'Salga de un constructor limitado o renueve un sitio anticuado sin perder su contenido, sus posiciones ni su tráfico.',
      },
      {
        icon: 'ShieldCheck',
        name: 'Soporte y Mantenimiento',
        description:
          'Planes mensuales opcionales para actualizaciones, respaldos, seguridad y cambios pequeños, para que su sitio siga rápido y al día después del lanzamiento.',
      },
    ],
  },

  packages: {
    eyebrow: 'Precios',
    title: { pre: 'Elija su ', accent: 'misión', post: '.' },
    intro:
      'Paquetes con precio fijo y claro, sin cobros sorpresa. Cada proyecto es a la medida y queda en sus manos. Los precios son un punto de partida, y enviamos una cotización exacta tras una breve conversación.',
    popularTag: 'El más elegido',
    timelinePrefix: 'Tiempo',
    fromLabel: 'Desde',
    cta: 'Empiece su misión',
    items: [
      {
        name: 'Side Quest',
        subtitle: 'El primer nivel. Ideal para arrancar con un sitio rápido y puntual.',
        price: 'Desde Q2,500',
        cadence: '1 a 2 semanas',
        blurb:
          'Un sitio de una página o landing, directo y efectivo, para tener presencia real en línea rápido. Perfecto para un lanzamiento, un evento o una sola oferta.',
        features: [
          'Sitio de una página o landing, diseñado a la medida',
          'Responsivo en todos los dispositivos',
          'Formulario de contacto y clic para llamar',
          'Bases de SEO en la página y carga rápida',
          'CMS ligero para que usted edite el texto',
          'Apoyo en el lanzamiento y configuración de analítica',
        ],
        popular: false,
      },
      {
        name: 'Main Quest',
        subtitle: 'La aventura completa. Su sitio principal, de inicio a fin.',
        price: 'Desde Q6,500',
        cadence: '3 a 5 semanas',
        blurb:
          'Un sitio completo de varias páginas para negocios en crecimiento que necesitan verse creíbles y convertir. Nuestro proyecto más elegido.',
        features: [
          '5 a 8 páginas diseñadas a la medida',
          'Diseños a la medida con llamados a la acción claros',
          'Sección de blog o de recursos',
          'Integración con CRM o herramienta de correo',
          'SEO en la página y analítica mejorados',
          'Optimización de rendimiento',
          'Dos rondas de revisiones',
          '30 días de soporte después del lanzamiento',
        ],
        popular: true,
      },
      {
        name: 'Legendary',
        subtitle: 'Nivel legendario. Todo a la medida, sin límites.',
        price: 'Desde Q15,000',
        cadence: '6 a 10 semanas',
        blurb:
          'Un proyecto totalmente a la medida y guiado por estrategia, para marcas que quieren una experiencia sobresaliente y funciones avanzadas.',
        features: [
          'Descubrimiento, estrategia de UX y diseño a la medida',
          'Desarrollo front-end totalmente a la medida',
          'Funciones avanzadas como reservas, portales o varios idiomas',
          'Apoyo profesional de redacción',
          'Revisión técnica de SEO y accesibilidad',
          'Integraciones con terceros y APIs',
          'Configuración de CMS a la medida y capacitación',
          '60 días de soporte después del lanzamiento',
        ],
        popular: false,
      },
    ],
    custom: {
      title: '¿Algo más grande en mente?',
      note: '¿Tiene una tienda en línea o necesita algo totalmente a la medida? Las tiendas e-commerce normalmente arrancan alrededor de Q9,000, y las plataformas o aplicaciones web complejas se cotizan por proyecto. Cuéntenos qué tiene en mente y definiremos un precio fijo y honesto. Sin cobros sorpresa.',
      cta: 'Pida una cotización',
    },
  },

  process: {
    eyebrow: 'Cómo trabajamos',
    title: { pre: 'De la idea al lanzamiento, ', accent: 'sin sorpresas', post: '.' },
    intro:
      'Un camino claro y tranquilo desde la primera llamada hasta el día del lanzamiento. Usted siempre sabe qué está pasando y qué sigue.',
    steps: [
      {
        title: 'Conversación inicial',
        description:
          'Empezamos con una llamada enfocada para conocer sus metas, su público y cómo se ve el éxito, y luego enviamos una propuesta clara con precio fijo y cronograma.',
      },
      {
        title: 'Trazar la misión',
        description:
          'Definimos el mapa del sitio, el contenido y un moodboard, y luego diseñamos las páginas clave para que usted vea y apruebe la dirección antes de construir.',
      },
      {
        title: 'Construcción',
        description:
          'Programamos su sitio a mano sobre una plataforma moderna, conectamos formularios e integraciones, y lo afinamos para velocidad, SEO y accesibilidad.',
      },
      {
        title: 'Revisión y pulido',
        description:
          'Usted revisa en un enlace de staging en vivo. Hacemos sus rondas de revisión, una última pasada de control de calidad en todos los dispositivos, y obtenemos su aprobación.',
      },
      {
        title: 'Lanzamiento y entrega',
        description:
          'Publicamos, configuramos la analítica y le entregamos las llaves. Usted es dueño de todo el código, y un plan de soporte opcional lo mantiene funcionando sin problemas.',
      },
    ],
  },

  care: {
    eyebrow: 'Después del lanzamiento',
    title: { pre: 'Manténgalo a ', accent: 'toda velocidad', post: '.' },
    intro:
      'Planes mensuales de soporte opcionales para actualizaciones, respaldos, seguridad y cambios pequeños. Cancele cuando quiera, y siempre puede editar el contenido usted mismo.',
    items: [
      {
        name: 'Checkpoint',
        subtitle: 'Su sitio siempre guardado y al día, con respaldos y monitoreo continuo.',
        price: 'Q295',
        cadence: 'al mes',
        description:
          'Actualizaciones esenciales, respaldos diarios, monitoreo de seguridad y disponibilidad, y soporte por correo. Mantiene el sitio encendido y seguro.',
      },
      {
        name: 'Respawn',
        subtitle: 'Si algo falla, lo revivimos. Recuperación y soporte cuando lo necesite.',
        price: 'Q495',
        cadence: 'al mes',
        description:
          'Todo lo de Checkpoint más actualizaciones probadas, una hora de cambios de contenido o diseño al mes, y respuesta el mismo día.',
      },
      {
        name: 'Power-Up',
        subtitle: 'Mejoras para subir de nivel su sitio, con optimización y nuevas funciones.',
        price: 'Q795',
        cadence: 'al mes',
        description:
          'Tres horas de desarrollo al mes, fila prioritaria, optimización de rendimiento proactiva y un punto de contacto dedicado.',
      },
      {
        name: 'SEO Boost',
        subtitle: 'Suba de posición en Google, mes a mes.',
        price: 'Desde Q1,200',
        cadence: 'al mes',
        description:
          'Complemento de optimización para buscadores: trabajo en la página, guía de contenido, SEO local y reporte mensual. Combina con cualquier plan.',
      },
    ],
  },

  faq: {
    eyebrow: 'Preguntas',
    title: { pre: 'Preguntas, ', accent: 'respondidas', post: '.' },
    items: [
      {
        q: '¿Cuánto cuesta un sitio web?',
        a: 'Nuestros paquetes arrancan en Q2,500 para un sitio de una página y Q6,500 para un sitio completo de varias páginas. Los proyectos totalmente a la medida y de e-commerce arrancan alrededor de Q15,000 y Q9,000 respectivamente. Cada proyecto recibe un precio fijo por adelantado, así que usted siempre conoce el monto antes de empezar.',
      },
      {
        q: '¿Cuánto tiempo toma?',
        a: 'Un sitio landing normalmente toma de 1 a 2 semanas, un sitio estándar de varias páginas de 3 a 5 semanas, y un proyecto totalmente a la medida de 6 a 10 semanas. Los tiempos dependen de qué tan rápido lleguen el contenido y la retroalimentación, y lo mantenemos al tanto en cada etapa.',
      },
      {
        q: '¿Cómo es el proceso?',
        a: 'Cinco pasos: conversación inicial, trazar la misión, construir, revisión y pulido, y por último lanzamiento y entrega. Usted aprueba el diseño antes de construir y revisa todo en un enlace de staging en vivo antes de que salga al público.',
      },
      {
        q: '¿El sitio y el código son míos?',
        a: 'Sí, por completo. Al lanzar, usted es dueño de todo el código, el contenido y las cuentas. Construimos a la medida, así que no hay ataduras ni una plantilla con licencia que tenga que seguir pagando.',
      },
      {
        q: '¿Cuántas revisiones incluye?',
        a: 'Nuestros paquetes estándar incluyen dos rondas de revisiones del diseño, y somos flexibles con los ajustes pequeños en el camino. Los cambios de alcance mayores se cotizan con claridad, así que nunca hay cobros sorpresa.',
      },
      {
        q: '¿Con qué tecnología construyen?',
        a: 'Construimos con frameworks modernos como React y Next.js, o Shopify para tiendas, eligiendo lo que mejor se ajuste a sus necesidades. Todo se programa a mano para velocidad, con Core Web Vitals, SEO y accesibilidad WCAG considerados desde el inicio.',
      },
      {
        q: '¿Quién maneja el hosting y el dominio?',
        a: 'Configuramos un hosting rápido y moderno y conectamos su dominio durante el lanzamiento, y lo guiamos en el proceso. Las cuotas de hosting y dominio se las cobran directamente los proveedores, normalmente un costo mensual y anual pequeño, así que usted mantiene el control total.',
      },
      {
        q: '¿Dan mantenimiento al sitio después del lanzamiento?',
        a: 'Si usted quiere. Los planes de soporte arrancan en Q295 al mes para actualizaciones, respaldos, seguridad y monitoreo, con niveles superiores que incluyen horas de desarrollo. Los planes son opcionales, y siempre puede editar el contenido usted mismo a través del CMS.',
      },
    ],
  },

  about: {
    eyebrow: 'El estudio',
    title: { pre: 'Un estudio pequeño con un ', accent: 'estándar grande', post: '.' },
    p1: 'Sidequest Weblabs es un estudio web independiente. Diseñamos y construimos sitios a la medida que cargan rápido, se ven impecables y quedan en sus manos. Sin constructores, sin plantillas que se rentan para siempre, solo código limpio moldeado alrededor de sus metas.',
    p2: 'Somos nuevos, y lo tomamos como una ventaja. Usted trabaja directamente con las personas que construyen su sitio, cada proyecto recibe atención completa, y buscamos que cada uno sea una pieza de portafolio. Lumetric Films fue el primero. El suyo podría ser el siguiente.',
    principles: [
      'Usted es dueño de todo: código, contenido y cuentas.',
      'Precio fijo, cotizado antes de empezar.',
      'Hecho para velocidad, accesibilidad y SEO desde el primer día.',
      'Línea directa con las personas que hacen el trabajo.',
    ],
  },

  closing: {
    kicker: 'Ready player one',
    title: { pre: '¿Listo para empezar su ', accent: 'sidequest', post: '?' },
    sub: 'Cuéntenos sobre su proyecto y cómo se ve el éxito. Respondemos en un día hábil con ideas y una cotización honesta de precio fijo.',
    ctaPrimary: 'Empiece su misión',
    ctaSecondary: 'Escríbanos',
  },

  caseStudies: {
    'lumetric-films': {
      meta: {
        title: 'Caso de estudio Lumetric Films · Sidequest Weblabs',
        description:
          'Cómo diseñamos y construimos un portafolio cinematográfico de una sola página para Lumetric Films, un estudio de video y fotografía, sobre React 19, Vite y Tailwind.',
      },
      eyebrow: 'Caso de estudio',
      name: 'Lumetric Films',
      summary:
        'Un portafolio cinematográfico de una sola página para un estudio de video y fotografía, donde la experiencia de navegar es la propuesta.',
      facts: [
        { label: 'Industria', value: 'Cine, video y fotografía' },
        { label: 'Año', value: '2026' },
        { label: 'Alcance', value: 'Diseño y desarrollo' },
        { label: 'Stack', value: 'React 19 · Vite · Tailwind' },
      ],
      url: 'https://lumetric-films.vercel.app',
      domain: 'lumetric-films.vercel.app',
      visitCta: 'Ver sitio en vivo',
      image: '/work/lumetric.jpg',
      imageAlt:
        'Página de inicio del sitio de Lumetric Films, un hero cinematográfico oscuro con el logo y eslogan del estudio',
      sections: [
        {
          title: 'El reto',
          body: 'Lumetric Films necesitaba un sitio que se sintiera como su trabajo: cinematográfico, rápido e inconfundiblemente suyo. El reto era simple y exigente a la vez. El sitio mismo tenía que ser el reel, no solo un lugar para alojarlo.',
        },
        {
          title: 'Lo que construimos',
          body: 'Diseñamos y programamos a mano una experiencia de una sola página que arranca con movimiento y deja que el trabajo hable.',
          points: [
            'Un reel de fondo en el hero que marca el tono apenas carga la página',
            'Una galería de video que revela vistas previas en silencio al pasar el cursor, y abre cualquier pieza en un lightbox a pantalla completa',
            'Una galería de fotografía a pantalla completa para imágenes de sesiones recientes',
            'Detalles de autor: un cursor con resplandor personalizado y un acabado sutil con grano de película en toda la página',
            'Rápido y totalmente responsivo, construido sobre React 19, Vite y Tailwind, sin plantillas recargadas',
          ],
        },
        {
          title: 'El resultado',
          body: 'Un portafolio que carga rápido, se siente cinematográfico y es totalmente del estudio, código, contenido y todo. Está en vivo, y es el tipo de primera impresión que consigue el siguiente proyecto.',
        },
      ],
      closing: {
        title: '¿Quiere algo así?',
        body: 'Cada proyecto de Sidequest es a la medida y queda en sus manos. Cuéntenos sobre el suyo y definiremos un precio fijo y honesto.',
        cta: 'Empiece su misión',
      },
      back: 'Volver a todo el trabajo',
    },
    colonyrecto: {
      meta: {
        title: 'Caso de estudio Colon y Recto S.A. · Sidequest Weblabs',
        description:
          'Cómo renovamos el sitio web de Colon y Recto S.A., la clínica del Dr. Héctor Enríquez Blanco en la Ciudad de Guatemala, con citas en línea, WhatsApp, mapa y SEO médico completo.',
      },
      eyebrow: 'Caso de estudio · Salud',
      name: 'Colon y Recto S.A.',
      summary:
        'Un sitio web más claro, rápido y confiable para una clínica de colon y recto en la Ciudad de Guatemala, hecho para convertir visitas en citas.',
      facts: [
        { label: 'Industria', value: 'Salud · Coloproctología' },
        { label: 'Ubicación', value: 'Ciudad de Guatemala' },
        { label: 'Alcance', value: 'Rediseño y desarrollo' },
        { label: 'Stack', value: 'HTML · Tailwind · JS puro' },
      ],
      url: 'https://colonyrecto.vercel.app',
      domain: 'colonyrecto.com.gt',
      visitCta: 'Ver sitio en vivo',
      image: '/work/colonyrecto.jpg',
      imageAlt:
        'Página de inicio del sitio de la clínica Colon y Recto, un hero médico azul y sereno con el doctor y una llamada a agendar cita',
      sections: [
        {
          title: 'El reto',
          body: 'El Dr. Héctor Enríquez Blanco dirige un centro gastrointestinal con trayectoria en la Ciudad de Guatemala, con más de 35 años de experiencia. El sitio anterior tenía la información correcta pero se sentía anticuado y era difícil de accionar. El reto era conservar cada detalle, hacerlo confiable y actual, y volver muy fácil agendar.',
        },
        {
          title: 'Lo que construimos',
          body: 'Conservamos todo el contenido original y lo reorganizamos alrededor del paciente.',
          points: [
            'Un diseño médico sereno y moderno en los azules de la clínica, con el doctor y el edificio real al frente',
            'Cada servicio, unidad y condición del original, reescritos en un español claro y tranquilizador',
            'Un formulario de solicitud de cita que llega a la clínica por correo o WhatsApp, además de llamar con un toque y un botón flotante de WhatsApp',
            'Una sección de información para pacientes con la preparación de estudios y preguntas frecuentes, y un mapa de Google de la Zona 10',
            'SEO médico completo con datos estructurados y tarjetas para redes, en hosting estático rápido y su propio repositorio',
          ],
        },
        {
          title: 'El resultado',
          body: 'Un sitio que carga rápido, se lee claro y deja obvio el siguiente paso. Se entrega como su propio proyecto en producción, listo para apuntar a colonyrecto.com.gt y fácil de hacer crecer para la clínica.',
        },
      ],
      closing: {
        title: '¿Tiene una clínica o consultorio?',
        body: 'Construimos sitios serenos y confiables que atraen pacientes, en español o inglés, y que quedan en sus manos. Cuéntenos y definiremos un precio fijo y honesto.',
        cta: 'Empiece su misión',
      },
      back: 'Volver a todo el trabajo',
    },
    saveur: {
      meta: {
        title: 'Concepto de restaurante Saveur · Sidequest Weblabs',
        description:
          'Un sitio demo editorial y cálido para un bistró de alta cocina, con un menú por pestañas y un formulario de reserva que confirma al instante. Un sitio de muestra de Sidequest Weblabs.',
      },
      kind: 'sample',
      eyebrow: 'Sitio de muestra · Restaurante',
      name: 'Saveur',
      summary:
        'Un sitio conceptual para un bistró francés de temporada, donde el menú y la mesa se sienten tan cuidados como la comida.',
      facts: [
        { label: 'Industria', value: 'Restaurante · Alta cocina' },
        { label: 'Tipo', value: 'Sitio conceptual' },
        { label: 'Estilo', value: 'Editorial cálido' },
        { label: 'Stack', value: 'HTML · Tailwind · JS puro' },
      ],
      url: '/demos/saveur/',
      domain: 'saveur.restaurant',
      visitCta: 'Abrir demo en vivo',
      image: '/work/saveur.jpg',
      imageAlt:
        'Página de inicio del demo de restaurante Saveur, un hero elegante en crema y borgoña sobre un plato servido',
      sections: [
        {
          title: 'La idea',
          body: 'Queríamos mostrar cómo un restaurante de barrio puede sentirse refinado sin sentirse acartonado. La crema, el borgoña y el latón, una tipografía serif clásica y fotografía apetitosa hacen el trabajo, para que el sitio se lea como un menú impreso que da gusto sostener.',
        },
        {
          title: 'Lo que muestra',
          body: 'Es un front end funcional, no una maqueta plana. Dos interacciones lo sostienen.',
          points: [
            'Un menú principal con pestañas de entradas, platos fuertes, postres y vinos que filtran los platillos al instante',
            'Un formulario de reserva que valida los datos y confirma en el momento, repitiendo la fecha, la hora y el número de personas',
            'Una franja de historia de temporada, una cita del chef y una galería para crear ambiente',
            'Horario, ubicación y un camino claro para reservar desde cualquier punto de la página',
            'Totalmente responsivo, accesible y rápido, sin plantillas recargadas',
          ],
        },
        {
          title: 'Cómo lo haríamos de verdad',
          body: 'Para un restaurante real conectaríamos el formulario a un sistema de reservas o a su correo, enlazaríamos el menú a algo que usted mismo pueda editar y agregaríamos pedidos en línea si vende para llevar. El estilo se queda, la mecánica se vuelve real.',
        },
      ],
      closing: {
        title: '¿Tiene un restaurante o cafetería?',
        body: 'Podemos construirle algo como Saveur, a la medida de su salón y su menú, y que queda en sus manos. Cuéntenos y definiremos un precio fijo y honesto.',
        cta: 'Empiece su misión',
      },
      back: 'Volver a todo el trabajo',
    },
    pulse: {
      meta: {
        title: 'Concepto de fitness Pulse · Sidequest Weblabs',
        description:
          'Un sitio demo audaz y enérgico para un estudio de fuerza, con cifras animadas al hacer scroll, un horario semanal interactivo y planes de membresía. Un sitio de muestra de Sidequest Weblabs.',
      },
      kind: 'sample',
      eyebrow: 'Sitio de muestra · Fitness',
      name: 'Pulse',
      summary:
        'Un sitio conceptual para un estudio de fuerza boutique, hecho para sentirse tan intenso y enérgico como la sala que vende.',
      facts: [
        { label: 'Industria', value: 'Fitness · Estudio de fuerza' },
        { label: 'Tipo', value: 'Sitio conceptual' },
        { label: 'Estilo', value: 'Audaz · Enérgico' },
        { label: 'Stack', value: 'HTML · Tailwind · JS puro' },
      ],
      url: '/demos/pulse/',
      domain: 'pulsefitness.co',
      visitCta: 'Abrir demo en vivo',
      image: '/work/pulse.jpg',
      imageAlt:
        'Página de inicio del demo de fitness Pulse, un hero oscuro de gimnasio con un titular en lima neón',
      sections: [
        {
          title: 'La idea',
          body: 'Un sitio de gimnasio tiene que vender energía en el primer segundo. Un negro casi puro, un acento lima neón y una tipografía condensada enorme le dan a Pulse una sensación cargada y segura, con movimiento que empuja a inscribirse.',
        },
        {
          title: 'Lo que muestra',
          body: 'Aquí venden tres interacciones.',
          points: [
            'Cifras de titular que suben desde cero cuando la sección entra en pantalla',
            'Un horario semanal interactivo con una pestaña por día y la lista completa de clases, coach y cupos disponibles',
            'Planes de membresía con un plan más popular destacado y listas de beneficios claras',
            'Tarjetas de programas y perfiles de coaches para generar confianza',
            'Respeta el movimiento reducido, es totalmente responsivo y carga rápido',
          ],
        },
        {
          title: 'Cómo lo haríamos de verdad',
          body: 'Para un estudio real conectaríamos el horario y las membresías a su plataforma de reservas, tomaríamos inscripciones y pagos en línea y le dejaríamos actualizar las clases usted mismo. La energía se queda, la operación se vuelve real.',
        },
      ],
      closing: {
        title: '¿Tiene un gimnasio o estudio?',
        body: 'Podemos construirle algo como Pulse, ajustado a su marca y sus clases, y que queda en sus manos. Cuéntenos y definiremos un precio fijo y honesto.',
        cta: 'Empiece su misión',
      },
      back: 'Volver a todo el trabajo',
    },
    nimbus: {
      meta: {
        title: 'Concepto SaaS Nimbus · Sidequest Weblabs',
        description:
          'Un sitio demo limpio y moderno para un producto de analítica SaaS, con un panel simulado tipo vidrio, un interruptor de precio mensual y anual, y un acordeón de preguntas frecuentes. Un sitio de muestra de Sidequest Weblabs.',
      },
      kind: 'sample',
      eyebrow: 'Sitio de muestra · SaaS',
      name: 'Nimbus',
      summary:
        'Un sitio conceptual para un producto de analítica de equipos, donde la página de marketing se siente tan pulida como el software que vende.',
      facts: [
        { label: 'Industria', value: 'SaaS · Producto de software' },
        { label: 'Tipo', value: 'Sitio conceptual' },
        { label: 'Estilo', value: 'Limpio · Moderno' },
        { label: 'Stack', value: 'HTML · Tailwind · JS puro' },
      ],
      url: '/demos/nimbus/',
      domain: 'nimbus.app',
      visitCta: 'Abrir demo en vivo',
      image: '/work/nimbus.jpg',
      imageAlt:
        'Página de inicio del demo SaaS Nimbus, un hero claro con degradado junto a un panel de analítica tipo vidrio',
      sections: [
        {
          title: 'La idea',
          body: 'Quien compra software juzga el producto por el sitio. Degradados suaves, tarjetas tipo vidrio y una paleta índigo serena le dan a Nimbus una sensación confiable y moderna, guiada por una maqueta de producto que insinúa lo real.',
        },
        {
          title: 'Lo que muestra',
          body: 'Esta página se apoya en los patrones que de verdad convierten en SaaS.',
          points: [
            'Una maqueta de panel tipo vidrio hecha en HTML y SVG puros, con indicadores, una gráfica de tendencia y metas',
            'Una sección de precios con un interruptor mensual y anual que recalcula cada plan',
            'Un acordeón de preguntas frecuentes que abre una respuesta a la vez',
            'Una cuadrícula de funciones, un flujo de cómo funciona y una franja de logos de confianza',
            'Un menú móvil responsivo, controles accesibles y una construcción rápida y ligera',
          ],
        },
        {
          title: 'Cómo lo haríamos de verdad',
          body: 'Para un producto real conectaríamos los precios a su facturación, enlazaríamos el registro a su aplicación y alimentaríamos el panel con datos reales o una demo en vivo. El sistema de diseño pasa directo al producto.',
        },
      ],
      closing: {
        title: '¿Está lanzando un producto?',
        body: 'Podemos construirle algo como Nimbus, formado alrededor de su producto y su historia, y que queda en sus manos. Cuéntenos y definiremos un precio fijo y honesto.',
        cta: 'Empiece su misión',
      },
      back: 'Volver a todo el trabajo',
    },
    lustre: {
      meta: {
        title: 'Concepto de joyería Lustre · Sidequest Weblabs',
        description:
          'Una tienda demo de lujo minimalista para una joyería, con cuadrícula de productos, agregar a la bolsa y un carrito lateral con subtotal en vivo. Un sitio de muestra de Sidequest Weblabs.',
      },
      kind: 'sample',
      eyebrow: 'Sitio de muestra · E-commerce',
      name: 'Lustre',
      summary:
        'Una tienda conceptual para una joyería fina, donde la sobriedad y el espacio en blanco hacen que las piezas sean las protagonistas.',
      facts: [
        { label: 'Industria', value: 'E-commerce · Joyería fina' },
        { label: 'Tipo', value: 'Sitio conceptual' },
        { label: 'Estilo', value: 'Lujo minimalista' },
        { label: 'Stack', value: 'HTML · Tailwind · JS puro' },
      ],
      url: '/demos/lustre/',
      domain: 'lustre.jewelry',
      visitCta: 'Abrir demo en vivo',
      image: '/work/lustre.jpg',
      imageAlt:
        'Página de inicio del demo de joyería Lustre, un hero editorial y aireado sobre un collar de perlas',
      sections: [
        {
          title: 'La idea',
          body: 'El lujo se vende con sobriedad. Un lienzo casi blanco, un acento champaña y una serif ligera y elegante le dan a Lustre espacio para respirar, para que cada pieza se sienta pensada y digna de conservar.',
        },
        {
          title: 'Lo que muestra',
          body: 'El flujo de compra es real, todo en el navegador.',
          points: [
            'Una cuadrícula de productos donde cada pieza se agrega a la bolsa con un toque',
            'Un carrito lateral con control de cantidad, opción de quitar y un subtotal en vivo',
            'Un conteo del carrito en el encabezado que se mantiene sincronizado mientras compra',
            'Un lookbook editorial, una historia de oficio y una suscripción al boletín',
            'Se cierra con la capa de fondo o la tecla Escape, responsivo y accesible',
          ],
        },
        {
          title: 'Cómo lo haríamos de verdad',
          body: 'Para una tienda real conectaríamos esto a Shopify o a un checkout a la medida, enlazaríamos pagos e inventario y le dejaríamos administrar los productos usted mismo. El carrito que ve se vuelve uno de verdad.',
        },
      ],
      closing: {
        title: '¿Vende algo bonito?',
        body: 'Podemos construirle algo como Lustre, ajustado a sus productos y su marca, y que queda en sus manos. Cuéntenos y definiremos un precio fijo y honesto.',
        cta: 'Empiece su misión',
      },
      back: 'Volver a todo el trabajo',
    },
    aurelia: {
      meta: {
        title: 'Concepto de resort Aurelia · Sidequest Weblabs',
        description:
          'Un sitio demo inmersivo para un resort costero boutique, con un hero con parallax, una barra de reservas por rango de fechas que cotiza la estadía y un lightbox de habitaciones a pantalla completa. Un sitio de muestra de Sidequest Weblabs.',
      },
      kind: 'sample',
      eyebrow: 'Sitio de muestra · Viajes',
      name: 'Aurelia',
      summary:
        'Un sitio conceptual para un resort costero boutique, hecho para sentirse como el lugar mismo, sereno, sensorial y sin prisa.',
      facts: [
        { label: 'Industria', value: 'Viajes · Hospitalidad' },
        { label: 'Tipo', value: 'Sitio conceptual' },
        { label: 'Estilo', value: 'Costero inmersivo' },
        { label: 'Stack', value: 'HTML · Tailwind · JS puro' },
      ],
      url: '/demos/aurelia/',
      domain: 'aurelia.hotel',
      visitCta: 'Abrir demo en vivo',
      image: '/work/aurelia.jpg',
      imageAlt:
        'Página de inicio del demo de resort Aurelia, un hero inmersivo de playa al atardecer con un titular serif elegante',
      sections: [
        {
          title: 'La idea',
          body: 'Un resort vende una sensación más que una habitación. Fotografía a sangre completa, un parallax suave al hacer scroll y una paleta costera cálida de teal profundo, arena y coral del atardecer dejan respirar a Aurelia, para que la página se sienta como llegar y no como navegar.',
        },
        {
          title: 'Lo que muestra',
          body: 'Dos interacciones sostienen la experiencia, ambas dentro del navegador.',
          points: [
            'Una barra de reservas por rango de fechas que valida las fechas, cuenta las noches y cotiza tres tipos de habitación para la estadía',
            'Habitaciones y suites con sus propias galerías que abren en un lightbox a pantalla completa que se puede recorrer',
            'Un hero con parallax suave que se asienta al hacer scroll, respetando el movimiento reducido',
            'Experiencias, una galería y una sensación de lugar para completar la historia',
            'Totalmente responsivo, accesible y rápido',
          ],
        },
        {
          title: 'Cómo lo haríamos de verdad',
          body: 'Para una propiedad real conectaríamos la barra de reservas a su sistema de reservaciones o channel manager, traeríamos tarifas y disponibilidad en vivo y tomaríamos depósitos en línea. El ambiente se queda, la reserva se vuelve real.',
        },
      ],
      closing: {
        title: '¿Tiene un hotel o alquiler?',
        body: 'Podemos construirle algo como Aurelia, formado alrededor de su propiedad y sus huéspedes, y que queda en sus manos. Cuéntenos y definiremos un precio fijo y honesto.',
        cta: 'Empiece su misión',
      },
      back: 'Volver a todo el trabajo',
    },
    atelier: {
      meta: {
        title: 'Concepto de arquitectura Atelier · Sidequest Weblabs',
        description:
          'Un sitio demo audaz para un estudio de arquitectura e interiores, con un portafolio de proyectos filtrable, un lightbox y un control deslizante de antes y después. Un sitio de muestra de Sidequest Weblabs.',
      },
      kind: 'sample',
      eyebrow: 'Sitio de muestra · Arquitectura',
      name: 'Atelier',
      summary:
        'Un sitio conceptual para un estudio de arquitectura e interiores, donde la composición de la página es tan estructural como el trabajo.',
      facts: [
        { label: 'Industria', value: 'Arquitectura · Interiores' },
        { label: 'Tipo', value: 'Sitio conceptual' },
        { label: 'Estilo', value: 'Arquitectónico · Audaz' },
        { label: 'Stack', value: 'HTML · Tailwind · JS puro' },
      ],
      url: '/demos/atelier/',
      domain: 'atelier.studio',
      visitCta: 'Abrir demo en vivo',
      image: '/work/atelier.jpg',
      imageAlt:
        'Página de inicio del demo de estudio Atelier, tipografía grotesca enorme junto a la foto de una casa moderna',
      sections: [
        {
          title: 'La idea',
          body: 'A un estudio de diseño se le juzga por la composición. Una tipografía grotesca enorme, una retícula estricta, líneas finas y una paleta de piedra con un único acento terracota le dan a Atelier una presencia precisa y segura que deja hablar a las obras.',
        },
        {
          title: 'Lo que muestra',
          body: 'Dos interacciones lo vuelven un portafolio que vale la pena explorar.',
          points: [
            'Una cuadrícula de proyectos filtrable que ordena el trabajo por tipo, con un lightbox que se puede recorrer',
            'Un control de antes y después que se arrastra para revelar un espacio en obra convertido en el interior terminado, con mouse, táctil o teclado',
            'Numerales de índice enormes y una retícula estructural que sostienen la página',
            'Servicios, filosofía del estudio y un camino claro para iniciar un proyecto',
            'Totalmente responsivo, accesible y rápido',
          ],
        },
        {
          title: 'Cómo lo haríamos de verdad',
          body: 'Para un estudio real conectaríamos el trabajo a un sistema que usted pueda actualizar, agregaríamos páginas completas de proyecto y enlazaríamos el formulario de consulta a su correo. La estructura se queda, el contenido pasa a ser suyo para administrar.',
        },
      ],
      closing: {
        title: '¿Tiene un estudio o agencia?',
        body: 'Podemos construirle algo como Atelier, ajustado a su trabajo y su voz, y que queda en sus manos. Cuéntenos y definiremos un precio fijo y honesto.',
        cta: 'Empiece su misión',
      },
      back: 'Volver a todo el trabajo',
    },
    halcyon: {
      meta: {
        title: 'Concepto de tienda en línea Halcyon · Sidequest Weblabs',
        description:
          'Un demo completo de e-commerce: tienda, carrito en vivo, checkout, historial de pedidos y un panel de administración para gestionar productos, stock y precios. Un sitio de muestra de Sidequest Weblabs.',
      },
      kind: 'sample',
      eyebrow: 'Sitio de muestra · E-commerce',
      name: 'Halcyon',
      summary:
        'Una tienda en línea completa para una marca de hogar y estilo de vida, con carrito, checkout, historial de pedidos y un panel de administración detrás.',
      facts: [
        { label: 'Industria', value: 'E-commerce · Retail' },
        { label: 'Tipo', value: 'Sitio conceptual' },
        { label: 'Estilo', value: 'Retail moderno' },
        { label: 'Stack', value: 'HTML · Tailwind · JS puro' },
      ],
      url: '/demos/halcyon/',
      domain: 'halcyon.store',
      visitCta: 'Abrir demo en vivo',
      image: '/work/halcyon.jpg',
      imageAlt:
        'Página de inicio del demo de tienda Halcyon, una tienda de artículos para el hogar con una cuadrícula de productos y carrito',
      sections: [
        {
          title: 'La idea',
          body: 'Este es nuestro sitio de muestra más completo, una tienda entera y no solo un escaparate. Queríamos mostrar todo el recorrido que necesita una tienda real: explorar, agregar al carrito, pagar y un lado del dueño para administrarla. Un look de retail cálido y moderno en verde bosque y mucho espacio en blanco lo mantiene confiable.',
        },
        {
          title: 'Lo que muestra',
          body: 'Cada parte funciona y se guarda en su navegador, así que de verdad puede comprar y administrar.',
          points: [
            'Una tienda con búsqueda, filtros por categoría, ordenamiento, páginas de producto, precios de oferta, calificaciones y estados de agotado',
            'Un carrito en vivo con panel lateral, un código de promoción, un umbral de envío gratis y un checkout completo con validación',
            'Pedidos reales: al hacer uno se descuenta el stock, se crea el pedido y aparece en un historial',
            'Un panel de administración tras una clave para agregar, editar y eliminar productos y gestionar stock y precios, con un tablero de ventas y stock bajo',
            'Los cambios en la administración se ven en la tienda al instante, porque todo corre sobre una misma capa de datos',
          ],
        },
        {
          title: 'Pruebe la administración',
          body: 'Abra el demo en vivo, baje al pie de página y elija Admin. La clave aparece en pantalla. Agregue un producto o cambie un precio y el stock, luego vuelva a la tienda y véalo actualizarse. Todo se guarda localmente en su navegador, no se envía nada a ningún lado.',
        },
        {
          title: 'Cómo lo haríamos de verdad',
          body: 'Para una tienda real moveríamos el catálogo y los pedidos a una base de datos, conectaríamos pagos con Stripe o Shopify, agregaríamos cuentas y recibos por correo, y pondríamos la administración tras un inicio de sesión real. Lo que ve aquí es el frente de eso, listo para conectar.',
        },
      ],
      closing: {
        title: '¿Vende en línea?',
        body: 'Una tienda real es lo más grande que construimos, y nos encantaría construir la suya, diseñada alrededor de sus productos y que queda en sus manos. Cuéntenos y definiremos un precio fijo y honesto.',
        cta: 'Empiece su misión',
      },
      back: 'Volver a todo el trabajo',
    },
  },

  contact: {
    eyebrow: 'Contacto',
    title: { pre: 'Construyamos algo ', accent: 'que valga la pena guardar', post: '.' },
    intro:
      'Comparta unos cuantos detalles y le responderemos con ideas y una cotización de precio fijo. Sin presión, sin tecnicismos.',
    form: {
      name: 'Nombre',
      namePlaceholder: 'Su nombre',
      email: 'Correo',
      emailPlaceholder: 'usted@correo.com',
      projectType: 'Tipo de proyecto',
      projectTypes: [
        'Landing page',
        'Sitio de varias páginas',
        'Tienda en línea',
        'Rediseño o migración',
        'Otra cosa',
      ],
      budget: 'Presupuesto',
      budgets: ['Menos de Q2,000', 'Q2,000 a Q7,000', 'Q7,000 a Q15,000', 'Más de Q15,000', 'Aún no estoy seguro'],
      message: 'Detalles del proyecto',
      messagePlaceholder: '¿Qué quiere construir y cómo se ve el éxito?',
      submit: 'Enviar mensaje',
      sending: 'Enviando...',
      success: 'Gracias. Su mensaje va en camino, le responderemos en un día hábil.',
      error: 'Algo salió mal. Inténtelo de nuevo, o escríbanos directamente.',
      mailSubject: 'Nueva consulta de proyecto de',
      mailVisitor: 'un visitante',
      mailLabels: { name: 'Nombre', email: 'Correo', projectType: 'Tipo de proyecto', budget: 'Presupuesto' },
      notePre: '¿Prefiere escribir directo? Contáctenos en',
      notePost: '.',
    },
    details: [
      { kind: 'email', label: 'Correo' },
      { kind: 'time', label: 'Tiempo de respuesta', value: 'En un día hábil' },
      { kind: 'place', label: 'Dónde trabajamos', value: 'Remoto, para clientes en todas partes' },
    ],
    note: 'Cada consulta recibe una respuesta real de las personas que construirían su sitio. Le diremos con honestidad si somos el equipo correcto.',
  },

  footer: {
    tagline:
      'Sitios web a la medida para cualquier industria, construidos rápido y hechos para durar. El código es suyo, siempre.',
    columns: [
      {
        title: 'Estudio',
        links: [
          { label: 'Trabajo', href: '#work' },
          { label: 'Servicios', href: '#services' },
          { label: 'Proceso', href: '#process' },
          { label: 'Nosotros', href: '#about' },
        ],
      },
      {
        title: 'Empiece',
        links: [
          { label: 'Paquetes', href: '#packages' },
          { label: 'Planes de soporte', href: '#care' },
          { label: 'Preguntas', href: '#faq' },
          { label: 'Inicie un proyecto', href: '#contact' },
        ],
      },
    ],
    rights: 'Derechos reservados 2026 Sidequest Weblabs.',
    signature: 'Diseñado y construido en casa. Por supuesto.',
  },
};

export default es;
