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
import Reviews from "./pages/Reviews"
import PopularActivity from "./pages/popularActivityFooter"
import TourGuide from "./pages/travelGuide"
import OurTrips from "./pages/OurTrips"
import MoreTripDetails from "./pages/OurTrips/TripDetails"

const App = () => {


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
        <Route path="/contact" element={<Contact />} />
        <Route path="/activities" element={<Activity />} />
        <Route path="/couponsAndDeals" element={<CouponsAndDeals />} />
        <Route path ="/airlines" element ={<AirLines/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/train" element={<Train/>}/>
        <Route path="/popularActivity" element={<PopularActivity />} />
        <Route path="/feedback" element={<Reviews/>}/>
        <Route path="/tourGuide" element={<TourGuide/>}/>
        <Route path="/trips" element={<OurTrips/>}/>
        <Route path="/tripDetails" element={<MoreTripDetails/>}/>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
