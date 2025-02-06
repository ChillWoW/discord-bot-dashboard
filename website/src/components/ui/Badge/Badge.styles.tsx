import { createStyles } from "@mantine/emotion";

const useStyles = createStyles((theme, _, u) => ({
  badge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    whiteSpace: "nowrap",
    transition: "all 0.2s ease",
  },

  filled: {
    backgroundColor: theme.colors.blue[7],
    color: theme.white,
  },

  outline: {
    backgroundColor: "transparent",
    border: `1px solid ${theme.colors.blue[7]}`,
    color: theme.colors.blue[7],
  },

  light: {
    backgroundColor: theme.colors.blue[1],
    color: theme.colors.blue[7],
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },

  xs: {
    fontSize: 9,
    height: 16,
    padding: "0 6px",
    borderRadius: 4,
  },

  sm: {
    fontSize: 10,
    height: 18,
    padding: "0 8px",
    borderRadius: 4,
  },

  md: {
    fontSize: 11,
    height: 20,
    padding: "0 10px",
    borderRadius: 5,
  },

  lg: {
    fontSize: 13,
    height: 26,
    padding: "0 12px",
    borderRadius: 6,
  },

  xl: {
    fontSize: 14,
    height: 32,
    padding: "0 16px",
    borderRadius: 8,
  },
}));

export default useStyles;
