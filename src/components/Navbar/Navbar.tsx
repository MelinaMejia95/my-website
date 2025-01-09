import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "framer-motion";

import "./Navbar.styles.scss";
import SideModal from "../SideModal/SideModal";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleModal = () => {
    if (isMobile) {
      setIsModalOpen(!isModalOpen);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    setIsModalOpen(false);
  }, [location]);

  return (
    <nav>
      <div className="introContainer">
        <div>
          <button onClick={handleModal}>
            <AnimatePresence>
              <motion.img
                src="/assets/logo-blur.webP"
                alt="Melina's logo"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              ></motion.img>
            </AnimatePresence>
          </button>
          <h2>Hi!</h2>
        </div>
      </div>
      {isMobile ? (
        <SideModal
          isModalOpen={isModalOpen}
          onCloseModal={() => setIsModalOpen(false)}
        >
          <>
            <span className="helloText">Hi!</span>
            <NavLinks />
          </>
        </SideModal>
      ) : (
        <NavLinks />
      )}
    </nav>
  );
};

export default NavBar;
