import { useState, useRef } from 'react';
import './OTPPage.css';

const OTPPage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [error, setError] = useState('');
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling && element.value !== '') {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyUp = (event, index) => {
    if (event.key === 'Backspace' && event.target.value === '') {
      if (index > 0) inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    if (otp.includes('')) {
      setError('Please enter the complete OTP.');
    } else {
      setError('');
      console.log(`Entered OTP: ${otp.join('')}`);
      setOtp(new Array(6).fill('')); // Clear the OTP input fields
      inputRefs.current[0].focus();  // Focus the first input field
    }
  };

  return (
    <div className="login-page">
      <div className="left-side">
        <div className="left-side-content">
          <h1>The Ultimate</h1>
          <h1 className="mobile-banking">Mobile banking</h1>
          <h1>Experience.</h1>
        </div>
      </div>
      <div className="right-side">
        <div className="logo"></div>
        <div className="otp">OTP</div>
        <div className="sign-in-to-continue">
          Sign in to continue. Your password is yours, do not share it with anyone.
        </div>
        <div className="otp-input-container">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="otp-digit"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyUp={(e) => handleKeyUp(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>
        {error && <div className="error-message">{error}</div>}
        <button className="login-button" onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default OTPPage;

