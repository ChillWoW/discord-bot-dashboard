import { createStyles } from "@mantine/emotion";

const useStyles = createStyles((theme) => ({
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(2px)",
    zIndex: 200,
  },

  wrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 201,
    padding: "1rem",
  },

  centered: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  modal: {
    backgroundColor: theme.colors.dark[9],
    borderRadius: 8,
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    border: `1px solid ${theme.colors.dark[5]}`,
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    borderBottom: `1px solid ${theme.colors.dark[5]}`,
  },

  close: {
    background: "none",
    border: "none",
    color: theme.colors.gray[5],
    cursor: "pointer",
    padding: "0.5rem",
    transition: "all 0.2s ease",
    borderRadius: 4,

    "&:hover": {
      backgroundColor: theme.colors.dark[6],
      color: theme.white,
    },
  },

  content: {
    padding: "1rem",
  },

  // Size variants
  xs: {
    width: "20rem",
  },

  sm: {
    width: "30rem",
  },

  md: {
    width: "40rem",
  },

  lg: {
    width: "50rem",
  },

  xl: {
    width: "60rem",
  },
}));

export default useStyles;
