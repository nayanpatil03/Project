
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import {VisitorNavbar} from './components/VisitorNavbar';
import { Offers } from './components/Offers';
import { Resorts } from "./components/Resorts";
import { AboutUs } from "./components/AboutUs";
import { LoginForm } from "./components/LoginFrom";
import { SignUp } from "./components/SIgnUp";
import { Home } from "./components/Home";
import { useState } from "react";
import {CustomerNavbar} from "./components/CustomerNavbar"
import {MyBooking} from "./components/MyBooking"
import {BookingForm} from "./components/BookingForm"
import { Footer } from "./components/Footer";
import { ContactUs } from "./components/ContactUs";
// import { Footer } from "./components/Footer";
function App() {

  const [isLoggedIn,setLoggedIn] = useState(false)

  return (
    
    <div className="d-flex flex-column min-vh-100">
    <BrowserRouter>
    {
      (isLoggedIn) ? <CustomerNavbar   setLoggedIn={setLoggedIn}/> : <VisitorNavbar />

    }
    
    <Routes>
      <Route path="/home" element={<Home/>} />
       <Route path="/resorts" element={<Resorts/>} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/login" element={<LoginForm setLoggedIn={setLoggedIn}  />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mybooking" element={<MyBooking />} />
      <Route path="/book/:resortId" element={<BookingForm />} />
    </Routes>
    <Footer></Footer>
     <ToastContainer></ToastContainer>
  </BrowserRouter>

    </div>
  )
}

export default App




  // <BrowserRouter>
  //   {
  //     (isLoggedIn) ? 
  // <Routes>
  //     <Route path="/home" element={<Home/>} />
  //     <Route path="/offers" element={<Offers/>} />
  //     <Route path="/resorts" element={<Resorts/>} />
  //     <Route path="/contact-us" element={<ContactUs />} />
  //     <Route path="/login" element={<LoginForm setLoggedIn={setLoggedIn}  />} />
  //     <Route path="/signup" element={<SignUp />} />
  //  </Routes> 
  //  :
  //   <Routes>
  //     <Route path="/home" element={<Home/>} />
  //     <Route path="/offers" element={<Offers/>} />
  //     <Route path="/resorts" element={<Resorts/>} />
  //     <Route path="/mybooking" element={<MyBooking />} />
      
  //   </Routes> 

  //   }
    
    
  //   <ToastContainer></ToastContainer>
  // </BrowserRouter>