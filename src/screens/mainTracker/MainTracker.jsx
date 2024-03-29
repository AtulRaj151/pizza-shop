// MainTracker.jsx

import React from 'react';
import './MainTracker.css';

const MainTracker = ({ orders }) => {
  return (
    <div className="main-tracker">
      <h2>Main Tracker</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Stage</th>
            <th>Total Time Spent</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.stage}</td>
              <td>{order.totalTimeSpent}</td>
              <td>
                <button className="action-button">Action</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTracker;
