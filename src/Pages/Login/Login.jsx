import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://192.168.90.104:9010/authentication/login", { userId, password });
      console.log(response);
      if (response.data.message === 'Success') {
        // Assuming successful login redirects to a dashboard
        navigate("/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-page">
      <div className="left-side">
        <div className="left-side-content">
          <h1>The Ultimate</h1>
          <h1 className="mobile-banking">Mobile Banking</h1>
          <h1>Experience.</h1>
        </div>
      </div>
      <div className="right-side">
        <div className="logo"></div>
        <h2>Login</h2>
        <div className="advice">
          Sign in to continue. Your password is yours, do not share it with
          anyone.
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="User ID"
            className="input-field"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="links">
          <div className="forgot-password-help">
            <a href="#forgot">
              <span className="forgot-password">Forgot Password?</span>
            </a>
            <a href="#help">
              <span className="need-help">Need Help?</span>
            </a>
          </div>
          <a href="#register">
            Dont have an account? <span className="register">Register</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
