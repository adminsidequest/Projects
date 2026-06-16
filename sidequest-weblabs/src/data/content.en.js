// English content bundle. content.es.js mirrors this exact shape.
// Section heading titles are split into { pre, accent, post } so components can
// render the accent word in the serif style. lucide icon names stay locale-neutral.

const en = {
  meta: {
    htmlLang: 'en',
    title: 'Sidequest Weblabs · Custom websites for every industry',
    description:
      'Sidequest Weblabs is a boutique web studio that designs and builds fast, custom websites for any industry, from commerce and film to clinics and personal brands.',
  },

  contactInfo: {
    email: 'hello@sidequestweblabs.com',
    location: 'Remote, building for clients everywhere',
  },

  nav: {
    items: [
      { label: 'Work', href: '#work' },
      { label: 'Services', href: '#services' },
      { label: 'Pricing', href: '#packages' },
      { label: 'Process', href: '#process' },
      { label: 'FAQ', href: '#faq' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Start your quest',
    menu: 'Menu',
    close: 'Close',
    skipToContent: 'Skip to content',
    homeLabel: 'Sidequest Weblabs home',
    openMenuLabel: 'Open menu',
    closeMenuLabel: 'Close menu',
  },

  hero: {
    badge: 'Boutique web studio · Booking 2026',
    headline: {
      pre: 'Your next ',
      mark: 'great',
      mid: ' website.',
      nowPre: 'Now a ',
      accent: 'sidequest',
      post: '.',
    },
    sub: 'We design and build fast, custom websites for any industry, from commerce and film to clinics and personal brands. Clean code you own outright, zero template bloat.',
    ctaPrimary: 'Start your quest',
    ctaSecondary: 'See our work',
    proofs: ['Custom code you own', 'Sub 2s load times', 'Fixed price', 'Accessible by default'],
    shaderCaption: 'rendered live · webgl',
    stickerText: 'Fixed price · You own the code · ',
  },

  industriesEyebrow: 'Custom sites for every kind of business',
  industries: [
    'Commerce',
    'Film & Creative',
    'Healthcare',
    'Local Business',
    'Personal Brands',
    'Hospitality',
    'Real Estate',
    'Startups',
    'Nonprofits',
    'Restaurants',
  ],

  highlights: [
    { value: '100%', label: 'Custom code you own, zero template lock-in' },
    { value: 'Sub 2s', label: 'Target load time on every build' },
    { value: 'WCAG AA', label: 'Accessibility baked in as standard' },
    { value: 'Fixed price', label: 'Quoted up front, no surprise change orders' },
  ],

  work: {
    eyebrow: 'Selected work',
    title: { pre: 'Proof we ', accent: 'sweat the details', post: '.' },
    intro:
      'A young studio with a high bar. Here are our client projects, plus a set of concept builds across industries. Every one is a real, interactive site you can click through.',
    visitCta: 'Visit live site',
    caseStudyCta: 'View case study',
    cursorLabel: 'view',
    featured: {
      slug: 'lumetric-films',
      name: 'Lumetric Films',
      industry: 'Film · Video & Photography',
      label: 'Launch project',
      blurb:
        'A cinematic single-page portfolio for a video and photography studio. Hero background reel, hover-reveal video showcase with lightbox, full-screen photography gallery, custom cursor glow, and a film-grain finish. Built on React 19, Vite, and Tailwind, fast and fully responsive.',
      url: 'https://lumetric-films.vercel.app',
      domain: 'lumetric-films.vercel.app',
      tags: ['React 19', 'Cinematic UI', 'Video showcase'],
      image: '/work/lumetric.jpg',
      alt: 'Lumetric Films website homepage, a dark cinematic hero with the studio logo and tagline',
    },
    clinic: {
      slug: 'colonyrecto',
      name: 'Colon y Recto S.A.',
      industry: 'Healthcare · Medical clinic',
      label: 'Client project',
      blurb:
        'A rebuilt website for a colon and rectal clinic in Guatemala City, led by Dr. Héctor Enríquez Blanco. We kept every service and detail from the original site and added online appointment requests, WhatsApp, a map, patient education, and full medical SEO. Shipped as its own production site.',
      url: 'https://colonyrecto.vercel.app',
      domain: 'colonyrecto.com.gt',
      tags: ['Appointment form', 'WhatsApp', 'Medical SEO'],
      image: '/work/colonyrecto.jpg',
      alt: 'Colon y Recto clinic website homepage, a calm blue medical hero with the doctor and an appointment call to action',
    },
    samplesEyebrow: 'Sample builds',
    samplesTitle: 'Concept sites, one per industry',
    samplesNote:
      'Four fictional brands, four styles, four feature sets. Each is a real interactive build you can explore live. Click any one to see how we would approach that field.',
    samples: [
      {
        slug: 'saveur',
        name: 'Saveur',
        industry: 'Restaurant · Fine dining',
        blurb:
          'A warm editorial site for a seasonal bistro, with a tabbed signature menu and a reservation form that confirms the booking on the spot.',
        url: '/demos/saveur/',
        domain: 'saveur.restaurant',
        tags: ['Tabbed menu', 'Reservations', 'Editorial'],
        image: '/work/saveur.jpg',
        alt: 'Saveur restaurant demo homepage, an elegant cream and burgundy hero over a plated dish',
      },
      {
        slug: 'pulse',
        name: 'Pulse',
        industry: 'Fitness · Strength studio',
        blurb:
          'A bold, high-energy studio site with stats that count up as you scroll, an interactive weekly class schedule, and membership tiers.',
        url: '/demos/pulse/',
        domain: 'pulsefitness.co',
        tags: ['Class schedule', 'Animated stats', 'Membership tiers'],
        image: '/work/pulse.jpg',
        alt: 'Pulse fitness demo homepage, a dark gym hero with a neon lime headline',
      },
      {
        slug: 'nimbus',
        name: 'Nimbus',
        industry: 'SaaS · Analytics product',
        blurb:
          'A clean product site with a glassy dashboard mockup, a monthly and annual pricing toggle, and an expandable FAQ.',
        url: '/demos/nimbus/',
        domain: 'nimbus.app',
        tags: ['Pricing toggle', 'FAQ accordion', 'Dashboard UI'],
        image: '/work/nimbus.jpg',
        alt: 'Nimbus SaaS demo homepage, a light gradient hero beside a glass analytics dashboard',
      },
      {
        slug: 'lustre',
        name: 'Lustre',
        industry: 'E-commerce · Fine jewelry',
        blurb:
          'A minimal luxury storefront with a product grid, add to bag, and a slide-in cart drawer that keeps a live subtotal and item count.',
        url: '/demos/lustre/',
        domain: 'lustre.jewelry',
        tags: ['Product grid', 'Cart drawer', 'Minimal luxury'],
        image: '/work/lustre.jpg',
        alt: 'Lustre jewelry demo homepage, an airy editorial hero over a pearl necklace',
      },
      {
        slug: 'aurelia',
        name: 'Aurelia',
        industry: 'Travel · Boutique resort',
        blurb:
          'An immersive coastal resort site with a scroll parallax hero, a date-range booking bar that prices the stay, and a full-screen room lightbox.',
        url: '/demos/aurelia/',
        domain: 'aurelia.hotel',
        tags: ['Booking calendar', 'Room lightbox', 'Parallax'],
        image: '/work/aurelia.jpg',
        alt: 'Aurelia resort demo homepage, an immersive sunset beach hero with an elegant serif headline',
      },
      {
        slug: 'atelier',
        name: 'Atelier',
        industry: 'Architecture · Interiors studio',
        blurb:
          'A bold architectural studio site with a filterable project portfolio, a lightbox, and a drag before and after slider that wipes a renovation.',
        url: '/demos/atelier/',
        domain: 'atelier.studio',
        tags: ['Filterable work', 'Before/after slider', 'Architectural'],
        image: '/work/atelier.jpg',
        alt: 'Atelier studio demo homepage, oversized grotesque type beside a modern house photograph',
      },
      {
        slug: 'halcyon',
        name: 'Halcyon',
        industry: 'E-commerce · Online store',
        blurb:
          'A full online store with a live cart, checkout, order history, and an admin to manage products, stock, and prices. Everything works and persists in the browser.',
        url: '/demos/halcyon/',
        domain: 'halcyon.store',
        tags: ['Cart & checkout', 'Order history', 'Admin dashboard'],
        image: '/work/halcyon.jpg',
        alt: 'Halcyon online store demo homepage, a home goods storefront with a product grid and cart',
      },
    ],
    invite: {
      industry: 'Commerce · Business · Personal · Healthcare',
      name: 'Your project here',
      blurb:
        'These four are concept builds. Yours would be the real thing, a custom site tailored to your field, built end to end and yours to keep.',
      cta: 'Start your quest',
      url: '#contact',
    },
  },

  services: {
    eyebrow: 'What we do',
    title: { pre: 'Everything your site needs, ', accent: 'under one roof', post: '.' },
    intro:
      'Design, build, launch, and beyond. One team handles the whole stack, so you get a single standard and a site that actually performs.',
    items: [
      {
        icon: 'PenTool',
        name: 'Custom Web Design',
        description:
          'Strategy-led UX and UI built around your brand, not a stock template. Wireframes, responsive layouts, and a real design system.',
      },
      {
        icon: 'Code2',
        name: 'Web Development',
        description:
          'Hand-coded front-end builds on modern frameworks. Fast, accessible, and clean, with forms, analytics, and integrations wired in.',
      },
      {
        icon: 'ShoppingBag',
        name: 'E-commerce',
        description:
          'Product pages, secure checkout, and payments on Shopify or a fully custom stack, built to actually sell and easy to manage.',
      },
      {
        icon: 'Clapperboard',
        name: 'Portfolio & Creative Sites',
        description:
          'Cinematic, media-heavy sites for filmmakers, photographers, and artists where the experience is the pitch. See Lumetric Films.',
      },
      {
        icon: 'Palette',
        name: 'Branding & Identity',
        description:
          'Logo, color, and type systems with a simple brand guide, so your site and everything around it feels like one studio made it.',
      },
      {
        icon: 'Gauge',
        name: 'Performance & SEO Foundations',
        description:
          'Sub 2 second loads, Core Web Vitals tuning, and on-page SEO baked in from day one, not bolted on later.',
      },
      {
        icon: 'Accessibility',
        name: 'Accessibility',
        description:
          'WCAG 2.1 AA contrast, keyboard navigation, and descriptive alt text as standard, so every visitor can use your site.',
      },
      {
        icon: 'RefreshCw',
        name: 'Redesigns & Migrations',
        description:
          'Move off a clunky builder or refresh a dated site without losing your content, your rankings, or your traffic.',
      },
      {
        icon: 'ShieldCheck',
        name: 'Care & Maintenance',
        description:
          'Optional monthly plans for updates, backups, security, and small changes, so your site stays fast and current after launch.',
      },
    ],
  },

  packages: {
    eyebrow: 'Pricing',
    title: { pre: 'Pick your ', accent: 'quest', post: '.' },
    intro:
      'Clear, fixed-price packages with no surprise change orders. Every build is custom and yours to keep. Prices are starting points, and we send an exact quote after a quick chat.',
    popularTag: 'Most popular',
    timelinePrefix: 'Timeline',
    fromLabel: 'From',
    cta: 'Start your quest',
    items: [
      {
        name: 'Side Quest',
        subtitle: 'The first level. Perfect for getting online fast with one focused page.',
        price: 'From $1,500',
        cadence: '1 to 2 weeks',
        blurb:
          'A sharp one-page or landing site to get a real presence online fast. Perfect for a launch, an event, or a single offer.',
        features: [
          'One-page or landing site, custom designed',
          'Mobile-responsive across all devices',
          'Contact form and click-to-call',
          'On-page SEO basics and fast load',
          'Lightweight CMS so you can edit text',
          'Launch support and analytics setup',
        ],
        popular: false,
      },
      {
        name: 'Main Quest',
        subtitle: 'The full adventure. Your main site, start to finish.',
        price: 'From $3,500',
        cadence: '3 to 5 weeks',
        blurb:
          'A full multi-page site for growing businesses that need to look credible and convert. Our most popular build.',
        features: [
          '5 to 8 custom-designed pages',
          'Custom layouts with strong calls to action',
          'Blog or resource section setup',
          'CRM or email-tool integration',
          'Enhanced on-page SEO and analytics',
          'Light performance optimization',
          'Two rounds of revisions',
          '30 days of post-launch support',
        ],
        popular: true,
      },
      {
        name: 'Legendary',
        subtitle: 'Legendary tier. Fully custom, with no limits.',
        price: 'From $8,000',
        cadence: '6 to 10 weeks',
        blurb:
          'A fully custom, strategy-driven build for brands that want a standout experience and advanced functionality.',
        features: [
          'Discovery, UX strategy, and custom design',
          'Fully custom front-end development',
          'Advanced features like booking, portals, or multi-language',
          'Professional copywriting support',
          'Technical SEO and accessibility pass',
          'Third-party and API integrations',
          'Custom CMS configuration and training',
          '60 days of post-launch support',
        ],
        popular: false,
      },
    ],
    custom: {
      title: 'Something bigger in mind?',
      note: 'Running an online store or need something fully bespoke? E-commerce builds typically start around $5,000, and complex custom platforms or web apps are quoted per project. Tell us what you have in mind and we will scope an honest fixed price. No surprise change orders.',
      cta: 'Get a custom quote',
    },
  },

  process: {
    eyebrow: 'How it works',
    title: { pre: 'From idea to launch, ', accent: 'no guesswork', post: '.' },
    intro:
      'A calm, transparent path from first call to launch day. You always know what is happening and what comes next.',
    steps: [
      {
        title: 'Briefing',
        description:
          'We start with a focused call to learn your goals, audience, and what success looks like, then send a clear fixed-price proposal and timeline.',
      },
      {
        title: 'Map the Quest',
        description:
          'We define sitemap, content, and a moodboard, then design the key pages so you can see and approve the direction before we build.',
      },
      {
        title: 'Build',
        description:
          'We hand-code your site on a modern stack, wire up forms and integrations, and tune it for speed, SEO, and accessibility.',
      },
      {
        title: 'Review & Polish',
        description:
          'You review on a live staging link. We run your revision rounds, do a final QA pass across devices, and get sign-off.',
      },
      {
        title: 'Launch & Hand-off',
        description:
          'We deploy, set up analytics, and hand over the keys. You own all the code, and an optional care plan keeps it running smoothly.',
      },
    ],
  },

  care: {
    eyebrow: 'After launch',
    title: { pre: 'Keep it running at ', accent: 'full speed', post: '.' },
    intro:
      'Optional monthly care plans for updates, backups, security, and small changes. Cancel anytime, and you can always edit content yourself.',
    items: [
      {
        name: 'Checkpoint',
        subtitle: 'Your site always saved and up to date, with backups and monitoring.',
        price: '$99',
        cadence: 'per month',
        description:
          'Core updates, daily backups, uptime and security monitoring, and email support. Keeps the lights on and the site safe.',
      },
      {
        name: 'Respawn',
        subtitle: 'If something breaks, we revive it. Recovery and support when you need it.',
        price: '$199',
        cadence: 'per month',
        description:
          'Everything in Checkpoint plus tested updates, one hour of content or design changes each month, and same-day response.',
      },
      {
        name: 'Power-Up',
        subtitle: 'Upgrades to level up your site, with optimization and new features.',
        price: '$399',
        cadence: 'per month',
        description:
          'Three hours of dev time monthly, priority queue, proactive performance tuning, and a dedicated point of contact.',
      },
      {
        name: 'SEO Boost',
        subtitle: 'Climb the Google rankings, month after month.',
        price: 'From $500',
        cadence: 'per month',
        description:
          'Ongoing search optimization add-on: on-page work, content guidance, local SEO, and monthly reporting. Pairs with any plan.',
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: { pre: 'Questions, ', accent: 'answered', post: '.' },
    items: [
      {
        q: 'How much does a website cost?',
        a: 'Our packages start at $1,500 for a one-page site and $3,500 for a full multi-page build. Fully custom and e-commerce projects start around $8,000 and $5,000 respectively. Every project gets a fixed price up front, so you always know the number before we begin.',
      },
      {
        q: 'How long does it take?',
        a: 'A landing site is usually 1 to 2 weeks, a standard multi-page site is 3 to 5 weeks, and a fully custom build runs 6 to 10 weeks. Timelines depend on how quickly content and feedback come back, and we keep you posted at every stage.',
      },
      {
        q: 'What does the process look like?',
        a: 'Five steps: briefing, mapping the project, building, review and polish, then launch and hand-off. You approve the design before we build and review everything on a live staging link before it goes public.',
      },
      {
        q: 'Do I own my website and the code?',
        a: 'Yes, completely. When we launch, you own all of the code, content, and accounts outright. We build custom, so there is no proprietary lock-in and no licensed template you have to keep paying for.',
      },
      {
        q: 'How many revisions do I get?',
        a: 'Our standard packages include two rounds of revisions on the design, and we are reasonable about small tweaks along the way. Larger scope changes are quoted clearly so there are never surprise charges.',
      },
      {
        q: 'What technology do you build on?',
        a: 'We build with modern frameworks like React and Next.js, or Shopify for stores, choosing whatever fits your needs best. Everything is hand-coded for speed, with Core Web Vitals, SEO, and WCAG accessibility considered from the start.',
      },
      {
        q: 'Who handles hosting and domains?',
        a: 'We set up fast, modern hosting and connect your domain during launch, and we will walk you through it. Hosting and domain fees are billed directly to you by the providers, typically a small monthly and yearly cost, so you stay in full control.',
      },
      {
        q: 'Do you maintain the site after launch?',
        a: 'If you want us to. Care plans start at $99 a month for updates, backups, security, and monitoring, with higher tiers that include monthly dev time. Plans are optional, and you can always edit content yourself through the CMS.',
      },
    ],
  },

  about: {
    eyebrow: 'The studio',
    title: { pre: 'A small studio with a ', accent: 'big standard', post: '.' },
    p1: 'Sidequest Weblabs is an independent web studio. We design and build custom websites that load fast, look sharp, and are yours to keep. No page builders, no template you rent forever, just clean code shaped around your goals.',
    p2: 'We are new, and we treat that as an advantage. You work directly with the people building your site, every project gets full attention, and we are out to make each one a portfolio piece. Lumetric Films was first. Your project could be next.',
    principles: [
      'You own everything: code, content, and accounts.',
      'Fixed pricing, quoted before we start.',
      'Built for speed, accessibility, and SEO from day one.',
      'A direct line to the people doing the work.',
    ],
  },

  closing: {
    kicker: 'Ready player one',
    title: { pre: 'Ready to start your ', accent: 'sidequest', post: '?' },
    sub: 'Tell us about your project and what success looks like. We reply within one business day with ideas and an honest, fixed-price quote.',
    ctaPrimary: 'Start your quest',
    ctaSecondary: 'Email us',
  },

  caseStudies: {
    'lumetric-films': {
      meta: {
        title: 'Lumetric Films case study · Sidequest Weblabs',
        description:
          'How we designed and built a fast, cinematic single-page portfolio for Lumetric Films, a video and photography studio, on React 19, Vite, and Tailwind.',
      },
      eyebrow: 'Case study',
      name: 'Lumetric Films',
      summary:
        'A cinematic single-page portfolio for a video and photography studio, where the browsing experience is the pitch.',
      facts: [
        { label: 'Industry', value: 'Film, video & photography' },
        { label: 'Year', value: '2026' },
        { label: 'Scope', value: 'Design & development' },
        { label: 'Stack', value: 'React 19 · Vite · Tailwind' },
      ],
      url: 'https://lumetric-films.vercel.app',
      domain: 'lumetric-films.vercel.app',
      visitCta: 'Visit live site',
      image: '/work/lumetric.jpg',
      imageAlt:
        'Lumetric Films website homepage, a dark cinematic hero with the studio logo and tagline',
      sections: [
        {
          title: 'The brief',
          body: 'Lumetric Films needed a site that felt like their work: cinematic, fast, and unmistakably theirs. The brief was simple and demanding at once. The website itself had to be the showreel, not just a place to host one.',
        },
        {
          title: 'What we built',
          body: 'We designed and hand-coded a single-page experience that leads with motion and lets the work do the talking.',
          points: [
            'A hero background reel that sets the tone the moment the page loads',
            'A video showcase that reveals silent, looping previews on hover, then opens any piece in a full-screen lightbox',
            'A full-screen photography gallery for stills and frames from recent sets',
            'Signature touches: a custom cursor glow and a subtle film-grain finish across the page',
            'Fast and fully responsive, built on React 19, Vite, and Tailwind with no template bloat',
          ],
        },
        {
          title: 'The result',
          body: 'A portfolio that loads fast, feels cinematic, and is fully owned by the studio, code, content, and all. It is live, and it is the kind of first impression that books the next project.',
        },
      ],
      closing: {
        title: 'Want something like this?',
        body: 'Every Sidequest build is custom and yours to keep. Tell us about your project and we will scope an honest, fixed price.',
        cta: 'Start your quest',
      },
      back: 'Back to all work',
    },
    colonyrecto: {
      meta: {
        title: 'Colon y Recto S.A. case study · Sidequest Weblabs',
        description:
          'How we rebuilt the website for Colon y Recto S.A., the clinic of Dr. Héctor Enríquez Blanco in Guatemala City, with online appointments, WhatsApp, a map, and full medical SEO.',
      },
      eyebrow: 'Case study · Healthcare',
      name: 'Colon y Recto S.A.',
      summary:
        'A clearer, faster, more trustworthy website for a colon and rectal clinic in Guatemala City, built to turn visits into appointments.',
      facts: [
        { label: 'Industry', value: 'Healthcare · Coloproctology' },
        { label: 'Location', value: 'Ciudad de Guatemala' },
        { label: 'Scope', value: 'Redesign & development' },
        { label: 'Stack', value: 'HTML · Tailwind · Vanilla JS' },
      ],
      url: 'https://colonyrecto.vercel.app',
      domain: 'colonyrecto.com.gt',
      visitCta: 'Visit live site',
      image: '/work/colonyrecto.jpg',
      imageAlt:
        'Colon y Recto clinic website homepage, a calm blue medical hero with the doctor and an appointment call to action',
      sections: [
        {
          title: 'The brief',
          body: 'Dr. Héctor Enríquez Blanco runs a well established gastrointestinal center in Guatemala City, with more than 35 years of experience. The existing site held the right information but felt dated and was hard to act on. The brief was to keep every detail, make it feel trustworthy and current, and make booking effortless.',
        },
        {
          title: 'What we built',
          body: 'We kept all of the original content and reorganized it around the patient.',
          points: [
            'A calm, modern medical design in the clinic blues, with the doctor and the real clinic building front and center',
            'Every service, unit, and condition from the original, rewritten in plain, reassuring Spanish',
            'An appointment request form that reaches the clinic by email or WhatsApp, plus click to call and a floating WhatsApp button',
            'A patient information section with study preparation and an FAQ, and a Google map of the Zona 10 location',
            'Full medical SEO with structured data and social cards, on fast static hosting and its own repository',
          ],
        },
        {
          title: 'The result',
          body: 'A site that loads fast, reads clearly, and makes the next step obvious. It ships as its own production project, ready to point at colonyrecto.com.gt, and easy for the clinic to grow.',
        },
      ],
      closing: {
        title: 'Run a clinic or practice?',
        body: 'We build calm, trustworthy sites that bring in patients, in Spanish or English, and yours to keep. Tell us about it and we will scope an honest, fixed price.',
        cta: 'Start your quest',
      },
      back: 'Back to all work',
    },
    saveur: {
      meta: {
        title: 'Saveur restaurant concept · Sidequest Weblabs',
        description:
          'A warm, editorial demo site for a fine-dining bistro, with a tabbed signature menu and a reservation form that confirms instantly. A Sidequest Weblabs sample build.',
      },
      kind: 'sample',
      eyebrow: 'Sample build · Restaurant',
      name: 'Saveur',
      summary:
        'A concept site for a seasonal French bistro, where the menu and the table feel as considered as the food.',
      facts: [
        { label: 'Industry', value: 'Restaurant · Fine dining' },
        { label: 'Type', value: 'Concept build' },
        { label: 'Style', value: 'Warm editorial' },
        { label: 'Stack', value: 'HTML · Tailwind · Vanilla JS' },
      ],
      url: '/demos/saveur/',
      domain: 'saveur.restaurant',
      visitCta: 'Open live demo',
      image: '/work/saveur.jpg',
      imageAlt:
        'Saveur restaurant demo homepage, an elegant cream and burgundy hero over a plated dish',
      sections: [
        {
          title: 'The idea',
          body: 'We wanted to show how a neighborhood restaurant can feel refined without feeling stuffy. Cream, burgundy, and brass, a classic serif, and big appetizing photography do the heavy lifting, so the site reads like a printed menu you actually want to hold.',
        },
        {
          title: 'What it shows',
          body: 'This is a working front end, not a flat mockup. Two interactions carry it.',
          points: [
            'A signature menu with category tabs for starters, mains, desserts, and wine that filter the dishes instantly',
            'A reservation form that validates the details and confirms the booking on the spot, echoing the date, time, and party size',
            'A seasonal story strip, a chef quote, and a gallery to set the mood',
            'Hours, location, and a clear path to reserve from anywhere on the page',
            'Fully responsive, accessible, and fast, with no template bloat',
          ],
        },
        {
          title: 'How we would build it for real',
          body: 'For a live restaurant we would wire the reservation form to a real booking system or your inbox, connect the menu to something you can edit yourself, and add online ordering if you sell takeout. The look stays, the plumbing becomes real.',
        },
      ],
      closing: {
        title: 'Run a restaurant or cafe?',
        body: 'We can build you something like Saveur, tailored to your room and your menu, and yours to keep. Tell us about it and we will scope an honest, fixed price.',
        cta: 'Start your quest',
      },
      back: 'Back to all work',
    },
    pulse: {
      meta: {
        title: 'Pulse fitness concept · Sidequest Weblabs',
        description:
          'A bold, high-energy demo site for a strength studio, with scroll-animated stats, an interactive weekly schedule, and membership tiers. A Sidequest Weblabs sample build.',
      },
      kind: 'sample',
      eyebrow: 'Sample build · Fitness',
      name: 'Pulse',
      summary:
        'A concept site for a boutique strength studio, built to feel as loud and energetic as the room it sells.',
      facts: [
        { label: 'Industry', value: 'Fitness · Strength studio' },
        { label: 'Type', value: 'Concept build' },
        { label: 'Style', value: 'Bold · High energy' },
        { label: 'Stack', value: 'HTML · Tailwind · Vanilla JS' },
      ],
      url: '/demos/pulse/',
      domain: 'pulsefitness.co',
      visitCta: 'Open live demo',
      image: '/work/pulse.jpg',
      imageAlt: 'Pulse fitness demo homepage, a dark gym hero with a neon lime headline',
      sections: [
        {
          title: 'The idea',
          body: 'A gym site has to sell energy in the first second. Near black, a volt lime accent, and oversized condensed type give Pulse a charged, confident feel, with motion that pushes you toward joining.',
        },
        {
          title: 'What it shows',
          body: 'Three interactions do the selling here.',
          points: [
            'Headline stats that count up from zero as the section scrolls into view',
            'An interactive weekly schedule with a tab for each day and the full class list, coach, and spots left',
            'Membership tiers with a highlighted most popular plan and clear feature lists',
            'Program cards and coach profiles to build trust',
            'Respects reduced motion, stays fully responsive, and loads fast',
          ],
        },
        {
          title: 'How we would build it for real',
          body: 'For a real studio we would connect the schedule and memberships to your booking platform, take sign-ups and payments online, and let you update classes yourself. The energy stays, the operations get real.',
        },
      ],
      closing: {
        title: 'Run a gym or studio?',
        body: 'We can build you something like Pulse, tuned to your brand and your classes, and yours to keep. Tell us about it and we will scope an honest, fixed price.',
        cta: 'Start your quest',
      },
      back: 'Back to all work',
    },
    nimbus: {
      meta: {
        title: 'Nimbus SaaS concept · Sidequest Weblabs',
        description:
          'A clean, modern demo site for a SaaS analytics product, with a glass dashboard mockup, a monthly and annual pricing toggle, and an FAQ accordion. A Sidequest Weblabs sample build.',
      },
      kind: 'sample',
      eyebrow: 'Sample build · SaaS',
      name: 'Nimbus',
      summary:
        'A concept site for a team analytics product, where the marketing page feels as polished as the software it sells.',
      facts: [
        { label: 'Industry', value: 'SaaS · Software product' },
        { label: 'Type', value: 'Concept build' },
        { label: 'Style', value: 'Clean · Modern' },
        { label: 'Stack', value: 'HTML · Tailwind · Vanilla JS' },
      ],
      url: '/demos/nimbus/',
      domain: 'nimbus.app',
      visitCta: 'Open live demo',
      image: '/work/nimbus.jpg',
      imageAlt:
        'Nimbus SaaS demo homepage, a light gradient hero beside a glass analytics dashboard',
      sections: [
        {
          title: 'The idea',
          body: 'Software buyers judge the product by the website. Soft gradients, glassy cards, and a calm indigo palette give Nimbus a trustworthy, modern feel, led by a product mockup that hints at the real thing.',
        },
        {
          title: 'What it shows',
          body: 'This page leans on the patterns that actually convert for SaaS.',
          points: [
            'A glass dashboard mockup built in pure HTML and SVG, with KPI tiles, a trend chart, and goals',
            'A pricing section with a monthly and annual toggle that recomputes every plan',
            'An FAQ accordion that opens one answer at a time',
            'A features grid, a how it works flow, and a trust strip of logos',
            'A responsive mobile menu, accessible controls, and a fast, light build',
          ],
        },
        {
          title: 'How we would build it for real',
          body: 'For a live product we would connect pricing to your billing, wire the sign-up flow to your app, and feed the dashboard real data or a live demo. The design system carries straight into the product.',
        },
      ],
      closing: {
        title: 'Launching a product?',
        body: 'We can build you something like Nimbus, shaped around your product and your story, and yours to keep. Tell us about it and we will scope an honest, fixed price.',
        cta: 'Start your quest',
      },
      back: 'Back to all work',
    },
    lustre: {
      meta: {
        title: 'Lustre jewelry concept · Sidequest Weblabs',
        description:
          'A minimal luxury demo store for a jewelry boutique, with a product grid, add to bag, and a slide-in cart drawer with a live subtotal. A Sidequest Weblabs sample build.',
      },
      kind: 'sample',
      eyebrow: 'Sample build · E-commerce',
      name: 'Lustre',
      summary:
        'A concept storefront for a fine jewelry boutique, where restraint and whitespace make the pieces the hero.',
      facts: [
        { label: 'Industry', value: 'E-commerce · Fine jewelry' },
        { label: 'Type', value: 'Concept build' },
        { label: 'Style', value: 'Minimal luxury' },
        { label: 'Stack', value: 'HTML · Tailwind · Vanilla JS' },
      ],
      url: '/demos/lustre/',
      domain: 'lustre.jewelry',
      visitCta: 'Open live demo',
      image: '/work/lustre.jpg',
      imageAlt: 'Lustre jewelry demo homepage, an airy editorial hero over a pearl necklace',
      sections: [
        {
          title: 'The idea',
          body: 'Luxury retail sells through restraint. A near white canvas, a champagne accent, and a light elegant serif give Lustre room to breathe, so each piece feels considered and worth keeping.',
        },
        {
          title: 'What it shows',
          body: 'The shopping flow is real, all in the browser.',
          points: [
            'A product grid where each piece can be added to the bag in one tap',
            'A slide-in cart drawer with quantity steppers, remove, and a live subtotal',
            'A cart count in the header that stays in sync as you shop',
            'An editorial lookbook, a craft story, and a newsletter sign-up',
            'Closeable by the overlay or the Escape key, responsive, and accessible',
          ],
        },
        {
          title: 'How we would build it for real',
          body: 'For a real shop we would connect this to Shopify or a custom checkout, wire payments and inventory, and let you manage products yourself. The cart you see becomes a real one.',
        },
      ],
      closing: {
        title: 'Selling something beautiful?',
        body: 'We can build you something like Lustre, fitted to your products and your brand, and yours to keep. Tell us about it and we will scope an honest, fixed price.',
        cta: 'Start your quest',
      },
      back: 'Back to all work',
    },
    aurelia: {
      meta: {
        title: 'Aurelia resort concept · Sidequest Weblabs',
        description:
          'An immersive demo site for a boutique coastal resort, with a scroll parallax hero, a date-range booking bar that prices the stay, and a full-screen room lightbox. A Sidequest Weblabs sample build.',
      },
      kind: 'sample',
      eyebrow: 'Sample build · Travel',
      name: 'Aurelia',
      summary:
        'A concept site for a boutique coastal resort, built to feel like the place itself, calm, sensory, and unhurried.',
      facts: [
        { label: 'Industry', value: 'Travel · Hospitality' },
        { label: 'Type', value: 'Concept build' },
        { label: 'Style', value: 'Immersive coastal' },
        { label: 'Stack', value: 'HTML · Tailwind · Vanilla JS' },
      ],
      url: '/demos/aurelia/',
      domain: 'aurelia.hotel',
      visitCta: 'Open live demo',
      image: '/work/aurelia.jpg',
      imageAlt:
        'Aurelia resort demo homepage, an immersive sunset beach hero with an elegant serif headline',
      sections: [
        {
          title: 'The idea',
          body: 'A resort sells a feeling more than a room. Full bleed photography, a soft scroll parallax, and a warm coastal palette of deep teal, sand, and sunset coral let Aurelia breathe, so the page feels like arriving rather than browsing.',
        },
        {
          title: 'What it shows',
          body: 'Two interactions carry the experience, both running entirely in the browser.',
          points: [
            'A date-range booking bar that checks the dates, counts the nights, and prices three room types for the stay',
            'Rooms and suites with their own image galleries that open in a full-screen lightbox you can step through',
            'A gentle parallax hero that settles as you scroll, with reduced motion respected',
            'Experiences, a gallery, and a sense of place to round out the story',
            'Fully responsive, accessible, and fast',
          ],
        },
        {
          title: 'How we would build it for real',
          body: 'For a real property we would connect the booking bar to your reservation system or channel manager, pull live rates and availability, and take deposits online. The mood stays, the booking becomes real.',
        },
      ],
      closing: {
        title: 'Run a hotel or rental?',
        body: 'We can build you something like Aurelia, shaped around your property and your guests, and yours to keep. Tell us about it and we will scope an honest, fixed price.',
        cta: 'Start your quest',
      },
      back: 'Back to all work',
    },
    atelier: {
      meta: {
        title: 'Atelier architecture concept · Sidequest Weblabs',
        description:
          'A bold demo site for an architecture and interiors studio, with a filterable project portfolio, a lightbox, and a drag before and after slider. A Sidequest Weblabs sample build.',
      },
      kind: 'sample',
      eyebrow: 'Sample build · Architecture',
      name: 'Atelier',
      summary:
        'A concept site for an architecture and interiors studio, where the layout is as composed and structural as the work.',
      facts: [
        { label: 'Industry', value: 'Architecture · Interiors' },
        { label: 'Type', value: 'Concept build' },
        { label: 'Style', value: 'Architectural · Bold' },
        { label: 'Stack', value: 'HTML · Tailwind · Vanilla JS' },
      ],
      url: '/demos/atelier/',
      domain: 'atelier.studio',
      visitCta: 'Open live demo',
      image: '/work/atelier.jpg',
      imageAlt:
        'Atelier studio demo homepage, oversized grotesque type beside a modern house photograph',
      sections: [
        {
          title: 'The idea',
          body: 'A design studio is judged on composition. Oversized grotesque type, a strict grid, hairline rules, and a stone palette with a single terracotta accent give Atelier a precise, confident presence that lets the buildings speak.',
        },
        {
          title: 'What it shows',
          body: 'Two interactions make it a portfolio worth exploring.',
          points: [
            'A filterable project grid that sorts the work by type, with a lightbox you can step through',
            'A before and after slider you drag to wipe a raw space into the finished interior, on mouse, touch, or keyboard',
            'Oversized index numerals and a structural grid that hold the page together',
            'Services, studio philosophy, and a clear path to start a project',
            'Fully responsive, accessible, and fast',
          ],
        },
        {
          title: 'How we would build it for real',
          body: 'For a real studio we would connect the work to a system you can update yourself, add full project pages, and wire the enquiry flow to your inbox. The structure stays, the content becomes yours to manage.',
        },
      ],
      closing: {
        title: 'Run a studio or agency?',
        body: 'We can build you something like Atelier, tuned to your work and your voice, and yours to keep. Tell us about it and we will scope an honest, fixed price.',
        cta: 'Start your quest',
      },
      back: 'Back to all work',
    },
    halcyon: {
      meta: {
        title: 'Halcyon online store concept · Sidequest Weblabs',
        description:
          'A full e-commerce demo: storefront, live cart, checkout, order history, and an admin to manage products, stock, and prices. A Sidequest Weblabs sample build.',
      },
      kind: 'sample',
      eyebrow: 'Sample build · E-commerce',
      name: 'Halcyon',
      summary:
        'A complete online store for a home and lifestyle brand, with a working cart, checkout, order history, and a full admin behind it.',
      facts: [
        { label: 'Industry', value: 'E-commerce · Retail' },
        { label: 'Type', value: 'Concept build' },
        { label: 'Style', value: 'Modern retail' },
        { label: 'Stack', value: 'HTML · Tailwind · Vanilla JS' },
      ],
      url: '/demos/halcyon/',
      domain: 'halcyon.store',
      visitCta: 'Open live demo',
      image: '/work/halcyon.jpg',
      imageAlt:
        'Halcyon online store demo homepage, a home goods storefront with a product grid and cart',
      sections: [
        {
          title: 'The idea',
          body: 'This is our most thorough sample, a full shop rather than a storefront. We wanted to show the whole loop a real store needs: browse, add to cart, check out, and an owner side to run it. A warm, modern retail look in forest green and open white space keeps it feeling trustworthy.',
        },
        {
          title: 'What it shows',
          body: 'Every part works and persists in your browser, so you can actually shop it and manage it.',
          points: [
            'A storefront with search, category filters, sorting, product pages, sale pricing, ratings, and sold out states',
            'A live cart and slide-in drawer, a promo code, a free shipping threshold, and a full checkout with validation',
            'Real orders: placing one decrements stock, creates an order, and shows up in an order history',
            'An admin behind a passcode to add, edit, and delete products and manage stock and prices, with a dashboard of sales and low stock',
            'Edits in the admin show on the storefront right away, because it all runs on one shared data layer',
          ],
        },
        {
          title: 'Try the admin',
          body: 'Open the live demo, scroll to the footer, and choose Admin. The passcode is shown on the screen. Add a product or change a price and stock level, then go back to the shop and watch it update. Everything is stored locally in your browser, nothing is sent anywhere.',
        },
        {
          title: 'How we would build it for real',
          body: 'For a live store we would move the catalog and orders to a real database, wire payments through Stripe or Shopify, add accounts and email receipts, and put the admin behind a proper login. The experience you see here is the front of that, ready to connect.',
        },
      ],
      closing: {
        title: 'Selling online?',
        body: 'A real shop is the biggest thing we build, and we would love to build yours, designed around your products and yours to keep. Tell us about it and we will scope an honest, fixed price.',
        cta: 'Start your quest',
      },
      back: 'Back to all work',
    },
  },

  contact: {
    eyebrow: 'Contact',
    title: { pre: "Let's build something ", accent: 'worth bookmarking', post: '.' },
    intro:
      'Share a few details and we will come back with ideas and a fixed-price quote. No pressure, no jargon.',
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@email.com',
      projectType: 'Project type',
      projectTypes: [
        'Landing page',
        'Multi-page website',
        'E-commerce store',
        'Redesign or migration',
        'Something else',
      ],
      budget: 'Budget',
      budgets: ['Under $2,000', '$2,000 to $5,000', '$5,000 to $10,000', '$10,000 or more', 'Not sure yet'],
      message: 'Project details',
      messagePlaceholder: 'What are you building, and what does success look like?',
      submit: 'Send message',
      sending: 'Sending...',
      success: 'Thanks. Your message is on its way, we will reply within one business day.',
      error: 'Something went wrong. Please try again, or email us directly.',
      mailSubject: 'New project inquiry from',
      mailVisitor: 'a visitor',
      mailLabels: { name: 'Name', email: 'Email', projectType: 'Project type', budget: 'Budget' },
      notePre: 'Prefer to write directly? Reach us at',
      notePost: '.',
    },
    details: [
      { kind: 'email', label: 'Email' },
      { kind: 'time', label: 'Response time', value: 'Within one business day' },
      { kind: 'place', label: 'Where we work', value: 'Remote, building for clients everywhere' },
    ],
    note: 'Every inquiry gets a real reply from the people who would build your site. We will tell you honestly if we are the right fit.',
  },

  footer: {
    tagline: 'Custom websites for every industry, built fast and made to last. You own the code, always.',
    columns: [
      {
        title: 'Studio',
        links: [
          { label: 'Work', href: '#work' },
          { label: 'Services', href: '#services' },
          { label: 'Process', href: '#process' },
          { label: 'About', href: '#about' },
        ],
      },
      {
        title: 'Get started',
        links: [
          { label: 'Packages', href: '#packages' },
          { label: 'Care plans', href: '#care' },
          { label: 'FAQ', href: '#faq' },
          { label: 'Start a project', href: '#contact' },
        ],
      },
    ],
    rights: 'Copyright 2026 Sidequest Weblabs. All rights reserved.',
    signature: 'Designed and built in-house. Naturally.',
  },
};

export default en;
