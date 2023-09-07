import "./page.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import BrandingVideo from "@/components/BrandingVideo/BrandingVideo";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />
    </div>
  );
}
