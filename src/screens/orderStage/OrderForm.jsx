import React, { useState } from 'react';
import FlowModal from '../../components/modal/FlowModal';
import { useSelector, useDispatch } from 'react-redux';
import { isObjectHasValues } from '../../utils/index';
import { useNotify } from '../../helper/NotifyContext';
import { makeNewOrder } from '../../redux/actions';

export default function OrderForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const { showWarning, clearNotification, showSuccess } = useNotify();
    const orders = useSelector(({ orders }) => orders);
    const [formData, setFormData] = useState({
        type: '',
        size: '',
        base: '',
    });

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (orders.length <= 10) {
            if (isObjectHasValues(formData)) {
                dispatch(makeNewOrder(formData));
                setFormData({
                    type: '',
                    size: '',
                    base: '',
                });
                showSuccess('Order placed successfully')
            } else {
                showWarning('Please add at least one order');
            }

        } else {
            showWarning('Shop closed!!');
        }
        setTimeout(() => {
            clearNotification();
        }, 3000)
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <>
            <button className="new-order-button" onClick={handleOpenModal}>Make New Order</button>
            <FlowModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            >
                <h2>Customize Pizza</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="type">Type:</label>
                        <select id="type" name="type" value={formData.type} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Veg">Veg</option>
                            <option value="Non-Veg">Non-Veg</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="size">Size:</label>
                        <select id="size" name="size" value={formData.size} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Large">Large</option>
                            <option value="Medium">Medium</option>
                            <option value="Small">Small</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="base">Base:</label>
                        <select id="base" name="base" value={formData.base} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Thin">Thin</option>
                            <option value="Thick">Thick</option>
                        </select>
                    </div>
                    <button type="submit">Place Order</button>
                </form>
            </FlowModal>
        </>
    )
}
