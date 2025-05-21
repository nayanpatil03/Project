import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { getToken, removeToken } from '../services/services';
import { useNavigate } from 'react-router-dom';

export function CustomerNavbar({ setLoggedIn }) {

    const nevigate = useNavigate();

     const logOutAcc = () =>{
           const tokenForLoggedIn = getToken();
           if(tokenForLoggedIn){
                removeToken();
                setLoggedIn(false);
                nevigate("/home");
           
            
           }else{
              // console.log("error");
           }
       }
  return (
    
    <Navbar expand="lg" style={{ background: 'linear-gradient(135deg, rgb(49, 54, 82), #a777e3)' }} data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/home">Resort Finder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
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
                         <LinkContainer to="/mybooking">
                            <Nav.Link>My Booking</Nav.Link>
                        </LinkContainer>
                        <Button variant='primary' size="sm" className='ms-auto' onClick={logOutAcc}>Log out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
  
}


