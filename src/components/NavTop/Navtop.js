import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './styles/navtop.scss';
import {useAuth} from "../../Contexts/AuthContext";

const NavTop = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="nav-logo-decoration" to="/home">Моё Боровское</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            {currentUser === null ? (
              <Nav.Link>
                <Link className="nav-logo-decoration" to="/sign-up">Зарегистрироваться</Link>
              </Nav.Link>
            ) : (
              <Nav.Link>
                <Link className="nav-logo-decoration" to="/">Профиль</Link>
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavTop;