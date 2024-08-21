import ForgotPassword from "./pages/forgot-password"
import Home from "./pages/home"
import Login from "./pages/login"
import Signin from "./pages/signup"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>

    </>
  )
}

export default App
