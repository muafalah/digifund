"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { features } from "@/data/homepage";
import "./WhatWeDo.css";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "@/data/animation";

const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          {/* Head of Section */}
          <div className="wwd-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              What we do
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              Empowering founders with non dilutive capital and execution
              expertise
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="des"
            >
              Here is how we can evaluate
            </motion.span>
          </div>

          {/* Two Block */}
          <div className="wwd-blocks">
            <div className="wwd-block">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="sec-title"
              >
                Blue Advances
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="text"
              >
                Fund recurring growth expenses e.g. customer acquisition
                inventory
              </motion.span>
              <div className="block-features">
                {features.slice(0, 3).map((feature, index) => (
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={containerVariants((index + 1) * 0.1)}
                    className="block-feature"
                    key={index}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="wwd-block">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="sec-title"
              >
                Blue Seed
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="text"
              >
                Fund one-offs to scale e.g. product, hiring
              </motion.span>
              <div className="block-features">
                {features.slice(3, 6).map((feature, index) => (
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={containerVariants((index + 1) * 0.1)}
                    className="block-feature"
                    key={index}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Support Block */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={containerVariants(0.3)}
            className="wwd-support"
          >
            <div>
              <span className="sec-title">Blue Growth Support</span>
              <span className="des">
                Data Insights and full stack expertise to supercharge growth
              </span>
            </div>
            <div>
              <span className="text">
                Actionable data insights by connecting revenue, marketing and
                social media platforms.
              </span>
              <span className="text">
                On demand execution expertise at cost or revenue share across
                proposition design, engineering, marketing analytics,
                partnership, brand, intellectual property, market expansion,
                talent management.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
