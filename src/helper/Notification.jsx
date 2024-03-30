import React from 'react';
import { useNotify } from './NotifyContext';

import './Notification.css';

const Notification = () => {
    const { notifications, clearNotification } = useNotify();

    return (
        <div className="notification-container">
            {notifications.map((notification, index) => (
                <div
                    key={index}
                    className={`notification ${notification.type}`}
                    onClick={() => clearNotification(index)}
                >
                    {notification.message}
                </div>
            ))}
        </div>
    );
};

export default Notification;
