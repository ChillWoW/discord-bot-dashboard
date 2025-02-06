import { createStyles } from "@mantine/emotion";

const useStyles = createStyles((theme, _, u) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 4
    },

    label: {
        fontSize: 14,
        color: theme.white
    },

    container: {
        display: "flex",
        alignItems: "center",
        border: "1px solid",
        borderRadius: 8,
        transition: "all 0.2s ease",

        backgroundColor: theme.colors.dark[7],
        borderColor: theme.colors.dark[5]
    },

    input: {
        flex: 1,
        border: "none",
        background: "none",
        padding: "8px 12px",
        fontSize: 14,
        outline: "none",
        width: "100%",

        color: theme.white,

        "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
            appearance: "none"
        }
    },

    icon: {
        padding: "0 12px",
        color: theme.colors.gray[6]
    },

    controls: {
        display: "flex",
        flexDirection: "column",
        borderLeft: "1px solid",

        borderColor: theme.colors.dark[5]
    },

    control: {
        border: "none",
        background: "none",
        padding: "4px 8px",
        cursor: "pointer",
        color: theme.colors.gray[6],
        transition: "all 0.2s ease",

        "&:hover:not(:disabled)": {
            color: theme.colors.blue[6]
        },

        "&:disabled": {
            cursor: "not-allowed",
            opacity: 0.5
        }
    },

    focused: {
        borderColor: theme.colors.blue[6]
    },

    disabled: {
        opacity: 0.6,
        cursor: "not-allowed",

        "& input": {
            cursor: "not-allowed"
        }
    },

    error: {
        borderColor: theme.colors.red[6]
    },

    errorText: {
        color: theme.colors.red[6],
        fontSize: 12
    }
}));

export default useStyles;
