import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { editHandler } from "../redux/action/contact-action";
export default function Example({contact}) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setname] = useState(contact.name)
  const [email, setemail] = useState(contact.email)
  const submissionHandler=()=>{
dispatch(editHandler(contact.name,{name,email}))

handleClose()
  }

  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" placeholder="enter namet" value={name}  onChange={(e)=>setname(e.target.value)} />
          <br />
          <Form.Control type="text" placeholder="enter email" value={email}  onChange={(e)=>setemail(e.target.value)} />
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
