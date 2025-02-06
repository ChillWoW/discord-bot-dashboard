import { createStyles } from "@mantine/emotion";

const useStyles = createStyles((theme, _, u) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 4
    },

    container: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        cursor: "pointer"
    },

    input: {
        position: "absolute",
        opacity: 0,
        width: 0,
        height: 0,

        "&:checked + span": {
            backgroundColor: theme.colors.blue[6],

            "&::before": {
                transform:
                    "translateX(calc(var(--switch-width) - var(--switch-height)))"
            }
        },

        "&:disabled + span": {
            opacity: 0.6,
            cursor: "not-allowed"
        }
    },

    slider: {
        position: "relative",
        display: "inline-block",
        width: "var(--switch-width)",
        height: "var(--switch-height)",
        backgroundColor: theme.colors.gray[3],
        borderRadius: "var(--switch-height)",
        transition: "background-color 0.2s",

        "&::before": {
            content: '""',
            position: "absolute",
            height: "calc(var(--switch-height) - 4px)",
            width: "calc(var(--switch-height) - 4px)",
            left: 2,
            bottom: 2,
            backgroundColor: theme.white,
            borderRadius: "50%",
            transition: "transform 0.2s"
        }
    },

    sm: {
        "--switch-width": "32px",
        "--switch-height": "18px",
        fontSize: 12
    },

    md: {
        "--switch-width": "44px",
        "--switch-height": "24px",
        fontSize: 14
    },

    lg: {
        "--switch-width": "56px",
        "--switch-height": "30px",
        fontSize: 16
    },

    label: {
        color: theme.white
    },

    disabled: {
        cursor: "not-allowed",
        opacity: 0.6
    },

    error: {
        color: theme.colors.red[6],
        fontSize: 12
    }
}));

export default useStyles;
