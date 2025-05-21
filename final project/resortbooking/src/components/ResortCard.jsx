import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getToken } from "../services/services";
import { toast } from "react-toastify";
// import img1 from "./img"
export function ResortCard({ resort }) {

  const navigate = useNavigate();
  const bookResort = () => {
    const token = getToken();
      console.log(token);
    // Extra validation
    if (token) {
      navigate(`/book/${resort.id}`);
    } else {
      toast.error("Please login to continue");
      navigate(`/login`);
    }


  }

  return (
    <Card className="mb-4 shadow" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`/${resort.image}`}
        alt={resort.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{resort.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{resort.location}</Card.Subtitle>
        <Card.Text style={{ fontSize: "0.9rem" }}>
          {resort.description}
        </Card.Text>
        <p><strong>₹{resort.price_per_day}/day</strong></p>
        <Button variant={resort.available ? "success" : "secondary"} disabled={!resort.available} onClick={bookResort}>
          {resort.available ? "Book Now" : "Unavailable"}
        </Button>
      </Card.Body>
    </Card>
  );
}
