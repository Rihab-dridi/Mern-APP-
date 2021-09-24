import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { addHandler } from "../redux/action/contact-action";
export default function Example() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const submissionHandler=()=>{
    dispatch(addHandler({name,email}))
    setname('')
    setemail('')
    handleClose()
  }

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="enter namet"
            onChange={(e) => setname(e.target.value)}
            value={name}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="enter email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submissionHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
