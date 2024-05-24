import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import './Header.css'

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className='cont'>
        <Navbar.Brand href="#home">Khenifra</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto menu">
            <Nav.Link href="#home" >Acceuil</Nav.Link>
            <Nav.Link href="#about">Information</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#works">Lieux</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button className=' button'><Link to="/Login">Connexion</Link></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;