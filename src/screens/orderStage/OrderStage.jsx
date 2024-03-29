import React, { useState } from 'react';
import './OrderStage.css';
import OrderForm from './OrderForm';
import OrderSection from '../../components/section/OrderSection';


export default function OrderStage() {

    return (
        <div>
            <OrderForm />
            <div className="order-section-main">
                <div className="section-container">
                    <OrderSection label="Order Placed" orderNo={1} />
                    <OrderSection label="Order In Making" orderNo={2} />
                    <OrderSection label="Order Ready" orderNo={3} />
                    <OrderSection label="Order Picked" orderNo={4} />
                </div>
            </div>
        </div>
    )

}
