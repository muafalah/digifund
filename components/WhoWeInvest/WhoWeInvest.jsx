"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { whoWeInvest } from "@/data/homepage";
import "./WhoWeInvest.css";
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from "@/data/animation";

const WhoWeInvest = () => {
  return (
    <div className="wwi-wrapper">
      <div className="container">
        <div className="wwi-container">
          <div className="wwi-left">
            {/* Head */}
            <div className="head">
              <motion.span
                initial="offscreen"
                whileInView="onscreen"
                variants={tagVariants}
                className="tag"
              >
                Who we invest in
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView="onscreen"
                variants={titleVariants}
                className="title"
              >
                Digital Business <br /> with Early Traction
              </motion.span>
            </div>

            {/* Features */}
            <div className="wwi-features">
              {whoWeInvest.map((feature, index) => (
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={containerVariants(index * 0.05 + 1)}
                  key={index}
                  className="wwi-feature"
                >
                  <span className="des">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={containerVariants(0.5)}
          >
            <Image
              src="/persons.png"
              alt="persons"
              objectFit="contain"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeInvest;
