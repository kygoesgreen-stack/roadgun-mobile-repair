import PageShell from "./components/PageShell";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Reviews from "./components/Reviews";
import ServiceArea from "./components/ServiceArea";
import ContactForm from "./components/ContactForm";

// Title, description, and canonical come from the defaults in layout.tsx.
export default function Home() {
  return (
    <PageShell>
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <Reviews />
      <ServiceArea />
      <ContactForm />
    </PageShell>
  );
}
