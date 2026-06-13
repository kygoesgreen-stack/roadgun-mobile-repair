import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Reviews from "./components/Reviews";
import ServiceArea from "./components/ServiceArea";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-orange-500 focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <Reviews />
        <ServiceArea />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
