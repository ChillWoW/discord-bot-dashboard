import React, { forwardRef, useState } from "react";
import Text from "../Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import useStyles from "./PasswordInput.styles";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftSection?: React.ReactNode;
  leftSectionIcon?: IconProp;
  leftSectionPointerEvents?: "none" | "auto";
  classNames?: {
    root?: string;
    input?: string;
    label?: string;
    error?: string;
  };
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      label,
      error,
      leftSection,
      leftSectionIcon,
      leftSectionPointerEvents = "auto",
      className,
      classNames,
      ...props
    },
    ref
  ) => {
    const { classes, cx } = useStyles();
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => setVisible((prev) => !prev);

    return (
      <div className={cx(classes.root, classNames?.root)}>
        {label && (
          <Text className={cx(classes.label, classNames?.label)}>{label}</Text>
        )}

        <div className={classes.inputWrapper}>
          {(leftSection || leftSectionIcon) && (
            <div
              className={cx(classes.section, classes.leftSection)}
              style={{ pointerEvents: leftSectionPointerEvents }}
            >
              {leftSection || (
                <FontAwesomeIcon icon={leftSectionIcon as IconProp} />
              )}
            </div>
          )}

          <input
            {...props}
            ref={ref}
            type={visible ? "text" : "password"}
            className={cx(
              classes.input,
              {
                [classes.withLeftSection]: leftSection || leftSectionIcon,
                [classes.withRightSection]: true,
              },
              classNames?.input
            )}
          />

          <div
            className={cx(classes.section, classes.rightSection)}
            onClick={toggleVisibility}
          >
            <FontAwesomeIcon icon={visible ? "eye-slash" : "eye"} />
          </div>
        </div>

        {error && (
          <Text className={cx(classes.error, classNames?.error)}>{error}</Text>
        )}
      </div>
    );
  }
);

export default PasswordInput;
