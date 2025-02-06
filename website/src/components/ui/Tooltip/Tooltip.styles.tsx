import { createStyles } from "@mantine/emotion";

const useStyles = createStyles((theme, _, u) => ({
    trigger: {
        display: "inline-block",
        cursor: "pointer"
    },

    tooltip: {
        position: "fixed",
        zIndex: 1000,
        padding: "8px 12px",
        fontSize: "12px",
        borderRadius: "6px",
        pointerEvents: "none",
        maxWidth: "200px",
        textAlign: "center",
        boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.2)",

        background: theme.colors.dark[8],
        color: theme.white
    },

    arrow: {
        position: "absolute",
        width: "8px",
        height: "8px",
        transform: "rotate(45deg)",

        background: theme.colors.dark[8]
    },

    arrowtop: {
        bottom: "-4px",
        left: "50%",
        marginLeft: "-4px"
    },

    arrowbottom: {
        top: "-4px",
        left: "50%",
        marginLeft: "-4px"
    },

    arrowleft: {
        right: "-4px",
        top: "50%",
        marginTop: "-4px"
    },

    arrowright: {
        left: "-4px",
        top: "50%",
        marginTop: "-4px"
    },

    top: {
        transform: "translateY(-10px)"
    },

    bottom: {
        transform: "translateY(10px)"
    },

    left: {
        transform: "translateX(-10px)"
    },

    right: {
        transform: "translateX(10px)"
    }
}));

export default useStyles;
