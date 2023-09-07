import "./page.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import BrandingVideo from "@/components/BrandingVideo/BrandingVideo";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BrandingVideo />
    </div>
  );
}
