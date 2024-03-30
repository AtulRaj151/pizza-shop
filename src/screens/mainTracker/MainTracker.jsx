// MainTracker.jsx

import React from 'react';
import './MainTracker.css';
import { useDispatch, useSelector } from 'react-redux';
import { LABEL, LABEL_VALUE } from '../../constants/constant';
import { cancelOrder } from '../../redux/actions';
import { formatTime } from '../../utils';

const MainTracker = () => {
  const orders = useSelector(({ orders }) => orders);
  const dispatch = useDispatch();
  const handleClick = (order) => {
    dispatch(cancelOrder(order))
  }
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
              <td>{LABEL_VALUE[order.stage]}</td>
              <td>{formatTime(order.totalTime)}</td>
              <td>
                {order.stage !== LABEL.ORDER_PICKED && <button className="action-button" onClick={() => handleClick(order)}>Cancel</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTracker;
