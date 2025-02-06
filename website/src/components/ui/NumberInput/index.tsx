import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import useStyles from "./NumberInput.styles";

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  leftSectionIcon?: IconProp;
  disabled?: boolean;
  error?: string;
  label?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  min,
  max,
  step = 1,
  placeholder,
  leftSectionIcon,
  disabled,
  error,
  label,
}) => {
  const { classes, cx } = useStyles();
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === "" ? 0 : parseFloat(e.target.value);
    if (isNaN(newValue)) return;

    if (min !== undefined && newValue < min) return;
    if (max !== undefined && newValue > max) return;

    onChange(newValue);
  };

  const increment = () => {
    if (disabled) return;
    if (max !== undefined && value + step > max) return;
    onChange(value + step);
  };

  const decrement = () => {
    if (disabled) return;
    if (min !== undefined && value - step < min) return;
    onChange(value - step);
  };

  return (
    <div className={classes.wrapper}>
      {label && <label className={classes.label}>{label}</label>}
      <div
        className={cx(classes.container, {
          [classes.focused]: focused,
          [classes.disabled]: disabled,
          [classes.error]: !!error,
        })}
      >
        {leftSectionIcon && (
          <FontAwesomeIcon icon={leftSectionIcon} className={classes.icon} />
        )}
        <input
          ref={inputRef}
          type="number"
          value={value}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          className={classes.input}
        />
        <div className={classes.controls}>
          <button
            type="button"
            onClick={increment}
            className={classes.control}
            disabled={disabled || (max !== undefined && value >= max)}
          >
            <FontAwesomeIcon icon="chevron-up" />
          </button>
          <button
            type="button"
            onClick={decrement}
            className={classes.control}
            disabled={disabled || (min !== undefined && value <= min)}
          >
            <FontAwesomeIcon icon="chevron-down" />
          </button>
        </div>
      </div>
      {error && <div className={classes.errorText}>{error}</div>}
    </div>
  );
};

export default NumberInput;
