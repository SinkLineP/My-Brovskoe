import React, {useState} from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './styles/navtop.scss';
import Modalauth from "./ModalAuth/Modalauth";

const NavTop = () => {
  const [modalShow, setModalShow] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const hiddenLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("currentUser");
    setCurrentUser("");
  }

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
            {currentUser !== "" ? (
              <>
                <Navbar.Text>
                  Signed in as: <span>{currentUser}</span>
                </Navbar.Text>
                <Nav.Link>
                  <Button variant="outline-warning" onClick={hiddenLogout}>Logout</Button>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link>
                <Button variant="outline-warning" onClick={() => setModalShow(true)}>Login</Button>
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modalauth show={modalShow} onHide={() => setModalShow(false)} curUser={currentUser} onCurUser={(item) => setCurrentUser(item)}/>
    </>
  )
}

export default NavTop;
