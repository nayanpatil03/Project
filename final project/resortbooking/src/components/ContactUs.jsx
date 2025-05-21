import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { contactUs } from "../services/services";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await contactUs(formData);
      if (response.status === 200) {
        toast.success(response.data.message);
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: '', email: '', message: '' }); // clear form
      }
    } catch (error) {
      console.log(error);
      console.log("signup problem");
    }
    console.log(formData);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-fill">
        <Container className="my-5">
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="shadow p-4">
                <h2 className="text-center mb-4">Contact Us</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required onChange={handleChange} name="name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required onChange={handleChange} name="email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Your message" required onChange={handleChange} name="message" />
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="primary" type="submit">
                      Send Message
                    </Button>
                  </div>
                  {successMessage && (
                    <div className="alert alert-success mt-3 text-center" role="alert">
                      {successMessage}
                    </div>
                  )}  
                </Form>

                {/* Contact Information Section */}
                <hr className="my-4" />
                <div className="mt-3">
                  <h5>Our Contact Information</h5>
                  <p><strong>Address:</strong> 123 Resort Street, Mumbai, India</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Email:</strong> support@resortbooking.com</p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};
