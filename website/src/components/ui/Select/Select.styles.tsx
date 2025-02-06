import { createStyles } from "@mantine/emotion";

const useStyles = createStyles((theme, _, u) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    position: "relative",
  },

  label: {
    fontSize: 14,
    color: theme.white,
  },

  container: {
    position: "relative",
    border: "1px solid",
    borderRadius: 8,
    transition: "all 0.2s ease",

    backgroundColor: theme.colors.dark[7],
    borderColor: theme.colors.dark[5],
  },

  control: {
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    cursor: "pointer",
    userSelect: "none",
  },

  value: {
    flex: 1,
    fontSize: 14,
    color: theme.white,
  },

  placeholder: {
    color: theme.colors.gray[6],
  },

  icon: {
    marginRight: 8,
    color: theme.colors.gray[6],
  },

  arrow: {
    color: theme.colors.gray[6],
    transition: "transform 0.2s ease",
  },

  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    marginTop: 4,
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    zIndex: 1000,
    maxHeight: 200,
    overflowY: "auto",

    backgroundColor: theme.colors.dark[7],
    border: `1px solid ${theme.colors.dark[5]}`,
  },

  option: {
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: 14,
    transition: "background-color 0.2s ease",

    "&:hover": {
      backgroundColor: theme.colors.dark[6],
    },
  },

  selected: {
    backgroundColor: theme.colors.dark[6],
  },

  open: {
    transform: "rotate(180deg)",
  },

  disabled: {
    opacity: 0.6,
    cursor: "not-allowed",

    "& $control": {
      cursor: "not-allowed",
    },
  },

  error: {
    borderColor: theme.colors.red[6],
  },

  errorText: {
    color: theme.colors.red[6],
    fontSize: 12,
  },
}));

export default useStyles;
