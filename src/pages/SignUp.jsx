import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const { user, setdoc, signUp } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      await setdoc(email);
      navigate("/");
    } catch (error) {
      setError(error.message);
      //  i wanna write if for prevent problem with signup with email
    }
  };

  return (
    <div className="w-screen h-screen">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/ccf00e8d-5357-4dcc-ba0b-e4f2d71cfb11/DE-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
        className="hidden sm:block absolute w-full h-full object-cover"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="signin-form-1">
        <div className="signin-form-2">
          <div className="signin-form-3">
            <h1>Sign Up</h1>
            {error ? <p>{error}</p> : null}
            <form>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                required
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
              />
              <input type="submit" value="Sign Up" onClick={handleSignin} />
              <div>
                <label className="remember-me-label">
                  <input type="checkbox" />
                  <span className="label-text">Remember Me</span>
                </label>
                <p>Need help?</p>
              </div>
              <p className="py-8 text-base font-normal">
                <span className="text-gray-600">
                  Already subscibed to Netflix?
                </span>{" "}
                <Link to="/SignIn">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
