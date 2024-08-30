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


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Protected Component={Home} />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:id/:token" element={<ResetPassword />} />
        <Route path="/flighthotel" element={<Flighthotel/>}/>
        <Route path="/flighthome" element={<Flighthome/>}/>
        <Route path="/contact" element={<Protected Component={Contact} />} />
        <Route path="/activities" element={<Activity />} />
        <Route path="/couponsAndDeals" element={<CouponsAndDeals />} />
      </Routes>

    </>
  )
}

export default App
