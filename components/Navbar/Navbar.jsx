"use client";

import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });

  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* Desktop Version */}
      <div className="container">
        <div className="n-container">
          {/* Left Side */}
          <div className="n-logo">
            <span>DIGIFUND</span>
          </div>
          {/* Right Side */}
          <div className="n-right">
            <div className="n-menu">
              <span>What we do</span>
              <span>How it works</span>
              <span>Who we invest in</span>
              <span>Testimonials</span>
            </div>
            <div className="fund-button">Get Funded</div>
          </div>
        </div>
      </div>

      {/* Mobile/Tab Version */}
      <div className="nm-container">
        {/* Logo */}
        <span>DIGIFUND</span>

        {/* Menu Icon */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight
            size={30}
            onClick={() => setMobileMenuOpened(true)}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <RxCross2
            size={30}
            onClick={() => setMobileMenuOpened(false)}
            style={{ cursor: "pointer" }}
          />
        )}

        {/* Mobile Menu */}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <span>What we do</span>
          <span>How it works</span>
          <span>Who we invest in</span>
          <span>Testimonials</span>
          <div className="m-funded-button">Get Funded</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
