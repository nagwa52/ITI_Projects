import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Link } from 'react-router-dom';
class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Router>
                    <React.Fragment>
                        <Navbar bg="light" variant="light">
                            <Container>
                                <Navbar.Brand as={Link} to={"/home"}>Students</Navbar.Brand>
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to={"/about"}>About</Nav.Link>

                                </Nav>
                            </Container>
                        </Navbar>
                    </React.Fragment>
                </Router>
            </div >


        )
    }
}
export default NavbarComp;