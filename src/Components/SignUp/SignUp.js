import React from "react";
import "./SignUp.css";
import { Link, NavLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="container2">
        <h1>Sign Up</h1>
        <p>Create Your Account</p>
        <form>
          <div className="inputDiv">
            <PersonIcon className="icon" />
            <input type="text" placeholder="User Name" required />
          </div>

          <div className="inputDiv">
            <EmailIcon className="icon" />
            <input type="email" placeholder="Email" required />
          </div>

          <div className="inputDiv">
            <PasswordIcon className="icon" />
            <input type="password" placeholder="Password" required />
          </div>

          <div className="inputDiv">
            <PasswordIcon className="icon" />
            <input type="password" placeholder="Confirm Password" required />
          </div>

          <Link className="btn-link" to="/dashboard">
            <button className="btnSignUp">Sign Up</button>
          </Link>
          <div>Or</div>
          <button className="btnSignIn">Sign In With Google</button>
        </form>
        <p>
          Already have an account?
          <NavLink className="navlink" to="/">
            <span>Login</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
