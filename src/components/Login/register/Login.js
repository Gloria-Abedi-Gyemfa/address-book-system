import React, { useState } from "react";
import "./Login.css";
import login from "../../../images/login.jpg";
import { Link, Navigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

import axios from "axios";
import api from "../../../services/Api";
import Cookies from "js-cookie";



const Login = () => {
 
  const [getEmail, setGetEmail] = useState("")
  const [getPassword, setGetPassword] = useState("")
  const [accessToken, setAccessToken]= useState()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: getEmail,
      password: getPassword
    }
    
    const res = await api().post("/auth/login", data)
    console.log(res)
      
  };


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
            placeholder="E-mail... "
            className="email form-control"
            onChange={(e) => setGetEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password..."
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
