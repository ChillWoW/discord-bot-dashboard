import React, { ButtonHTMLAttributes } from "react";
import useStyles from "./Button.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: IconProp;
  rightIcon?: IconProp;
  variant?: "filled" | "outline" | "light";
  loading?: boolean;
  size?: "sm" | "md" | "lg";
  direction?: "row" | "column";
}

const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  className,
  variant = "filled",
  loading = false,
  size = "md",
  disabled,
  direction = "row",
  ...props
}) => {
  const { classes, cx } = useStyles();

  return (
    <button
      className={cx(
        classes.button,
        classes[variant],
        classes[size],
        {
          [classes.loading]: loading,
          [classes.disabled]: disabled,
          [classes.vertical]: direction === "column",
        },
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className={classes.loader} />
      ) : (
        <>
          {leftIcon && (
            <FontAwesomeIcon icon={leftIcon} className={classes.leftIcon} />
          )}
          <span className={classes.content}>{children}</span>
          {rightIcon && (
            <FontAwesomeIcon icon={rightIcon} className={classes.rightIcon} />
          )}
        </>
      )}
    </button>
  );
};

export default Button;
