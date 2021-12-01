import React, {useState} from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './styles/navtop.scss';
import Modalauth from "./ModalAuth/Modalauth";

const NavTop = () => {
  // const {username, password} = JSON.parse(localStorage.getItem("auth"));
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="nav-logo-decoration" to="/">Моё Боровское</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="nav-link-decoration" to="/">Главная</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link-decoration" to="/news">Новости</Link>
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {/*Signed in as: <p>{currentUser}</p>*/}
            </Navbar.Text>
            <Nav.Link>
              <Button variant="outline-warning" onClick={() => setModalShow(true)}>Login</Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="outline-warning">Logout</Button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modalauth show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}

export default NavTop;
