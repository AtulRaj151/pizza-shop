// FlowModal.js

import React, { useState, useEffect } from 'react';
import './FlowModal.css';

const FlowModal = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleCloseModal = () => {
    setShowModal(false);
    onClose();
  };



  return (
    <div className={`modal ${showModal ? 'show' : ''}`} onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleCloseModal}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default FlowModal;