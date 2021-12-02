import React, {useState} from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './styles/navtop.scss';
import Modalauth from "./ModalAuth/Modalauth";

const NavTop = (props) => {
  const [modalShow, setModalShow] = useState(false);
  let emptyCurrentUser = {
    username: "",
    email: "",
    password: "",
  }
  const hiddenLogout = (e) => {
    e.preventDefault();
    props.removeCurUser(emptyCurrentUser);
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
            {props.curUser.username !== "" && props.curUser.email !== "" && props.curUser.password !== "" ? (
              <>
                <Navbar.Text>
                  Signed in as: <span>{props.curUser.username}</span>
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
      <Modalauth show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}

export default NavTop;
