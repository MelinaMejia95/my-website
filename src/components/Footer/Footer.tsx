import { Copyright, Heart } from "lucide-react";

import "./Footer.styles.scss";

const Footer = () => {
  return (
    <footer>
      <span>
        Made with <Heart />
      </span>
      <span>|</span>
      <span>
        <Copyright /> Melina Mejía 2024
      </span>
    </footer>
  );
};

export default Footer;
