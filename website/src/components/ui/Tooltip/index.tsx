import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import useStyles from "./Tooltip.styles";

interface TooltipProps {
    children: React.ReactNode;
    label: string | React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    delay?: number;
    withArrow?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
    children,
    label,
    position = "bottom",
    delay = 200,
    withArrow = false
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<any>(null);
    const { classes, cx } = useStyles();

    const updatePosition = () => {
        if (!triggerRef.current || !tooltipRef.current) return;

        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();

        let top = 0;
        let left = 0;

        switch (position) {
            case "top":
                top = triggerRect.top - tooltipRect.height - 10;
                left =
                    triggerRect.left +
                    (triggerRect.width - tooltipRect.width) / 2;
                break;
            case "bottom":
                top = triggerRect.bottom + 10;
                left =
                    triggerRect.left +
                    (triggerRect.width - tooltipRect.width) / 2;
                break;
            case "left":
                top =
                    triggerRect.top +
                    (triggerRect.height - tooltipRect.height) / 2;
                left = triggerRect.left - tooltipRect.width - 10;
                break;
            case "right":
                top =
                    triggerRect.top +
                    (triggerRect.height - tooltipRect.height) / 2;
                left = triggerRect.right + 10;
                break;
        }

        setCoords({ top, left });
    };

    const handleMouseEnter = () => {
        timeoutRef.current = setTimeout(() => {
            setIsVisible(true);
        }, delay);
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsVisible(false);
    };

    useEffect(() => {
        if (isVisible) {
            updatePosition();
            window.addEventListener("scroll", updatePosition);
            window.addEventListener("resize", updatePosition);
        }

        return () => {
            window.removeEventListener("scroll", updatePosition);
            window.removeEventListener("resize", updatePosition);
        };
    }, [isVisible]);

    return (
        <>
            <div
                ref={triggerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={classes.trigger}
            >
                {children}
            </div>

            {createPortal(
                <AnimatePresence>
                    {isVisible && (
                        <motion.div
                            ref={tooltipRef}
                            className={cx(classes.tooltip, classes[position])}
                            style={{ top: coords.top, left: coords.left }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                        >
                            {label}
                            {withArrow && (
                                <div
                                    className={cx(
                                        classes.arrow,
                                        classes[`arrow${position}`]
                                    )}
                                />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};

export default Tooltip;
