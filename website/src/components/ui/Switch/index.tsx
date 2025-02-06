import React, { InputHTMLAttributes } from "react";
import useStyles from "./Switch.styles";

interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  size?: "sm" | "md" | "lg";
  error?: string;
}

const Switch: React.FC<SwitchProps> = ({
  label,
  className,
  size = "md",
  error,
  disabled,
  ...props
}) => {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <label
        className={cx(
          classes.container,
          classes[size],
          { [classes.disabled]: disabled },
          className
        )}
      >
        <input
          type="checkbox"
          className={classes.input}
          disabled={disabled}
          {...props}
        />
        <span className={classes.slider} />
        {label && <span className={classes.label}>{label}</span>}
      </label>
      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
};

export default Switch;
