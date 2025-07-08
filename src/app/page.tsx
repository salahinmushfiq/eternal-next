// import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
// import Footer from "@/components/Footer";
// import Gallery from "@/components/gallery";
// import Trending from "@/components/Trending";
import HeroAlternative1 from "@/components/HeroAlternative1";
import Lookbook from "@/components/Lookbok";
import BrandStory from "@/components/BrandStory";
import TrendingLanding from "@/components/TrendingLanding";
// import { Contact } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      
      <HeroAlternative1/>
      <Lookbook/>
      <BrandStory/>
      {/* <Gallery/> */}
      {/* <Trending/> */}
      <TrendingLanding/>
      <Testimonials />
      {/* <Footer /> */}
    </>
  );
}