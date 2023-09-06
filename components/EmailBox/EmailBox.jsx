"use client";

import { motion } from "framer-motion";
import { LuMail } from "react-icons/lu";

import "./EmailBox.css";
import { containerVariants } from "@/data/animation";

const EmailBox = () => {
  return (
    <motion.div
      initial={{
        width: "0.5rem",
        borderRadius: "100%",
      }}
      whileInView={{
        width: "70%",
        borderRadius: "999px",
        transition: {
          type: "easeOut",
          duration: 1,
        },
      }}
      className="emailBox"
    >
      {/* Icon */}
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        variants={containerVariants(0.6)}
        viewport={{
          once: true,
        }}
      >
        <LuMail size={30} color="grey" />
      </motion.div>

      {/* Input */}
      <motion.input
        initial={"offscreen"}
        whileInView={"onscreen"}
        variants={containerVariants(0.7)}
        viewport={{
          once: true,
        }}
        type="email"
        placeholder="Enter email"
      />

      {/* Get Funded Button */}
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        variants={containerVariants(0.9)}
        viewport={{
          once: true,
        }}
        className="getFunded"
      >
        Get Funded
      </motion.div>
    </motion.div>
  );
};

export default EmailBox;
