import React, { useState } from "react";
import "./Login.css";
import login from "../../../images/login.jpg";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

import axios from "axios";
import api from "../../../services/Api";


const Login = () => {
 
  const [getEmail, setGetEmail] = useState("")
  const [getPassword, setGetPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: getEmail,
      password: getPassword
    }
    api().post("/auth/login", data)
    .then((res)=>{
      console.log(res)
    })

    // axios
    //   .post("https://address-book-system.onrender.com/api/v1/auth/login", {
    //     email: getEmail,
    //     password: getPassword
    //   })
      
  };
  // const validateEmail = (email) => {
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   if (!emailRegex.test(email)) {
  //     return "Invalid email address";
  //   }
  //   return "";
  // };
  


  return (
    <div>
      <div className="login">
        <Link to="/startup">
          <IoMdArrowRoundBack />
        </Link>

        <img src={login} className="login-image img-fluid" />

        <form onSubmit={handleSubmit}>
          <h2>LOGIN</h2>
          <input
            type="email"
            placeholder="E-mail "
            className="email form-control"
            onChange={(e) => setGetEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="password form-control"
            onChange={(e)=> setGetPassword(e.target.value)}
            required
          />
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
