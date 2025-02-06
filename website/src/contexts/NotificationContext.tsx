"use client";

import NotificationContainer from "@/components/ui/Notification";
import React, { createContext, useContext, useReducer } from "react";
import { createPortal } from "react-dom";
import { v4 as uuidv4 } from "uuid";

export type NotificationType = "success" | "error" | "info" | "warning";

export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  duration?: number;
}

interface NotificationContextType {
  notifications: Notification[];
  notify: {
    success: (options: { message: string; duration?: number }) => void;
    error: (options: { message: string; duration?: number }) => void;
    info: (options: { message: string; duration?: number }) => void;
    warning: (options: { message: string; duration?: number }) => void;
  };
  removeNotification: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider");
  }
  return context;
};

type Action =
  | { type: "ADD_NOTIFICATION"; payload: Notification }
  | { type: "REMOVE_NOTIFICATION"; payload: string };

const notificationReducer = (
  state: Notification[],
  action: Action
): Notification[] => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return [...state, action.payload];
    case "REMOVE_NOTIFICATION":
      return state.filter((notification) => notification.id !== action.payload);
    default:
      return state;
  }
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notifications, dispatch] = useReducer(notificationReducer, []);

  const removeNotification = (id: string) => {
    dispatch({ type: "REMOVE_NOTIFICATION", payload: id });
  };

  const createNotification = (
    type: NotificationType,
    options: { message: string; duration?: number }
  ) => {
    const id = uuidv4();
    const notification: Notification = {
      id,
      type,
      message: options.message,
      duration: options.duration || 5000,
    };

    dispatch({ type: "ADD_NOTIFICATION", payload: notification });

    if (options.duration !== 0) {
      setTimeout(() => {
        removeNotification(id);
      }, options.duration || 5000);
    }
  };

  const notify = {
    success: (options: { message: string; duration?: number }) =>
      createNotification("success", options),
    error: (options: { message: string; duration?: number }) =>
      createNotification("error", options),
    info: (options: { message: string; duration?: number }) =>
      createNotification("info", options),
    warning: (options: { message: string; duration?: number }) =>
      createNotification("warning", options),
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, notify, removeNotification }}
    >
      {children}
      <NotificationContainer
        notifications={notifications}
        removeNotification={removeNotification}
      />
    </NotificationContext.Provider>
  );
};
