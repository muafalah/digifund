"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import "./Hero.css";
import EmailBox from "../EmailBox/EmailBox";
import { HeroData } from "@/data/homepage";

const Hero = () => {
  const variants = (delay) => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay,
      },
    },
  });

  return (
    <div className="h-wrapper">
      <div className="container">
        <Image
          src={"/hero/hero-arrow.png"}
          alt="arrow"
          fill
          width={0}
          height={0}
          sizes="100vw"
          style={{
            position: "absolute",
            top: "7rem",
            width: "100%",
            maxWidth: "60rem",
            zIndex: "0",
            maxHeight: "100vh",
          }}
        />
        <div className="h-container">
          {/* Left Side */}
          <div className="h-left">
            <div className="image-row">
              {HeroData.slice(0, 3).map((person, index) => (
                <div className="person-pill" key={index}>
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{
                      backgroundColor: person.bg,
                    }}
                    className="person-pill-bg"
                  >
                    <Image
                      src={`/${person.src}`}
                      alt={person.src}
                      objectFit="cover"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                        scale: "200%",
                        marginTop: "4rem",
                      }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="image-row">
              {HeroData.slice(3, 6).map((person, index) => (
                <div className="person-pill" key={index}>
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{
                      backgroundColor: person.bg,
                    }}
                    className="person-pill-bg"
                  >
                    <Image
                      src={`/${person.src}`}
                      alt={person.src}
                      objectFit="cover"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                        scale: "200%",
                        marginTop: "4rem",
                      }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="h-right">
            <div className="h-title">
              <span>Redefine How</span>
              <span>You Grow Your</span>
              <span>Digital Business</span>
            </div>

            <div className="h-des">
              Revenue based funding and execution support designed for early
              stage founders
            </div>

            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
