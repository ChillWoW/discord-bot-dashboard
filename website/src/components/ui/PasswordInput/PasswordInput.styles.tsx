import { createStyles } from "@mantine/emotion";

const useStyles = createStyles((theme, _, u) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    flex: 1,
    width: "100%",
  },

  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },

  input: {
    width: "100%",
    borderRadius: 7,
    padding: "8px 12px",
    outline: "none",
    transition: "all 0.2s ease",
    boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.3)",
    fontSize: 14,

    background: theme.colors.dark[7],
    color: theme.white,
    border: `1px solid ${theme.colors.dark[6]}`,
    "&:focus": {
      borderColor: theme.colors.dark[4],
    },
  },

  withLeftSection: {
    paddingLeft: 35,
  },

  withRightSection: {
    paddingRight: 35,
  },

  section: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    top: 0,
    bottom: 0,
    opacity: 0.7,
    cursor: "pointer",
    transition: "opacity 0.2s ease",

    "&:hover": {
      opacity: 1,
    },
  },

  leftSection: {
    left: 0,
  },

  rightSection: {
    right: 0,
  },

  label: {
    fontSize: 14,
    fontWeight: 500,
    color: theme.colors.gray[3],
  },

  error: {
    fontSize: 12,
    color: theme.colors.red[6],
  },
}));

export default useStyles;
