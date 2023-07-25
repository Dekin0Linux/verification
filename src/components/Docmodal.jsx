import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import Doc from '../pages/Doc';

function Docmodal({ show, onHide }) {
  return (
    <div>
         <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>My Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Doc/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default Docmodal