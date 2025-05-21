import axios from "axios";

//signup post api
export function signUp(formData){
   return axios.post("http://127.0.0.1:5000/signup",formData);
}

//login post api
export function login(formData){
   return axios.post("http://127.0.0.1:5000/login",formData);
}

// to book the resort
export function booking(formData){
   return axios.post("http://127.0.0.1:5000/bookings",formData,{
       headers: {
         Authorization: `Bearer ${getToken()}`
    }
   });
}

//customer booked resort list 
export function mybooking(){
   return axios.get("http://127.0.0.1:5000/mybookings",{
       headers: {
         Authorization: `Bearer ${getToken()}`
    }
   });
}

//conact us api
export function contactUs(formData){
   return axios.post("http://127.0.0.1:5000/contact-us",formData);
}

//resorts list get api
export function resortList(){
   return axios.get("http://127.0.0.1:5000/resorts");
}

//cancle booking api
export function cancle(id){
   return axios.delete(`http://127.0.0.1:5000/mybookings/${id}`,{
       headers: {
         Authorization: `Bearer ${getToken()}`
    }
   });
}

//booking redirection

export function bookingFormRedirection(){
   
}

//store token to local storage
export function storeToken(token){
   return localStorage.setItem("token",token);
}

//get token from local storage
export function getToken(){
   return localStorage.getItem("token");
}

//remove token from local storage
export function removeToken(){
    localStorage.removeItem("token");
}