import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import useStyles from "./Badge.styles";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    variant?: "filled" | "outline" | "light";
    leftIcon?: IconProp;
    rightIcon?: IconProp;
    withDot?: boolean;
    className?: string;
    color?: string;
    style?: React.CSSProperties;
}

const Badge: React.FC<BadgeProps> = ({
    children,
    size = "md",
    variant = "filled",
    leftIcon,
    rightIcon,
    withDot = false,
    className,
    color,
    style,
    ...props
}) => {
    const { classes, cx } = useStyles();

    return (
        <div
            className={cx(
                classes.badge,
                classes[size],
                classes[variant],
                className
            )}
            style={{
                backgroundColor: color,
                ...style
            }}
            {...props}
        >
            {withDot && <span className={classes.dot} />}

            {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
            {children}
            {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
        </div>
    );
};

export default Badge;
