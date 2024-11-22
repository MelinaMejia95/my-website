import { NavLink } from "react-router-dom";

import './Navbar.styles.scss';

const NavBar = () => {
  return (
    <nav>
      <img src='public/vite.svg' />
      <div className="linksContainer">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/mentorship">Mentorship</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>
    </nav>
  )
};

export default NavBar;