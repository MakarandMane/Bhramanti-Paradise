import Header from "../components/Header";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Landing() {
  return (
    <main data-testid="landing-page" className="bg-[#FDFBF7] text-[#2C2A29]">
      <Header />
      <Hero />
      <Destinations />
      <Services />
      <Testimonials />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
