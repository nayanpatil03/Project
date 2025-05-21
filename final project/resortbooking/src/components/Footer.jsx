import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaUmbrellaBeach } from 'react-icons/fa';

export function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to top on navigation
  };

  return (
    <footer className="bg-dark text-white py-5 mt-5 ">
      <Container>
        <Row>
          {/* Branding Section */}
          <Col lg={4} md={6} className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <FaUmbrellaBeach className="text-primary fs-3 me-2" />
              <h5 className="mb-0 text-primary resort">Resort Booking Portal</h5>
            </div>
            <p>
              Your one-stop solution to explore and book luxury resorts across India. 
              Discover top destinations and manage your bookings with ease.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com" className="text-white" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </Col>

          {/* Quick Links Section */}
          <Col lg={4} md={6} className="mb-4">
            <h5 className="text-primary mb-3 resort">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Button variant="link" className="text-white p-0 text-decoration-none text-start" onClick={() => handleNavigation('/home')}>
                  Home
                </Button>
              </li>
              <li className="mb-2">
                <Button variant="link" className="text-white p-0 text-decoration-none text-start" onClick={() => handleNavigation('/resorts')}>
                  Browse Resorts
                </Button>
              </li>
              <li className="mb-2">
                <Button variant="link" className="text-white p-0 text-decoration-none text-start" onClick={() => handleNavigation('/about-us')}>
                  About Us
                </Button>
              </li>
              <li className="mb-2">
                <Button variant="link" className="text-white p-0 text-decoration-none text-start" onClick={() => handleNavigation('/login')}>
                  Login
                </Button>
              </li>
              <li className="mb-2">
                <Button variant="link" className="text-white p-0 text-decoration-none text-start" onClick={() => handleNavigation('/signup')}>
                  Sign Up
                </Button>
              </li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col lg={4} className="mb-4">
            <h5 className="text-primary mb-3 resort" >Contact Us</h5>
            <address>
              <p className="mb-2">
                <i className="fas fa-map-marker-alt me-2 text-warning"></i>
                Navi Mumbai, Maharashtra, India
              </p>
              <p className="mb-2">
                <i className="fas fa-phone me-2 text-warning"></i>
                +91 73000 00000
              </p>
              <p className="mb-3">
                <i className="fas fa-envelope me-2 text-warning"></i>
                support@resortbooking.com
              </p>
            </address>
            <Button  className="btn" variant="primary" onClick={() => handleNavigation('/about-us')} >
              Learn More
            </Button>
          </Col>
        </Row>

        <hr className="my-4 bg-secondary" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Resort Booking. All rights reserved.
            </p>
            <div className="mt-2">
              <Button variant="link" className="text-white text-decoration-none" onClick={() => handleNavigation('/privacy')}>
                Privacy Policy
              </Button>
              <span className="mx-2">|</span>
              <Button variant="link" className="text-white text-decoration-none" onClick={() => handleNavigation('/terms')}>
                Terms of Service
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
