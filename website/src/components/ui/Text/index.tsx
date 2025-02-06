import React from "react";
import useStyles from "./Text.styles";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
    color?: string;
    weight?: "bold" | "semibold" | "normal" | "light" | number;
    align?: "left" | "center" | "right";
    italic?: boolean;
    underline?: boolean;
    dimmed?: boolean;
    component?: any;
    className?: string;
    children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
    size = "md",
    color,
    weight,
    align,
    italic,
    underline,
    dimmed,
    component: Component = "p",
    className,
    style,
    children,
    ...others
}) => {
    const { classes, cx } = useStyles();

    const classNames = cx(
        classes.text,
        {
            [classes.sm]: size === "sm",
            [classes.md]: size === "md",
            [classes.lg]: size === "lg",
            [classes.xl]: size === "xl"
        },
        {
            [classes.bold]: weight === "bold",
            [classes.semibold]: weight === "semibold",
            [classes.light]: weight === "light",
            [classes.italic]: italic,
            [classes.underline]: underline,
            [classes.dimmed]: dimmed,
            [classes.center]: align === "center",
            [classes.right]: align === "right"
        },
        className
    );

    return (
        // @ts-ignore
        <Component
            className={classNames}
            style={{
                ...style,
                color: color,
                fontWeight: typeof weight === "number" ? weight : undefined,
                fontSize: typeof size === "number" ? size : undefined
            }}
            {...others}
        >
            {children}
        </Component>
    );
};

export default Text;
