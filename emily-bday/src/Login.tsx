import React from "react";
import Modal from "react-bootstrap/Modal";

const LoginModal = (): JSX.Element => {
  return (
    <div
      className="modal show"
      style={{ color: "black", display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default LoginModal;
