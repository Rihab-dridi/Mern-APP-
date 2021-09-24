import React from "react";
import { Navbar, Container } from "react-bootstrap";
export default function Nav() {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">MERN APP!!</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
