import { Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import About from "./pages/Aboutus"
import Flighthome from "./pages/Flighthome"
import Flighthotel from "./pages/Flighthotel"
import Train from "./pages/Train"
import { Activity } from "./pages/activities"
import AirLines from "./pages/airlines company"
import Contact from "./pages/contactus"
import CouponsAndDeals from "./pages/couponsAndDeals"
import ForgotPassword from "./pages/forgot-password"
import Home from "./pages/home"
import Login from "./pages/login"
import ResetPassword from "./pages/reset-password"
import Signin from "./pages/signup"
import Protected from "./utils/protected"

// import Flighthotel from "./pages/Flighthotel";
// import { Activity } from "./pages/activities";
// import ForgotPassword from "./pages/forgot-password";
// import Home from "./pages/home";
// import Login from "./pages/login";
// import ResetPassword from "./pages/reset-password";
// import Signin from "./pages/signup";
// import { Route, Routes } from "react-router-dom";
// import Protected from "./utils/protected";
// import Flighthome from "./pages/Flighthome";
// import Contact from "./pages/contactus";
// import CouponsAndDeals from "./pages/couponsAndDeals";
import Reviews from "./pages/Reviews"
import PopularActivity from "./pages/popularActivityFooter"
import TourGuide from "./travelGuide"

const App = () => {
// js -> in 
// get path -> router


  return (
    <>
      <Routes>
        <Route path="/home" element={<Protected Component={Home} />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:id/:token" element={<ResetPassword />} />
        <Route path="/flighthotel" element={<Flighthotel />} />
        <Route path="/flighthome" element={<Flighthome />} />
        <Route path="/contact" element={<Protected Component={Contact} />} />
        <Route path="/activities" element={<Activity />} />
        <Route path="/couponsAndDeals" element={<CouponsAndDeals />} />
        <Route path ="/airlines" element ={<AirLines/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/train" element={<Train/>}/>

        <Route path="/popularActivity" element={<PopularActivity />} />
        <Route path="/feedback" element={<Reviews/>}/>
        <Route path="/tourGuide" element={<TourGuide/>}/>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
