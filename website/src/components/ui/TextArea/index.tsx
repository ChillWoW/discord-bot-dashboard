import React, { forwardRef, useRef, useState } from "react";
import Text from "../Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import useStyles from "./TextArea.styles";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  leftSection?: React.ReactNode;
  leftSectionIcon?: IconProp;
  rightSection?: React.ReactNode;
  rightSectionIcon?: IconProp;
  leftSectionPointerEvents?: "none" | "auto";
  rightSectionPointerEvents?: "none" | "auto";
  autosize?: boolean;
  maxRows?: number;
  minRows?: number;
  classNames?: {
    root?: string;
    textarea?: string;
    label?: string;
    error?: string;
  };
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      error,
      leftSection,
      leftSectionIcon,
      rightSection,
      rightSectionIcon,
      leftSectionPointerEvents = "auto",
      rightSectionPointerEvents = "auto",
      className,
      classNames,
      autosize = true,
      maxRows = 10,
      minRows = 2,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const { classes, cx } = useStyles();
    const [rows, setRows] = useState(minRows);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) {
        onChange(e);
      }

      if (autosize) {
        const textarea = textareaRef.current;
        if (textarea) {
          textarea.style.height = "auto";
          const newRows = Math.min(
            Math.max(minRows, Math.ceil(textarea.scrollHeight / 20)),
            maxRows
          );
          setRows(newRows);
          textarea.style.height = `${newRows * 20}px`;
        }
      }
    };

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

          <textarea
            {...props}
            ref={textareaRef}
            value={value}
            onChange={handleChange}
            rows={rows}
            className={cx(
              classes.textarea,
              {
                [classes.withLeftSection]: leftSection || leftSectionIcon,
                [classes.withRightSection]: rightSection || rightSectionIcon,
                [classes.error]: !!error,
              },
              className,
              classNames?.textarea
            )}
          />

          {(rightSection || rightSectionIcon) && (
            <div
              className={cx(classes.section, classes.rightSection)}
              style={{ pointerEvents: rightSectionPointerEvents }}
            >
              {rightSection || (
                <FontAwesomeIcon icon={rightSectionIcon as IconProp} />
              )}
            </div>
          )}
        </div>

        {error && (
          <Text className={cx(classes.error, classNames?.error)}>{error}</Text>
        )}
      </div>
    );
  }
);

export default TextArea;
