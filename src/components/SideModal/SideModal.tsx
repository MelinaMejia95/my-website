import { AnimatePresence, motion } from 'framer-motion';

import "./SideModal.styles.scss";

interface ISideModal {
  children: React.ReactNode;
  isModalOpen: boolean;
  onCloseModal: () => void;
}

const sideBarAnimation = { 
  initial: { opacity: 0, x: '-100%' },
  animate: { opacity: 100, x: '0' },
  exit: { opacity: '0', x: '-100%' },
  transition: { duration: 0.3, ease: 'anticipate' }, 
}

const SideModal = ({ children, isModalOpen, onCloseModal }: ISideModal) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          <div className='blurOverlay' onClick={onCloseModal}></div>
          <motion.div
            key='sideModal'
            className='sideModal'
            initial={sideBarAnimation.initial}
            animate={sideBarAnimation.animate}
            exit={sideBarAnimation.exit}
            transition={sideBarAnimation.transition}
          >
            {children}

          </motion.div>
        </>
        )
      }
    </AnimatePresence>
  )
};

export default SideModal;
