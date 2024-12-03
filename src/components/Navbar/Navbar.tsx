import { NavLink } from "react-router-dom";

import "./Navbar.styles.scss";

const NavBar = () => {
  return (
    <nav>
      <div className="introContainer">
        <img src="src/assets/logo-blur.png" />
        <h1>Hi! I'm Melina</h1>
      </div>
      <div className="linksContainer">
        <div className="innerContainer">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/mentorship">Mentorship</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
