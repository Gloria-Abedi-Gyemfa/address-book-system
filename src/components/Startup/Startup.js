import React from "react";
import "../Startup/Startup.css";
import post from "../../Velio/postBox.jpg";
const Startup = () => {
  return (
    <div className="startup">
      <div className="setup">
        <img src={post} alt="post box" className="post-box" />
        <div className="login-wrapper">
          <p className="have-account">Already have an account?</p>
          <button className="login-button">Login</button>
        </div>
        <div className="login-alt">
          <p>New user?</p>
          <p className="signup-text">Sign up </p>
        </div>
      </div>
    </div>
  );
  let loginPage = document.querySelector("login-button");
  function getLoginPage() {
    loginPage.innerHTML = "new page";
  }
  loginPage.onclick = getLoginPage;
};

export default Startup;
