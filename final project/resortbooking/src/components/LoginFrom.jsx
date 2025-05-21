// import { useState } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { login, storeToken } from "../services/services";

import { LogInSchema } from '../Validation Schema/LogInSchema';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export function LoginForm({ setLoggedIn }) {

    const initialValues = { email: '', password: '' };
    const navigate = useNavigate();
    const [isSuccessfullLogin, setIsSuccessfullLogin] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = async (formData) => {
        try {
            const res = await login(formData);
            if (res.status == 200) {
                console.log(res.data.message) //-> give message on success
                // toast.success(response.data.message);
                setIsSuccessfullLogin("Your Logged In  successfully!");
                setTimeout(() => {
                    navigate("/resorts");
                }, 3000);
                storeToken(res.data.token); // stoing the token
                setLoggedIn(true);  // true so that customer nav bar will be shown
                // toast.success(res.data.message);
            }
            else {
                setError("Wrong email or password.");
                toast.error(res.data.message);
            }
            // console.log(response);
        } catch (error) {
            console.log(error);
        }

    }


    return (

        <Container className="mt-5" style={{ maxWidth: '500px' }}>
            <h3 className="text-center mb-4">User Log In</h3>
            <Formik      //step-2
                initialValues={initialValues}
                validationSchema={LogInSchema}
                onSubmit={handleSubmit}>
                {
                    (formik) => {
                        const { /*errors, touched,*/  isValid, dirty } = formik;
                        return (
                            <Form>
                                <Row>
                                    <Col>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <Field type="email" name="email"
                                                placeholder="Enter email" className="form-control" aria-describedby="emailHelp" />
                                            <ErrorMessage name='email' component="span" className='error' />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <Field type="password" name="password"
                                                placeholder="Enter Password" className="form-control" />
                                            <ErrorMessage name='password' component="span" className='error' />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="mb-3 d-flex justify-content-center align-items-center">
                                            <Button type="submit" className="btn btn-primary" disabled={!(dirty && isValid)}  > Submit</Button>
                                        </div>
                                    </Col>
                                </Row>
                                {isSuccessfullLogin && (
                                    <div className="alert alert-success mt-3 text-center" role="alert">
                                        {isSuccessfullLogin}
                                    </div>
                                )}
                                
                                
                                {error && (
                                    <div className="alert alert-success mt-3 text-center" role="alert">
                                        {error}
                                    </div>
                                )}
                                
                                
                            </Form>
                        )
                    }
                }
            </Formik>


            <ToastContainer></ToastContainer>
        </Container>
    );
}


// <form className="mt-3 col-4"  >


