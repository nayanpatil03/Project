import { useState } from "react"
import { booking } from "../services/services";
import { toast, ToastContainer } from "react-toastify";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export function BookingForm() {
     
    const { resortId } = useParams();
    const [formData,setFormData] = useState(
        {
            fullName:"",
            phone:"",
            numberOfPersons:"",
            checkIn:"",
            checkOut:""
        }
    )

 

    const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const data = {
      resort_id: resortId,
      check_in: formData.checkIn,
      check_out: formData.checkOut,
      number_of_persons: formData.numberOfPersons,
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      console.log('booking confirmed:', data);
      const response = await booking(data);
      if(response.status===201){
        toast.success(response.data.message);
        console.log(response.data.message);
        // removeToken();
      }
    } catch (error) {
      console.log(error);
      console.log("problem in booking");
    }
    // console.log(formData);
  };

   

    return (
        // <!-- Modal -->
        <Container className="my-5">
      <h2 className="text-center mb-4">Book Your Resort</h2>
      <Row>
        {/* <Col md={6}>
          <img
            src="/images/booking.jpg" // Use your actual image path
            className="img-fluid rounded"
            alt="Booking"
          />
        </Col> */}
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="numberOfPersons"
                placeholder="Number of Persons"
                required
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Check-in Date</Form.Label>
              <Form.Control
                type="date"
                name="checkIn"
                required
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Check-out Date</Form.Label>
              <Form.Control
                type="date"
                name="checkOut"
                required
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" variant="info" className="w-100 text-white">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <ToastContainer></ToastContainer>
    </Container>

    )
}