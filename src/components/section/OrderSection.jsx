// OrderSection.js

import React, { useEffect, useRef } from 'react';
import Card from '../card/Card';
import './OrderSection.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeOrderStage, updateOrderTime } from '../../redux/actions';
import { DELAY } from '../../constants/constant';

const NEXT_ORDER = {
    'ORDER_PLACED': 'ORDER_MAKING',
    'ORDER_MAKING': 'ORDER_READY',
    'ORDER_READY': 'ORDER_PICKED',
    'ORDER_PICKED': ''
}

const OrderSection = ({ label, stage }) => {
    const orders = useSelector(({ orders }) => orders);
    const dispatch = useDispatch();
    const handleNext = (order) => {
        if (!NEXT_ORDER[order.stage]) {
            return;
        }
        dispatch(changeOrderStage(order, NEXT_ORDER[order.stage]));

    };


    return (
        <div className="section-wrapper">
            <h2 style={{ position: 'sticky', top: '0', background: '#ffffff' }}>{label}</h2>
            <div className="order-container">
                {orders.sort((a, b) => b.totalTime - a.totalTime).map((order) => order?.stage === stage ? (<Card order={order} isNext={NEXT_ORDER[order.stage]} onNext={() => handleNext(order)} key={order?.id} isBlinking={order.startTime > DELAY[order.size]} />) : null)}
            </div>
        </div>
    );
};

export default OrderSection;
