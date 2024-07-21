import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {CartWidget} from "./CartWidget";


export const NavBar = () => {
    return (
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Security Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Camara</Nav.Link>
            <Nav.Link href="#features">Alarmas</Nav.Link>
            <Nav.Link href="#pricing">Accesorios</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    );
};