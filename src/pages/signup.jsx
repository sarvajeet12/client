import React from "react";
import { State } from "country-state-city";
import { Link } from "react-router-dom";

const SignUp = () => {
  const states = State.getStatesOfCountry("IN");

  return (
    <div className="signUp-container">
      <div className="signUp">
        <h1>Sign up</h1>
        <form action="">
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" required />
          <input
            type="number"
            placeholder="Enter your mobile number"
            maxLength={10}
            required
          />

          <select required>
            <option value="">Select your state</option>
            {states.map((stateName, index) => (
              <option key={index}>{stateName.name}</option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Enter refer code"
            required
            maxLength={6}
          />
          <span>
            <input type="checkbox" name="check" id="check" required />
            <label htmlFor="check">Terms & conditions</label>
          </span>
          <button type="submit" className="signUpBtn">
            Submit
          </button>
          <p className="alreadyAccount">
            Already account ? <Link to={"/"}>Login</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
