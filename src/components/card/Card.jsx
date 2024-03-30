
import React from 'react';
import './Card.css';
import { formatTime } from '../../utils';

const Card = ({ order, isBlinking, isNext, onNext }) => {
    return (
        <div className={`card ${isBlinking ? 'blink-red' : ''}`}>
            <p>Order No: {order?.id}</p>
            <p>Order Time: {formatTime(order?.startTime)}</p>
            {isNext ? <button onClick={onNext}>Next</button> : <button disabled style={{ background: 'grey' }}>Order Picked</button>}
        </div>
    );
};

export default Card;
