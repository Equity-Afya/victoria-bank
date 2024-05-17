import "./Login.css";

const Login = () => {
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
        <input type="text" placeholder="User ID" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="login-button">Login</button>
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
