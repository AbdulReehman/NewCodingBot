import React, { useState } from "react";
import "./Login.css";
import FormLogo from "../../Assets/Images/Tribut-logo-1.svg";
import InfoImage from "../../Assets/Images/pngwing-1.svg";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  // const [test, setTest] = useState();

  const handleEmailChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    console.log("User: ", userName);
    console.log("Password: ", password);
    // setTest(userName);
  };
  return (
    <div className="login">
      {/* {test} */}
      <div className="formSection">
        <div className="container">
          <div className="formLogo">
            <img src={FormLogo} alt="logo" />
          </div>
          <h2>Login in To Your Account </h2>
          <form>
            <label htmlFor="email">Email or Username</label>
            <input
              type="text"
              id="email"
              required
              onChange={handleEmailChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              onChange={handlePasswordChange}
            />
            <a href="/">Forget your Password?</a>

            <NavLink to="dashboard">
              <button onClick={handleSignIn}>Log In </button>
            </NavLink>

            <NavLink to="signup">
              <a href="/">Sign up</a>
            </NavLink>
            {/* <div onClick={handleSignIn}>Sign innnnn</div> */}
          </form>
        </div>
      </div>

      <div className="infoSection">
        <div className="infoText">
          <p>
            Empower Your Vision:
            <br /> Log in to Create Your Custom Videos
          </p>
        </div>
        <div className="InfoImage">
          <img src={InfoImage} alt="Info" />
        </div>
      </div>
    </div>
  );
};

export default Login;
