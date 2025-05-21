
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function VisitorNavbar() {
  return (
    <Navbar expand="lg" style={{ background: 'linear-gradient(135deg, rgb(39, 40, 48), #a777e3)' }} data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/home">Resort Finder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/home">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>

                        {/* <LinkContainer to="/offers">
                            <Nav.Link>Offers</Nav.Link>
                        </LinkContainer> */}

                        <LinkContainer to="/resorts">
                            <Nav.Link>Resorts</Nav.Link>
                        </LinkContainer>
                         <LinkContainer to="/about-us">
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact-us">
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link>Log In</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/signup">
                            <Nav.Link>Sign Up</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}

 
