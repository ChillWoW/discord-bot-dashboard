import { createStyles } from "@mantine/emotion";
import { NotificationType } from "@/contexts/NotificationContext";

const useStyles = createStyles((theme) => ({
  container: {
    position: "fixed",
    top: 20,
    right: 20,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    zIndex: 9999,
  },

  notification: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    padding: "12px 16px",
    borderRadius: 8,
    backgroundColor: theme.colors.dark[7],
    border: "1px solid",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    minWidth: 300,
    maxWidth: 400,
  },

  success: {
    borderColor: theme.colors.green[6],
    "& $icon": {
      color: theme.colors.green[6],
    },
  },

  error: {
    borderColor: theme.colors.red[6],
    "& $icon": {
      color: theme.colors.red[6],
    },
  },

  info: {
    borderColor: theme.colors.blue[6],
    "& $icon": {
      color: theme.colors.blue[6],
    },
  },

  warning: {
    borderColor: theme.colors.yellow[6],
    "& $icon": {
      color: theme.colors.yellow[6],
    },
  },

  content: {
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
  },

  message: {
    color: theme.white,
    fontSize: 14,
  },

  icon: {
    fontSize: 20,
  },

  closeButton: {
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    color: theme.colors.gray[5],
    transition: "color 0.2s ease",
    "&:hover": {
      color: theme.white,
    },
  },
}));

export default useStyles;
