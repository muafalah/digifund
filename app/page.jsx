"use client";

import { motion, useAnimation } from "framer-motion";

import "./page.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import BrandingVideo from "@/components/BrandingVideo/BrandingVideo";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import OurDiff from "@/components/OurDiff/OurDiff";

export default function Home() {
  const controls = useAnimation();

  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--secondary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{
          amount: 0,
        }}
      >
        <OurDiff />
      </motion.div>
    </motion.div>
  );
}
