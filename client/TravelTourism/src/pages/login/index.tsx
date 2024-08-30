import './index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [inputval, setInputVal] = useState({
    email: '',
    password: '',
    error: {
      email: '',
      password: '',
    }
  });

  const handleChange = (e: { target: { name: string; value: string; } }) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputVal((prevalue) => (
      {
        ...prevalue,
        [name]: value,
      }
    ))
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    const notify = () => toast.success('Login is successfull', {
      position: "top-right",
      autoClose: 5000,
      pauseOnHover: true,
    });
    const errorNotify = () => toast.error('something is wrong', {
      position: "top-right",
      autoClose: 5000,
      pauseOnHover: true,
    });
    const { email, password } = inputval;
    const errors = {
      email: '',
      password: '',
    }

    e.preventDefault();

    let hasErrors = false;
    if (!email) {
      errors.email = "Email is required";
    }
    else if (!email.includes('@')) {
      errors.email = "@ is not included";
      hasErrors = true;
    }

    if (!password && password.trim()) {
      errors.password = "Password is required";
      hasErrors = true;
    }

    else if (password.length <= 8) {
      errors.password = "Password should be at least 9 characters long";
      hasErrors = true;
    }

    if (!hasErrors) {
      try {
        const response = await axios.post('http://localhost:3000/', {
          email: inputval.email,
          password: inputval.password,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.status === 200) {
          console.log('ResponseData', response);
          setInputVal({
            email: '',
            password: '',
            error: {
              email: '',
              password: '',
            },
          });
          document.cookie = "token=" + response.data.token;
          notify();
          navigate('/', { replace: true });
          localStorage.setItem('token', response.data.token);
        }
      } catch (error) {
        console.log('error', error);
        errorNotify();
      };
    }
    else {
      setInputVal((prevalue) => (
        {
          ...prevalue,
          error: errors,
        }
      ))
    };
  };
  return (
    <div className="outerBoxWrapper">
      <div className="login-box">
        <h2>Login</h2>
        <form action='./action.php' method='post' onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" name='email' value={inputval.email} onChange={handleChange} />
          <span className='formError'>{inputval.error.email}</span>
          <input type="password" placeholder="Password" name='password' value={inputval.password} onChange={handleChange} />
          <span className='formError'>{inputval.error.password}</span>
          <div className="forgot-password">
            <Link to="/forgotpassword" className='linkingtext'>Forgot Password?</Link>
          </div>
          <button type="submit" className='logbtn'>Log In</button>
          <p>Don't have an account? <Link to="/signup" className='linkingtext'>Sign Up</Link></p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
