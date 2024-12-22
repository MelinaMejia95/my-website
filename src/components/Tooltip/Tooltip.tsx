import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  Placement,
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

interface IPosition {
  add: boolean;
  positionExtra: number;
}

interface ITooltip {
  children: JSX.Element;
  content: React.ReactNode;
  placement?: Placement;
  xPosition: IPosition;
  yPosition: IPosition;
}

const Tooltip = ({ children, content, placement = "left-start", xPosition, yPosition }: ITooltip) => {
  const [open, setOpen] = useState(false);

  const { x, y, refs, strategy, context } = useFloating({
    open,
    onOpenChange(open) {
      setOpen(open);
    },
    middleware: [offset(5), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
    placement,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { delay: 200, restMs: 10 }),
    useFocus(context),
    useRole(context, { role: "tooltip" }),
    useDismiss(context),
  ]);

  const calculatePosition = (position: number, add: boolean, positionExtra: number) => {
    if (add) {
      return position + positionExtra;
    }
    return position - positionExtra;
  }

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
              animate={{ opacity: 1, scale: 1.3 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              ref={refs.setFloating}
              {...getFloatingProps({
                style: {
                  position: strategy,
                  top: calculatePosition(y, yPosition.add, yPosition.positionExtra),
                  left: calculatePosition(x, xPosition.add, xPosition.positionExtra),
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
