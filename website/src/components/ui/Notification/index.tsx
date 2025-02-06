import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useStyles from "./Notification.styles";
import { Notification as NotificationType } from "@/contexts/NotificationContext";

interface NotificationContainerProps {
  notifications: NotificationType[];
  removeNotification: (id: string) => void;
}

const getIcon = (type: NotificationType["type"]) => {
  switch (type) {
    case "success":
      return "check-circle";
    case "error":
      return "times-circle";
    case "info":
      return "info-circle";
    case "warning":
      return "exclamation-circle";
  }
};

const NotificationContainer: React.FC<NotificationContainerProps> = ({
  notifications,
  removeNotification,
}) => {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.container}>
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className={cx(classes.notification, classes[notification.type])}
          >
            <FontAwesomeIcon
              icon={getIcon(notification.type)}
              className={classes.icon}
            />
            <div className={classes.content}>
              <div className={classes.message}>{notification.message}</div>
            </div>
            <button
              className={classes.closeButton}
              onClick={() => removeNotification(notification.id)}
            >
              <FontAwesomeIcon icon="times" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NotificationContainer;
