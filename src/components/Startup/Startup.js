import React from "react";
import "../Startup/Startup.css";
import post from "../../Velio/postBox.jpg";
import { Link } from "react-router-dom";
const Startup = () => {
  return (
    <div className="startup ">
      <div className="setup shadow p-3 mb-5 bg-body rounded">
        <img src={post} alt="post box" className="mail-box" />
        <div className="login-wrapper">
          <p className="have-account">Already have an account?</p>
          <Link to="/login">
           <button className="login-button ">Login</button>
          </Link>
        </div>
        <div className="login-alt">
          <p>New user?</p>
          <Link to="/signup">
          <p className="signup-text">Sign up </p>
          </Link>
          
        </div>
      </div>
    </div>
  );
  
};

export default Startup;
