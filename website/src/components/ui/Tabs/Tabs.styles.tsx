import { createStyles } from "@mantine/emotion";

const useStyles = createStyles((theme, _, u) => ({
    tabsContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column"
    },

    tabList: {
        display: "flex",
        justifyContent: "space-around",
        borderBottom: "1px solid",
        position: "relative",
        borderColor: theme.colors.dark[6]
    },

    tab: {
        flex: 1,
        padding: "12px 16px",
        cursor: "pointer",
        textAlign: "center",
        position: "relative",
        transition: "all 0.2s ease",
        fontSize: "13px",
        fontWeight: 500,

        color: theme.colors.gray[5],
        "&:hover": {
            color: theme.white
        }
    },

    activeTab: {
        color: theme.white
    },

    indicator: {
        position: "absolute",
        bottom: -1,
        height: 1,
        background: theme.colors.blue[6],
        transition: "all 0.05s ease"
    },

    tabPanel: {
        padding: "10px 0"
    }
}));

export default useStyles;
