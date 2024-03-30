import React, { useState } from 'react';
import './OrderStage.css';
import OrderForm from './OrderForm';
import OrderSection from '../../components/section/OrderSection';


export default function OrderStage() {
    const orderNo = [1, 2, 3, 4];
    return (
        <div>
            <OrderForm />
            <div className="order-section-main">
                <div className="section-container">
                    <OrderSection label="Order Placed" orderNos={orderNo} />
                    <OrderSection label="Order In Making" orderNos={orderNo} />
                    <OrderSection label="Order Ready" orderNos={orderNo} />
                    <OrderSection label="Order Picked" orderNos={orderNo} />
                </div>
            </div>
        </div>
    )

}
