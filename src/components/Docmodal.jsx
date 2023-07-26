import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Doc from '../pages/Doc';

function Docmodal({ lgshow, onHide }) {
  return (
    <div>
      <Modal size="lg" show={lgshow} onHide={onHide} aria-labelledby="example-modal-sizes-title-lg" dialogClassName="modal-90w" >
        <Modal.Header closeButton>
          <Modal.Title>My Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Doc />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Docmodal;
