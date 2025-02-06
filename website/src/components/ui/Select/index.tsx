import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import useStyles from "./Select.styles";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  leftSectionIcon?: IconProp;
  disabled?: boolean;
  error?: string;
  label?: string;
  clearable?: boolean;
  className?: string;
  classNames?: {
    root?: string;
    container?: string;
    label?: string;
    error?: string;
  };
}

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  placeholder,
  leftSectionIcon,
  disabled,
  error,
  label,
  className,
  classNames,
  clearable = false,
}) => {
  const { classes, cx } = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: SelectOption) => {
    if (clearable && option.value === value) {
      onChange("");
    } else {
      onChange(option.value);
    }
    setIsOpen(false);
  };

  return (
    <div className={cx(classes.wrapper, classNames?.root)} ref={containerRef}>
      {label && (
        <label className={cx(classes.label, classNames?.label)}>{label}</label>
      )}
      <div
        className={cx(
          classes.container,
          {
            [classes.disabled]: disabled,
            [classes.error]: !!error,
          },
          classNames?.container,
          className
        )}
      >
        <div
          className={classes.control}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          {leftSectionIcon && (
            <FontAwesomeIcon icon={leftSectionIcon} className={classes.icon} />
          )}
          <span
            className={cx(classes.value, {
              [classes.placeholder]: !selectedOption,
            })}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <FontAwesomeIcon
            icon="chevron-down"
            className={cx(classes.arrow, {
              [classes.open]: isOpen,
            })}
          />
        </div>

        {isOpen && !disabled && (
          <div className={classes.dropdown}>
            {options.map((option) => (
              <div
                key={option.value}
                className={cx(classes.option, {
                  [classes.selected]: option.value === value,
                })}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && (
        <div className={cx(classes.errorText, classNames?.error)}>{error}</div>
      )}
    </div>
  );
};

export default Select;
