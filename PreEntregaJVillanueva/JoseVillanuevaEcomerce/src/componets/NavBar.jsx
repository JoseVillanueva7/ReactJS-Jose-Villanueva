import { NavLink } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {CartWidget} from "./CartWidget";


export const NavBar = () => {
    return (
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Camaras">Camaras</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Alarmas" >Alarmas</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    );
};