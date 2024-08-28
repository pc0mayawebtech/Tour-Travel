import ForgotPassword from "./pages/forgot-password"
import Home from "./pages/home"
import Login from "./pages/login"
import ResetPassword from "./pages/reset-password"
import Signin from "./pages/signup"
import { Route, Routes } from "react-router-dom"
import Protected from "./utils/protected"
import Contact from "./pages/contactus"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Protected Component={Home} />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:id/:token" element={<ResetPassword />} />
        <Route path="/contact" element={<Protected Component={Contact} />} />
      </Routes>

    </>
  )
}

export default App
