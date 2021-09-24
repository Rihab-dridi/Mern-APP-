import React from "react";
import { useDispatch } from "react-redux";
import "../stylesheet/contact.css";
import Edit from "./edit";
import { Card, ListGroup, Button } from "react-bootstrap";
import { deleteHandler } from "../redux/action/contact-action";
export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>{contact.name}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {contact.email}
            <div className="editBtns">
              <Button
                variant="outline-secondary"
                onClick={() => dispatch(deleteHandler(contact._id))}
              >
                del
              </Button>
              <Edit contact={contact} />
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
