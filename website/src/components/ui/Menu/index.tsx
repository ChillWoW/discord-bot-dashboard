import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import useStyles from "./Menu.styles";

interface MenuItemProps {
    label: string;
    icon?: any;
    onClick?: () => void;
    disabled?: boolean;
    description?: string;
    items?: MenuItemProps[];
}

interface MenuProps {
    trigger: React.ReactNode;
    items: MenuItemProps[];
    position?: "bottom" | "top" | "left" | "right";
    width?: number;
}

const adjustCoordsToViewport = (
    coords: { top: number; left: number },
    menuWidth: number,
    menuHeight: number
) => {
    const viewport = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    let { top, left } = coords;

    if (left + menuWidth > viewport.width) {
        left = viewport.width - menuWidth - 8;
    }
    if (left < 0) {
        left = 8;
    }

    if (top + menuHeight > viewport.height) {
        top = viewport.height - menuHeight - 8;
    }
    if (top < 0) {
        top = 8;
    }

    return { top, left };
};

const Menu: React.FC<MenuProps> = ({
    trigger,
    items,
    position = "bottom",
    width = 200
}) => {
    const { classes, cx } = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const [isMounted, setIsMounted] = useState(false);
    const triggerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const calculatePosition = () => {
        if (!triggerRef.current || !menuRef.current) return;

        const rect = triggerRef.current.getBoundingClientRect();
        const menuRect = menuRef.current.getBoundingClientRect();

        const positions = {
            bottom: {
                top: rect.bottom + 8,
                left: rect.left + rect.width / 2 - width / 2
            },
            top: {
                top: rect.top - menuRect.height - 8,
                left: rect.left + rect.width / 2 - width / 2
            },
            left: {
                top: rect.top + rect.height / 2 - menuRect.height / 2,
                left: rect.left - width - 8
            },
            right: {
                top: rect.top + rect.height / 2 - menuRect.height / 2,
                left: rect.right + 8
            }
        };

        const adjustedCoords = adjustCoordsToViewport(
            positions[position],
            width,
            menuRect.height
        );
        setCoords(adjustedCoords);
    };

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !triggerRef.current?.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleTriggerClick = () => {
        if (!isOpen) {
            calculatePosition();
        }
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen && menuRef.current) {
            calculatePosition();
        }
    }, [isOpen, items]);

    return (
        <>
            <div
                ref={triggerRef}
                className={classes.trigger}
                onClick={handleTriggerClick}
            >
                {trigger}
            </div>

            {isMounted &&
                createPortal(
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                ref={menuRef}
                                className={cx(classes.menu, classes[position])}
                                style={{
                                    top: coords.top,
                                    left: coords.left,
                                    width
                                }}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.15 }}
                            >
                                {items.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        item={item}
                                        onClose={() => setIsOpen(false)}
                                    />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
        </>
    );
};

const MenuItem: React.FC<{
    item: MenuItemProps;
    onClose: () => void;
}> = ({ item, onClose }) => {
    const { classes, cx } = useStyles();
    const [showSubmenu, setShowSubmenu] = useState(false);
    const itemRef = useRef<HTMLDivElement>(null);
    const [submenuCoords, setSubmenuCoords] = useState({ top: 0, left: 0 });

    const handleClick = () => {
        if (item.items) {
            const rect = itemRef.current?.getBoundingClientRect();
            if (rect) {
                const submenuCoords = {
                    top: rect.top,
                    left: rect.right + 8
                };

                const adjustedCoords = adjustCoordsToViewport(
                    submenuCoords,
                    200,
                    item.items.length * 40
                );

                setSubmenuCoords(adjustedCoords);
            }
            setShowSubmenu(true);
        } else if (!item.disabled && item.onClick) {
            item.onClick();
            onClose();
        }
    };

    return (
        <div ref={itemRef} className={classes.itemWrapper}>
            <div
                className={cx(classes.item, {
                    [classes.disabled]: item.disabled
                })}
                onClick={handleClick}
            >
                <div className={classes.itemContent}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8
                        }}
                    >
                        {item.icon && (
                            <FontAwesomeIcon
                                icon={item.icon}
                                className={classes.icon}
                            />
                        )}
                        <span>{item.label}</span>
                    </div>
                    {item.description && (
                        <span className={classes.description}>
                            {item.description}
                        </span>
                    )}
                </div>
                {item.items && (
                    <FontAwesomeIcon
                        icon="chevron-right"
                        className={classes.chevron}
                    />
                )}
            </div>

            {item.items && showSubmenu && (
                <div
                    className={classes.submenu}
                    style={{ top: submenuCoords.top, left: submenuCoords.left }}
                    onMouseLeave={() => setShowSubmenu(false)}
                >
                    {item.items.map((subItem, index) => (
                        <MenuItem
                            key={index}
                            item={subItem}
                            onClose={onClose}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Menu;
