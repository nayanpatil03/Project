import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { cancle, mybooking } from "../services/services";
export function MyBooking() {




    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // This code runs only once, after the component mounts (like componentDidMount)
        const fetchBookings = async () => {
            try {
                const response = await mybooking(); // 
                // const data = await response.json();
                setBookings(response.data);
            } catch (error) {
                console.error("Failed to fetch bookings:", error);
            }
        };

        fetchBookings();
    }, []);
//------------------------------------
    const  cancleBooking =  async(id) =>{
            try {
                const response = await cancle(id); // 
                console.log(response);
                // const data = await response.json();
                setBookings(prev => prev.filter(booking => booking.booking_id !== id)); // filter other then delititng id confirmation feature may be added in it
            } catch (error) {
                console.error("Failed to fetch bookings:", error);
            }
            console.log("deleted" + id);
            
    }
    return (
        <div className="container mt-4">
            <div className="row">
                {
                    bookings.map((booking) => { // iterate the bookings to print that in the form of card
                        return (
                            <div className="row">
                                <div className="col-12 col-md-6" key={booking.booking_id}>
                                <div className="card mb-4 shadow-lg border-0 rounded-4 overflow-hidden mt-3" style={{ maxWidth: "720px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-5">
                                        <img
                                            src={booking.image} // use dynamic image URL
                                            className="img-fluid h-100 object-fit-cover"
                                            alt="Resort"
                                            style={{ minHeight: "100%", objectFit: "cover" }}
                                        />
                                    </div>
                                        <div className="col-md-7 bg-light">
                                            <div className="card-body d-flex flex-column justify-content-between h-100 py-4 px-4">
                                                <div>
                                                    <h4
                                                        className="fw-bold text-white text-center py-2 px-3 rounded mb-3"
                                                        style={{
                                                            background: "linear-gradient(to right, #0d6efd, #6610f2)",
                                                            fontSize: "1.4rem",
                                                        }}
                                                    >
                                                        {booking.resort_name}
                                                    </h4>
                                                    <p className="mb-2"><strong>📍 Location:</strong> {booking.location}</p>
                                                    <p className="mb-2"><strong>🟢 Check-In:</strong> {booking.check_in}</p>
                                                    <p className="mb-2"><strong>🔴 Check-Out:</strong> {booking.check_out}</p>
                                                    <p className="mb-2"><strong>👥 Persons:</strong> {booking.number_of_persons}</p>
                                                    <p className="mb-3 text-success fs-5"><strong>💰 Price/Day:</strong> ₹{booking.price_per_day}</p>
                                                </div>
                                                <div>
                                                    <button className="btn btn-danger w-100 fw-semibold mb-2 mr-1" onClick={()=>{cancleBooking(booking.booking_id)}}>Cancle Booking</button>
                                                    {/* <button className="btn btn-primary w-100 fw-semibold mb-2">Chnage</button>
                                                    <p className="text-muted text-end small m-0">Book your perfect getaway!</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );

}
