import About from './About.jsx';
import CarePlans from './CarePlans.jsx';
import ClosingCTA from './ClosingCTA.jsx';
import Contact from './Contact.jsx';
import FAQ from './FAQ.jsx';
import Hero from './Hero.jsx';
import Highlights from './Highlights.jsx';
import IndustryStrip from './IndustryStrip.jsx';
import Packages from './Packages.jsx';
import Process from './Process.jsx';
import Services from './Services.jsx';
import Work from './Work.jsx';

// The single-page home: the full pitch in one scroll.
export default function Home() {
  return (
    <>
      <Hero />
      <IndustryStrip />
      <Highlights />
      <Work />
      <Services />
      <Packages />
      <Process />
      <CarePlans />
      <FAQ />
      <About />
      <ClosingCTA />
      <Contact />
    </>
  );
}
