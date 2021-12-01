import React, {Component} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './styles/navtop.scss';

class NavTop extends Component {
    render() {
        return (
            <>
                <Navbar bg="success" variant="dark">
                    <Container>
                        <Navbar.Brand>Моё Боровское</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link className="nav-link-decoration" to="/">Главная</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className="nav-link-decoration" to="/news">Новости</Link>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default NavTop;
