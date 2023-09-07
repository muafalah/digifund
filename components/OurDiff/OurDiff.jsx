import Image from "next/image";
import { motion } from "framer-motion";

import { ourDiffFeatures } from "@/data/homepage";
import "./OurDiff.css";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "@/data/animation";

const OurDiff = () => {
  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          {/* Head */}
          <div className="od-head">
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={tagVariants}
              className="tag"
            >
              Our Difference
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariants}
              className="title"
            >
              Fair Capital, Hassle Free
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={desVariants}
              className="text"
            >
              Our mission is to level the playing field for early stage growth
              capital.
            </motion.span>
          </div>

          {/* Feature */}
          <div className="od-features">
            {ourDiffFeatures.map((feature, index) => (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={containerVariants((index + 1) * 0.1)}
                key={index}
                className="od-feature"
              >
                <Image
                  src={feature.icon}
                  alt="feature"
                  width={128}
                  height={128}
                />
                <span className="sec-title">{feature.title}</span>
                <span className="text">{feature.des}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDiff;
