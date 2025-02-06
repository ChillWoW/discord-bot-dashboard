import { createStyles } from "@mantine/emotion";

const useStyles = createStyles((theme, _, u) => ({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    border: "none",
    borderRadius: 7,
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontFamily: "inherit",
    position: "relative",
    overflow: "hidden",
  },

  vertical: {
    flexDirection: "column",
  },

  content: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "inherit",
    gap: 8,
    flexDirection: "inherit",
  },

  filled: {
    background: theme.colors.blue[7],
    color: theme.white,
    "&:hover": {
      background: theme.colors.blue[8],
    },
  },

  outline: {
    background: "transparent",
    border: `2px solid ${theme.colors.blue[7]}`,
    color: theme.colors.blue[7],
    "&:hover": {
      background: theme.colors.blue[0],
    },
  },

  light: {
    background: theme.colors.blue[0],
    color: theme.colors.blue[7],
  },

  // Sizes
  sm: {
    padding: "6px 12px",
    fontSize: 12,
  },

  md: {
    padding: "8px 16px",
    fontSize: 14,
  },

  lg: {
    padding: "12px 24px",
    fontSize: 16,
  },

  disabled: {
    opacity: 0.6,
    cursor: "not-allowed",
    pointerEvents: "none",
  },

  loading: {
    cursor: "wait",
    "& > *": {
      opacity: 0,
    },
  },

  loader: {
    position: "absolute",
    width: 16,
    height: 16,
    border: "2px solid transparent",
    borderTopColor: "currentColor",
    borderRightColor: "currentColor",
    borderRadius: "50%",
    animation: "spin 0.6s linear infinite",
  },

  leftIcon: {
    marginRight: 4,
  },

  rightIcon: {
    marginLeft: 4,
  },

  "@keyframes spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
}));

export default useStyles;
