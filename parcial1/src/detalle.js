import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';

const ImageModal = ({ show, onHide, imageUrl }) => {
  useEffect(() => {
    const app = document.getElementById('root'); 
    if (show) {
      app.classList.add("blur-background");
    } else {
      app.classList.remove("blur-background");
    }

    return () => {
      app.classList.remove("blur-background");
    };
  }, [show]);

  return (
    <Modal show={show} onHide={onHide} centered size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Body>
        <img src={imageUrl} alt="Ampliada" className="image-modal-img" onClick={onHide} style={{ cursor: 'pointer' }}/>
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;

