import React from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './styles/navtop.scss';

const NavTop = () => {
  return (
    <>
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="nav-logo-decoration" to="/home">Моё Боровское</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="nav-link-decoration" to="/news">Новости</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link-decoration" to="/">Профиль</Link>
            </Nav.Link>
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link>
                <Link className="nav-logo-decoration" to="/sign-up">Зарегистрироваться</Link>
              </Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavTop;