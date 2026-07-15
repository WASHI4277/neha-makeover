import GallerySection from "@/components/GallerySection";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <GallerySection />
      <Reviews />
      <Booking />
      <Contact />
      <Map />
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}