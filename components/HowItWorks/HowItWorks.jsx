"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { hiwFeatures } from "@/data/homepage";
import "./HowItWorks.css";
import { tagVariants, titleVariants } from "@/data/animation";

const HowItWorks = () => {
  const featureVariants = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };

  return (
    <div className="hiw-wrapper">
      <div className="container">
        <div className="hiw-container">
          {/* Head */}
          <div className="hiw-head">
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={tagVariants}
              className="tag"
            >
              How it works
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariants}
              className="title"
            >
              Unlocking potential along the growth journey
            </motion.span>
          </div>

          {/* Feature */}
          <div className="hiw-features">
            {hiwFeatures.map((feature, index) => (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={featureVariants}
                key={index}
                className="hiw-feature"
              >
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "easeIn",
                      duration: 1,
                      delay: 0.7,
                    },
                  }}
                  className="detail"
                >
                  <span className="des">0{index + 1}</span>
                  <span className="sec-title">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
                <div className="icon">
                  <Image
                    src={feature.icon}
                    width={128}
                    height={128}
                    alt="feature"
                    style={{
                      translate: "50% 0rem",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
