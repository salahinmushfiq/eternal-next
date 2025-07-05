import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
// import Footer from "@/components/Footer";
import Gallery from "@/components/gallery";
import Trending from "@/components/Trending";
// import { Contact } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Gallery/>
      <Trending/>
      <Testimonials />
      {/* <Footer /> */}
    </>
  );
}