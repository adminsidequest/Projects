// All site content, sourced from the studio brief. Icons are lucide-react names
// resolved to components where they are rendered.

export const highlights = [
  { value: '100%', label: 'Custom code you own, zero template lock-in' },
  { value: 'Sub 2s', label: 'Target load time on every build' },
  { value: 'WCAG AA', label: 'Accessibility baked in as standard' },
  { value: 'Fixed price', label: 'Quoted up front, no surprise change orders' },
];

export const industries = [
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
];

export const services = [
  {
    name: 'Custom Web Design',
    description:
      'Strategy-led UX and UI built around your brand, not a stock template. Wireframes, responsive layouts, and a real design system.',
    icon: 'PenTool',
  },
  {
    name: 'Web Development',
    description:
      'Hand-coded front-end builds on modern frameworks. Fast, accessible, and clean, with forms, analytics, and integrations wired in.',
    icon: 'Code2',
  },
  {
    name: 'E-commerce',
    description:
      'Product pages, secure checkout, and payments on Shopify or a fully custom stack, built to actually sell and easy to manage.',
    icon: 'ShoppingBag',
  },
  {
    name: 'Portfolio & Creative Sites',
    description:
      'Cinematic, media-heavy sites for filmmakers, photographers, and artists where the experience is the pitch. See Lumetric Films.',
    icon: 'Clapperboard',
  },
  {
    name: 'Branding & Identity',
    description:
      'Logo, color, and type systems with a simple brand guide, so your site and everything around it feels like one studio made it.',
    icon: 'Palette',
  },
  {
    name: 'Performance & SEO Foundations',
    description:
      'Sub 2 second loads, Core Web Vitals tuning, and on-page SEO baked in from day one, not bolted on later.',
    icon: 'Gauge',
  },
  {
    name: 'Accessibility',
    description:
      'WCAG 2.1 AA contrast, keyboard navigation, and descriptive alt text as standard, so every visitor can use your site.',
    icon: 'Accessibility',
  },
  {
    name: 'Redesigns & Migrations',
    description:
      'Move off a clunky builder or refresh a dated site without losing your content, your rankings, or your traffic.',
    icon: 'RefreshCw',
  },
  {
    name: 'Care & Maintenance',
    description:
      'Optional monthly plans for updates, backups, security, and small changes, so your site stays fast and current after launch.',
    icon: 'ShieldCheck',
  },
];

export const packages = [
  {
    name: 'Side Quest',
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
];

export const customNote =
  'Running an online store or need something fully bespoke? E-commerce builds typically start around $5,000, and complex custom platforms or web apps are quoted per project. Tell us what you have in mind and we will scope an honest fixed price. No surprise change orders.';

export const carePlans = [
  {
    name: 'Checkpoint',
    price: '$99',
    cadence: 'per month',
    description:
      'Core updates, daily backups, uptime and security monitoring, and email support. Keeps the lights on and the site safe.',
  },
  {
    name: 'Respawn',
    price: '$199',
    cadence: 'per month',
    description:
      'Everything in Checkpoint plus tested updates, one hour of content or design changes each month, and same-day response.',
  },
  {
    name: 'Power-Up',
    price: '$399',
    cadence: 'per month',
    description:
      'Three hours of dev time monthly, priority queue, proactive performance tuning, and a dedicated point of contact.',
  },
  {
    name: 'SEO Boost',
    price: 'From $500',
    cadence: 'per month',
    description:
      'Ongoing search optimization add-on: on-page work, content guidance, local SEO, and monthly reporting. Pairs with any plan.',
  },
];

export const process = [
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
];

export const faqs = [
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
];

export const portfolio = [
  {
    name: 'Lumetric Films',
    industry: 'Film · Video & Photography',
    blurb:
      'A cinematic single-page portfolio for a video and photography studio. Hero background reel, hover-reveal video showcase with lightbox, full-screen photography gallery, custom cursor glow, and a film-grain finish. Built on React 19, Vite, and Tailwind, fast and fully responsive.',
    url: 'https://lumetric-films.vercel.app',
    tags: ['React 19', 'Cinematic UI', 'Video showcase'],
    featured: true,
  },
  {
    name: 'Your project here',
    industry: 'Commerce · Business · Personal · Healthcare',
    blurb:
      'From online stores to clinics, personal brands, and local businesses, we build custom sites tailored to each field. Lumetric Films is our launch project, and your build could be the next case study on this page.',
    url: '#contact',
    tags: ['Any industry', 'Custom build'],
    featured: false,
  },
];

// Studio contact details. Update email/phone with real values when ready.
export const contact = {
  email: 'hello@sidequestweblabs.com',
  instagram: 'https://www.instagram.com/',
  location: 'Remote, building for clients everywhere',
};
