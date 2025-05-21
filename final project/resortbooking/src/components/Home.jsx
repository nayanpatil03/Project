
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import img from "../assets/imagies/resort1.jpg";
import img1 from "../assets/imagies/4.avif";
import img2 from "../assets/imagies/2.avif";
import {
  FaSwimmer,
  FaWifi,
  FaConciergeBell,
  FaCar,
  FaSpa,
  FaUtensils,
  FaDumbbell,
  FaTree,
  FaGlassCheers
} from "react-icons/fa";
import  '../assets/styles/Amenities.css'
export function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const amenities = [
    { name: "Swimming Pool", icon: <FaSwimmer /> },
    { name: "Free Wi-Fi", icon: <FaWifi /> },
    { name: "24/7 Room Service", icon: <FaConciergeBell /> },
    { name: "Free Parking", icon: <FaCar /> },
    { name: "Spa & Wellness", icon: <FaSpa /> },
    { name: "Restaurant & Bar", icon: <FaUtensils /> },
    { name: "Gym Facility", icon: <FaDumbbell /> },
    { name: "Garden View", icon: <FaTree /> },
    { name: "Event Halls", icon: <FaGlassCheers /> }
  ];

  const filteredAmenities = amenities.filter((amenity) =>
    amenity.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Hero Carousel */}
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="hero-slide d-flex align-items-center justify-content-center text-center text-white"
              style={{
                backgroundImage: `url(${img})`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <Container>
                <h1 className="display-4 fw-bold">Palm Paradise Resort</h1>
                <p className="lead">Relax by the beach in luxury cottages with scenic ocean views.</p>
                <a href="https://palmparadiseresort.com-krabi.com/" className="btn btn-primary px-4 py-2 mt-3">Know More</a>
              </Container>
            </div>
          </div>

          <div className="carousel-item">
            <div
              className="hero-slide d-flex align-items-center justify-content-center text-center text-white"
              style={{
                backgroundImage: `url(${img1})`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <Container>
                <h1 className="display-4 fw-bold">Green Valley Resort</h1>
                <p className="lead">Surrounded by greenery, ideal for families and nature lovers.</p>
                <a href="https://www.greenvalleyresortkhanvel.com/" className="btn btn-primary px-4 py-2 mt-3">Know More</a>
              </Container>
            </div>
          </div>

          <div className="carousel-item">
            <div
              className="hero-slide d-flex align-items-center justify-content-center text-center text-white"
              style={{
                backgroundImage: `url(${img2})`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <Container>
                <h1 className="display-4 fw-bold">Royal Heritage Resort</h1>
                <p className="lead">Feel the grandeur of royal architecture with premium service.</p>
                <a href="https://theroyalheritagetentresort.com/" className="btn btn-primary px-4 py-2 mt-3">Know More</a>
              </Container>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Amenities Section */}
      <div className="container mt-5">
        <h1 className="text-center mb-4">Our Amenities</h1>
        <div className="row justify-content-center mb-4">
          <div className="col-md-6 col-sm-8 col-10">
            <input
              type="text"
              className="form-control"
              placeholder="Search amenities..."
              aria-label="Search amenities"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          {filteredAmenities.slice(0, 9).map((amenity, index) => (
            <div
              className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4 d-flex align-items-stretch"
              key={index}
            >
              <div className="card text-center shadow-sm amenity-card w-100">
                <div className="card-body">
                  <div
                    className="amenity-icon mb-3 animated-icon"
                    style={{ fontSize: "2rem" }}
                  >
                    {amenity.icon}
                  </div>
                  <h5 className="card-title">{amenity.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
