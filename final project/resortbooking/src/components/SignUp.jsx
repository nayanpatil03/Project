// import React, { useState } from 'react';
import {  /*Form*/ Button, Col, Container, Row } from 'react-bootstrap';
import { signUp } from '../services/services';
import { toast, ToastContainer } from 'react-toastify';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { signUPschema } from '../Validation Schema/SIgnUpSchema';
import "../assets/styles/signupstyle.css";

export function SignUp() {

  /*
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

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
      
      console.log('User Registered:', formData);
      const response = await signUp(formData);
      if(response.status===200){
        toast.success("signup successfull");
      }
    } catch (error) {
      console.log(error);
      console.log("signup problem");
    }
    console.log(formData);
  };

   <Container className="mt-5" style={{ maxWidth: '500px' }}>
      <h3 className="text-center mb-4">User Registration</h3>
       
       
       <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Register
        </Button>
      </Form>
      <ToastContainer></ToastContainer>
    </Container>
*/
  const initialValues = { name: '', email: '', password: '' };//step-1


  const handleSubmit = async (formData) => {

    try {

      console.log('User Registered:', formData);
      const response = await signUp(formData);
      if (response.status === 200) {
        // toast.success("signup successfull");
      }
    } catch (error) {
      console.log(error);
     toast.error("signup problem");
    }
    console.log(formData);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '500px' }}>
      <h3 className="text-center mb-4">User Registration</h3>

      <Formik      //step-2
        initialValues={initialValues}
        validationSchema={signUPschema}
        onSubmit={handleSubmit}>

        {
          (formik) => {  //step-3
            const { /*errors, touched,*/  isValid, dirty } = formik;
            return (
              <Form>
                <Row>
                  <Col  >
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <Field type="text" className="form-control" aria-describedby="emailHelp" placeholder='Enter your name' name='name' />
                      <ErrorMessage name='name' component="span" className='error'/> 
                    </div>
                  </Col>

                </Row>
                <Row>
                  <Col  >
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <Field type="email" className="form-control" aria-describedby="emailHelp" placeholder='Enter your email' name='email'  />
                       <ErrorMessage name='email' component="span" className='error'/>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col  >
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <Field type="password" className="form-control" aria-describedby="emailHelp" placeholder='Enter your password' name='password' />
                       <ErrorMessage name='password' component="span" className='error'/>
                    </div>
                  </Col>
                </Row>
                <Button variant="primary" type="submit" className="w-100" disabled={!(dirty && isValid)}>
                  Register
                </Button>
              </Form>
            )
          }
        }



      </Formik>
      <ToastContainer></ToastContainer>
    </Container>
  );
};


