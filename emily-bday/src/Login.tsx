import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const LoginModal = (): JSX.Element => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.name == "Emily Zhao" && formData.password == "07032003") {
      setLoggedIn(true);
    } else {
      alert("Wrong Name/Password");
    }
  };

  return (
    <Modal show={!isLoggedIn} centered size="lg">
      <Modal.Header>
        <Modal.Title className="mx-auto">Login</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body className="d-flex flex-column">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Text muted> (First and Last Name) </Form.Text>
            <Form.Control
              onChange={(e) => {
                setFormData({
                  ...formData,
                  name: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Text> (Your Birthday MMDDYYYY)</Form.Text>
            <Form.Control
              type="password"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  password: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="mt-3 w-25 align-self-center"
          >
            Submit
          </Button>
        </Modal.Body>
      </Form>
    </Modal>
  );
};

export default LoginModal;
