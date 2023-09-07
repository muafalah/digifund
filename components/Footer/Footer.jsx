import { Link } from "react-scroll";
import EmailBox from "../EmailBox/EmailBox";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Get Funded Today!</span>
          <EmailBox />

          <hr />
          <div className="f-menu">
            <Link to="h-wrapper" spy smooth>
              <span>Home</span>
            </Link>
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

          <hr />
          <span className="copyright">Made with 💖 by M. Ifa Amrillah</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
