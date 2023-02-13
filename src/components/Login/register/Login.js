import React, { useState } from "react";
import "./Login.css";
import login from "../../../images/login.jpg";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

import axios from "axios";
import api from "../../../services/Api";
// import Cookies from "js-cookie";

const Login = () => {
  // const [getEmail, setGetEmail] = useState("")
  // const [getPassword, setGetPassword] = useState("")
  const [accessToken, setAccessToken] = useState();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleEmail = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  const handlePassword = (e) => {
    setValues({...values, password: e.target.value});
  };
  const [submitted, setSubmitted] = useState(false)

  const [valid, setValid] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: handleEmail,
      password: handlePassword
    };
    api().post("/auth/login", data)
      .then((res) => {
        console.log(res);
      });
    if (values.email && values.password) {
      setValid(true)
    }
    setSubmitted(true)
    
  };
  // let setting = browser.cookies.set(
  //   {}               // object
  // )

  return (
    <div>
      <div className="login">
        <Link to="/startup">
          <IoMdArrowRoundBack />
        </Link>

        <img src={login} className="login-image img-fluid" alt="login-vector" />

        <form onSubmit={handleSubmit}>

          {submitted && valid? <div className="success-message">Success!</div> : null}
          <h2>LOGIN</h2>
          <input
            value={values.email}
            type="email"
            placeholder="E-mail... "
            className="email form-control"
            onChange={handleEmail}
            
          />
          {submitted && !values.email ? <span className="validation">Please type your email</span> : null}
          <input
            value={values.password}
            type="password"
            placeholder="Password..."
            className="password form-control"
            onChange={handlePassword}
            
          />
          {submitted && !values.password ? <span className="validation">Enter your Password</span> : null}
          <button type="submit">Login</button>

          <div className="alt">
            <p>Don't have an account?</p>

            <Link className="alt_register link-danger" to="/signup">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
