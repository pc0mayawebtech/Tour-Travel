import './index.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="outerBoxWrapper">
      <div className="login-box">
        <h2>Sign Up</h2>
        <form>
        <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className='mt-3'>Sign Up</button>
          <p>Already have an account? <Link to="/login"  className='linkingtext'>LogIn</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
