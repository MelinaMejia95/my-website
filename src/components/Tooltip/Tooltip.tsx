import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { AnimatePresence, motion } from "motion/react";
import React, { cloneElement, useState } from "react";

import './Tooltip.styles.scss';

interface ITooltip {
  children: JSX.Element;
  content: React.ReactNode;
}

const Tooltip = ({ children, content }: ITooltip) => {
  const [open, setOpen] = useState(false);

  const { x, y, refs, strategy, context } = useFloating({
    open,
    onOpenChange(open) {
      setOpen(open);
    },
    middleware: [offset(5), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
    placement: "left-start",
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { delay: 500, restMs: 200 }),
    useFocus(context),
    useRole(context, { role: "tooltip" }),
    useDismiss(context),
  ]);

  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({ ref: refs.setReference, ...children.props })
      )}
      <FloatingPortal>
        <AnimatePresence>
          {open && (
            <motion.div
              className="tooltip"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              ref={refs.setFloating}
              {...getFloatingProps({
                style: {
                  position: strategy,
                  top: (y - 100),
                  left: (x + 50),
                },
              })}
            >
              {content}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </>
  );
};

export default Tooltip;
