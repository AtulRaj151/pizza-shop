// OrderSection.js

import React from 'react';
import Card from '../card/Card';
import './OrderSection.css';

const OrderSection = ({ label, orderNos }) => {
    const handleNext = () => {
        // Handle next action
        // console.log(`Order ${orderNo}: Next`);
    };

    return (
        <div className="section-wrapper">
            <h2>{label}</h2>
            <div className="order-container">
                {orderNos.map((order) => (<Card orderNo={order} onNext={handleNext} />))}
            </div>
        </div>
    );
};

export default OrderSection;
