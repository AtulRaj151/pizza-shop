import React, { createContext, useContext, useState } from 'react';

const NotifyContext = createContext();

export const NotifyProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const showError = (message) => {
    setNotifications([...notifications, { type: 'error', message }]);
  };

  const showWarning = (message) => {
    setNotifications([...notifications, { type: 'warning', message }]);
  };
  const showSuccess = (message) => {
    setNotifications([...notifications, { type: 'success', message }]);
  };

  const clearNotification = (index) => {
    const newNotifications = [...notifications];
    newNotifications.splice(index, 1);
    setNotifications(newNotifications);
  };

  return (
    <NotifyContext.Provider
      value={{
        notifications,
        showError,
        showWarning,
        clearNotification,
        showSuccess
      }}
    >
      {children}
    </NotifyContext.Provider>
  );
};

export const useNotify = () => {
  return useContext(NotifyContext);
};
