import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { resortList } from "../services/services";
import { ResortCard } from "./ResortCard";

export function Resorts() {
     
       const [resorts, setResorts] = useState([]);

  useEffect(() => {
          // This code runs only once, after the component mounts (like componentDidMount)
          const getResortList = async () => {
              try {
                  const response = await resortList(); // 
                  setResorts(response.data);
              } catch (error) {
                  console.error("Failed to fetch bookings:", error);
              }
          };
  
          getResortList();
      }, []);

    return (
        <Container className="my-5">
            <h2 className="mb-4">Available Resorts</h2>
            <Row>
                {resorts.map(resort => (
                    
                    <Col key={resort.id} sm={12} md={6} lg={4}>
                        <ResortCard resort={resort} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
    
}