import Flighthotel from "./pages/Flighthotel"
import { Activity } from "./pages/activities"
import ForgotPassword from "./pages/forgot-password"
import Home from "./pages/home"
import Login from "./pages/login"
import ResetPassword from "./pages/reset-password"
import Signin from "./pages/signup"
import { Route, Routes } from "react-router-dom"
import Protected from "./utils/protected"
import Flighthome from "./pages/Flighthome"
import Contact from "./pages/contactus"
import CouponsAndDeals from "./pages/couponsAndDeals"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AirLines from "./pages/airlines company"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:id/:token" element={<ResetPassword />} />
        <Route path="/flighthotel" element={<Flighthotel/>}/>
        <Route path="/flighthome" element={<Flighthome/>}/>
        <Route path="/contact" element={<Protected Component={Contact} />} />
        <Route path="/activities" element={<Activity />} />
        <Route path="/couponsAndDeals" element={<CouponsAndDeals />} />
        <Route path ="/airlines" element ={<AirLines/>}/>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
