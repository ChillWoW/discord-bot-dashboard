import React, { forwardRef } from "react";
import Text from "../Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import useStyles from "./TextInput.styles";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    leftSection?: React.ReactNode;
    leftSectionIcon?: IconProp;
    rightSection?: React.ReactNode;
    rightSectionIcon?: IconProp;
    leftSectionPointerEvents?: "none" | "auto";
    rightSectionPointerEvents?: "none" | "auto";
    classNames?: {
        root?: string;
        input?: string;
        label?: string;
        error?: string;
    };
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
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
            ...props
        },
        ref
    ) => {
        const { classes, cx } = useStyles();

        return (
            <div className={cx(classes.root, classNames?.root)}>
                {label && (
                    <Text className={cx(classes.label, classNames?.label)}>
                        {label}
                    </Text>
                )}

                <div className={classes.inputWrapper}>
                    {(leftSection || leftSectionIcon) && (
                        <div
                            className={cx(classes.section, classes.leftSection)}
                            style={{ pointerEvents: leftSectionPointerEvents }}
                        >
                            {leftSection || (
                                <FontAwesomeIcon
                                    icon={leftSectionIcon as IconProp}
                                />
                            )}
                        </div>
                    )}

                    <input
                        {...props}
                        ref={ref}
                        className={cx(
                            classes.input,
                            {
                                [classes.withLeftSection]:
                                    leftSection || leftSectionIcon,
                                [classes.withRightSection]:
                                    rightSection || rightSectionIcon
                            },
                            classNames?.input
                        )}
                    />

                    {(rightSection || rightSectionIcon) && (
                        <div
                            className={cx(
                                classes.section,
                                classes.rightSection
                            )}
                            style={{ pointerEvents: rightSectionPointerEvents }}
                        >
                            {rightSection || (
                                <FontAwesomeIcon
                                    icon={rightSectionIcon as IconProp}
                                />
                            )}
                        </div>
                    )}
                </div>

                {error && (
                    <Text className={cx(classes.error, classNames?.error)}>
                        {error}
                    </Text>
                )}
            </div>
        );
    }
);

export default TextInput;
