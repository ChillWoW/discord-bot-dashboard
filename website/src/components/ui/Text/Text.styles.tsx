import { createStyles } from "@mantine/emotion";

const useStyles = createStyles((theme, _, u) => ({
  text: {
    margin: 0,
    padding: 0,
    fontFamily: "inherit",
  },

  xs: {
    fontSize: "10px",
  },

  sm: {
    fontSize: "12px",
  },

  md: {
    fontSize: "15px",
  },

  lg: {
    fontSize: "18px",
  },

  xl: {
    fontSize: "20px",
  },

  dimmed: {
    color: theme.colors.gray[6],
  },

  bold: {
    fontWeight: 700,
  },

  semibold: {
    fontWeight: 600,
  },

  light: {
    fontWeight: 300,
  },

  underline: {
    textDecoration: "underline",
  },

  italic: {
    fontStyle: "italic",
  },

  center: {
    textAlign: "center",
  },

  right: {
    textAlign: "right",
  },
}));

export default useStyles;
