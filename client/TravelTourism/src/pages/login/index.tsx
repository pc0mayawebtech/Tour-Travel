import './index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [inputval, setInputVal] = useState({
    email: '',
    password: '',
    error: {
      email: '',
      password: '',
    }
  });

  const handleClick = (e: { target: { name: string; value: string; } }) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputVal((prevalue) => (
      {
        ...prevalue,
        [name]: value,
      }
    ))
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
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
      console.log('login successfully');
      setInputVal({
        email: '',
        password: '',
        error: {
          email: '',
          password: '',
        },
      })
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
          <input type="email" placeholder="Email" name='email' value={inputval.email} onChange={handleClick} />
          <span className='formError'>{inputval.error.email}</span>
          <input type="password" placeholder="Password" maxLength={10} name='password' value={inputval.password} onChange={handleClick} />
          <span className='formError'>{inputval.error.password}</span>
          <div className="forgot-password">
            <Link to="/forgotpassword" className='linkingtext'>Forgot Password?</Link>
          </div>
          <button type="submit">Log In</button>
          <p>Don't have an account? <Link to="/signup" className='linkingtext'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
