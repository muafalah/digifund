"use client";

import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";

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
              <Link to="wwd-wrapper" spy smooth>
                <span>What we do</span>
              </Link>
              <Link to="hiw-wrapper" spy smooth offset={100}>
                <span>How it works</span>
              </Link>
              <Link to="wwi-wrapper" spy smooth>
                <span>Who we invest in</span>
              </Link>
              <Link to="t-wrapper" spy smooth offset={100}>
                <span>Testimonials</span>
              </Link>
            </div>
            <Link to="f-wrapper" spy smooth>
              <div className="fund-button">Get Funded</div>
            </Link>
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
          <Link
            to="wwd-wrapper"
            spy
            smooth
            onClick={() => setMobileMenuOpened(false)}
          >
            <span>What we do</span>
          </Link>
          <Link
            to="hiw-wrapper"
            spy
            smooth
            offset={100}
            onClick={() => setMobileMenuOpened(false)}
          >
            <span>How it works</span>
          </Link>
          <Link
            to="wwi-wrapper"
            spy
            smooth
            onClick={() => setMobileMenuOpened(false)}
          >
            <span>Who we invest in</span>
          </Link>
          <Link
            to="t-wrapper"
            spy
            smooth
            offset={100}
            onClick={() => setMobileMenuOpened(false)}
          >
            <span>Testimonials</span>
          </Link>
          <Link
            to="f-wrapper"
            spy
            smooth
            offset={100}
            onClick={() => setMobileMenuOpened(false)}
          >
            <div className="m-funded-button">Get Funded</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
