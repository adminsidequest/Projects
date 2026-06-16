import { Analytics } from '@vercel/analytics/react';
import { useContent } from './i18n.jsx';
import CaseStudy from './components/CaseStudy.jsx';
import Cursor from './components/Cursor.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

// Lightweight routing: the path is /<locale> for the home, or
// /<locale>/work/<slug> for a case study. Links are plain anchors (full loads),
// and each route is prerendered to its own HTML, so no client router is needed.
function resolveRoute() {
  if (typeof window === 'undefined') return { name: 'home' };
  const segments = window.location.pathname.split('/').filter(Boolean);
  if (segments[1] === 'work' && segments[2]) {
    return { name: 'case', slug: segments[2] };
  }
  return { name: 'home' };
}

export default function App() {
  const { nav } = useContent();
  const route = resolveRoute();

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:border-2 focus:border-ink focus:bg-lime focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-ink"
      >
        {nav.skipToContent}
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        {route.name === 'case' ? <CaseStudy slug={route.slug} /> : <Home />}
      </main>
      <Footer />
      <Cursor />
      <Analytics />
    </div>
  );
}
