import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import useStyles from "./Modal.styles";
import Text from "../Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalProps {
  opened: boolean;
  onClose: () => void;
  title?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  centered?: boolean;
  closeOnClickOutside?: boolean;
  closeOnEscape?: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  opened,
  onClose,
  title,
  size = "md",
  centered = true,
  closeOnClickOutside = true,
  closeOnEscape = true,
  children,
}) => {
  const { classes, cx } = useStyles();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    if (closeOnEscape) {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [closeOnEscape, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnClickOutside && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!mounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {opened && (
        <>
          <motion.div
            className={classes.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          />
          <div className={cx(classes.wrapper, centered && classes.centered)}>
            <motion.div
              className={cx(classes.modal, classes[size])}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
            >
              <div className={classes.header}>
                {title && (
                  <Text size="lg" weight={500}>
                    {title}
                  </Text>
                )}
                <button className={classes.close} onClick={onClose}>
                  <FontAwesomeIcon icon="xmark" />
                </button>
              </div>
              <div className={classes.content}>{children}</div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
