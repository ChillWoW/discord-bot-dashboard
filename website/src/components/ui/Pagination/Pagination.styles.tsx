import { createStyles } from "@mantine/emotion";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },

  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 32,
    height: 32,
    padding: "0 6px",
    fontSize: 14,
    borderRadius: 4,
    cursor: "pointer",
    userSelect: "none",
    transition: "all 0.2s ease",
    border: `1px solid ${theme.colors.dark[5]}`,
    backgroundColor: theme.colors.dark[7],
    color: theme.colors.gray[4],

    "&:hover": {
      backgroundColor: theme.colors.dark[6],
      color: theme.white,
    },
  },

  active: {
    backgroundColor: theme.colors.blue[7],
    borderColor: theme.colors.blue[7],
    color: theme.white,

    "&:hover": {
      backgroundColor: theme.colors.blue[8],
    },
  },

  disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    pointerEvents: "none",
  },

  dots: {
    cursor: "default",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default useStyles;
