import React, { useEffect } from 'react';
import './OrderStage.css';
import OrderForm from './OrderForm';
import OrderSection from '../../components/section/OrderSection';
import { LABEL } from '../../constants/constant';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrderTime } from '../../redux/actions';

const NEXT_ORDER = {
    'ORDER_PLACED': 'ORDER_MAKING',
    'ORDER_MAKING': 'ORDER_READY',
    'ORDER_READY': 'ORDER_PICKED',
    'ORDER_PICKED': ''
}
export default function OrderStage() {
    const orders = useSelector(({ orders }) => orders);
    const dispatch = useDispatch();
    useEffect(() => {
        const interval = setInterval(() => {
            orders.forEach(order => {
                if (NEXT_ORDER[order.stage]) {
                    dispatch(updateOrderTime(order, order.startTime + 1, order.totalTime + 1));
                }
            });
        }, 1000)
        return () => {
            return clearInterval(interval);
        }
    }, [orders, dispatch])
    return (
        <div>
            <OrderForm />
            <div className="order-section-main">
                <div className="section-container">
                    <OrderSection label="Order Placed" key='1' stage={LABEL.ORDER_PLACED} />
                    <OrderSection label="Order In Making" key='2' stage={LABEL.ORDER_MAKING} />
                    <OrderSection label="Order Ready" key='3' stage={LABEL.ORDER_READY} />
                    <OrderSection label="Order Picked" key='4' stage={LABEL.ORDER_PICKED} />
                </div>
            </div>
        </div>
    )

}
