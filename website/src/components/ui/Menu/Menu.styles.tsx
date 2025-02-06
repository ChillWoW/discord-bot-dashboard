import { createStyles } from "@mantine/emotion";

const useStyles = createStyles((theme) => ({
  trigger: {
    display: "inline-block",
    cursor: "pointer",
  },

  menu: {
    position: "fixed",
    zIndex: 1000,
    backgroundColor: theme.colors.dark[8],
    borderRadius: 8,
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    border: `1px solid ${theme.colors.dark[6]}`,
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 16px",
    fontSize: 14,
    color: theme.white,
    cursor: "pointer",
    transition: "all 0.2s ease",
    position: "relative",

    "&:hover": {
      backgroundColor: theme.colors.dark[7],
      transform: "translateX(2px)",
    },
  },

  itemContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  description: {
    fontSize: 12,
    color: theme.colors.gray[6],
    marginTop: 2,
  },

  icon: {
    width: 16,
    height: 16,
    opacity: 0.7,
  },

  itemWrapper: {
    position: "relative",
    width: "100%",
  },

  submenu: {
    position: "fixed",
    backgroundColor: theme.colors.dark[8],
    borderRadius: 7,
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    border: `1px solid ${theme.colors.dark[6]}`,
    minWidth: 200,
    zIndex: 1001,
  },

  chevron: {
    marginLeft: "auto",
    opacity: 0.7,
    fontSize: 12,
  },

  disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    pointerEvents: "none",
  },

  bottom: {
    transform: "translateY(8px)",
  },

  top: {
    transform: "translateY(-8px)",
  },

  left: {
    transform: "translateX(-8px)",
  },

  right: {
    transform: "translateX(8px)",
  },
}));

export default useStyles;
