import React, { useState } from 'react';
import FlowModal from '../../components/modal/FlowModal';

export default function OrderForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        type: 'Veg',
        size: 'Large',
        base: 'Thin',
    });

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = () => {
        // Handle form submission or any other action
        console.log('Form submitted with data:', formData);
        handleCloseModal();
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
                onSubmit={handleSubmit}
            >
                <h2>Customize Pizza</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="type">Type:</label>
                        <select id="type" name="type" value={formData.type} onChange={handleChange}>
                            <option value="Veg">Veg</option>
                            <option value="Non-Veg">Non-Veg</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="size">Size:</label>
                        <select id="size" name="size" value={formData.size} onChange={handleChange}>
                            <option value="Large">Large</option>
                            <option value="Medium">Medium</option>
                            <option value="Small">Small</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="base">Base:</label>
                        <select id="base" name="base" value={formData.base} onChange={handleChange}>
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
