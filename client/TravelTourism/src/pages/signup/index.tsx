import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    password: "",
    error: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputVal((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    const notify = () =>
      toast.success("Signup is successfull", {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
      });
    const errorNotify = () =>
      toast.error("something is wrong", {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
      });

    const { name, email, password } = inputVal;
    const errors = {
      name: "",
      email: "",
      password: "",
    };
    e.preventDefault();
    let hasErrors = false;
    if (!name) {
      errors.name = "Name is required";
      hasErrors = true;
    } else if (name.length < 2) {
      errors.name = "Name must be at least 2 characters long";
      hasErrors = true;
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!email.includes("@")) {
      errors.email = "@ must be included";
      hasErrors = true;
    }
    if (!password) {
      errors.password = "Password is required";
      hasErrors = true;
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
      hasErrors = true;
    }
    if (!hasErrors) {
      try {
        const response = await axios.post(
          "http://localhost:3000/signup",
          {
            name,
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          console.log("response", response.data);
          setInputVal({
            name: "",
            email: "",
            password: "",
            error: {
              name: "",
              email: "",
              password: "",
            },
          });
          notify();
          navigate("/");
        }
      } catch (error) {
        console.error("Error during signup:", error);
        errorNotify();
      }
    } else {
      setInputVal((prevState) => ({ ...prevState, error: errors }));
    }
  };
  return (
    <div className="outerBoxWrapper">
      <div className="sign-box">
        <h2>Sign Up</h2>
        <form method="post" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={inputVal.name}
            onChange={handleChange}
          />
          <span className="formError">{inputVal.error.name}</span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={inputVal.email}
            onChange={handleChange}
          />
          <span className="formError">{inputVal.error.email}</span>
          <input
            type="password"
            name="password"
            maxLength={10}
            placeholder="Password"
            value={inputVal.password}
            onChange={handleChange}
          />
          <span className="formError">{inputVal.error.password}</span>
          <button type="submit" className="btnSign mt-3">
            Sign Up
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="linkingtext">
              LogIn
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
