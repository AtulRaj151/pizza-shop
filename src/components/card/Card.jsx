
import React from 'react';
import './Card.css';

const Card = ({ orderNo, onNext }) => {
    return (
        <div className="card">
            <p>Order No: {orderNo}</p>
            <button onClick={onNext}>Next</button>
        </div>
    );
};

export default Card;
