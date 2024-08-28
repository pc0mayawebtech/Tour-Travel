import ForgotPassword from "./pages/forgot-password"
import Home from "./pages/home"
import Login from "./pages/login"
import ResetPassword from "./pages/reset-password"
import Signin from "./pages/signup"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:id/:token" element={<ResetPassword />} />
      </Routes>

    </>
  )
}

export default App
