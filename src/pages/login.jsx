import React, { useState } from "react";
import "../components/auth.css";
import { imageAssets } from "../assets/js/image-assets";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import OTPInput from "react-otp-input";

const Login = () => {
  const [token, setToken] = useState(true);

  return (
    <div className="login-container">
      {token ? (
        <div className="login">
          <>
            <img src={imageAssets.ProjectLogo} alt="Logo" />
          </>
          <>
            <h1>Login</h1>
            <form action="">
              <input
                type="number"
                placeholder="Enter mobile number : +91 1234567890"
                maxLength={10}
                required
              />
              <button type="submit" onClick={()=>setToken(false)}>
                <FaArrowRight />
              </button>
            </form>
          </>
          <>
            <span>OR</span>

            <Link to={"/signup"}>
              <button className="signUpBtn">Sign up</button>
            </Link>

           
          </>
        </div>
      ) : (
        <div className="login verifyOTP" >
          <h1>Verify OTP</h1>
          <form onSubmit={(e) => handleVerifyOtp(e)}>
            <OTPInput
              required
              numInputs={6}
              // name={otp}
              // value={otp}
              // onChange={setOtp}
              renderInput={(props) => (
                <input {...props} placeholder="-" className="otp-boxes" />
              )}
            />
            <input type="submit" value="Verify" className="signUpBtn"/>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
