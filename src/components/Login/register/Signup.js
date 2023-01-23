import React, { useState } from "react";
import "./Login.css";
import signup from "../../../images/signup.jpg";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const getEmail = (e) => {
    setEmail(e.target.value)
  }
  const getPassword = (e) => {
    setPassword(e.target.value)
  }
  const sendData = (e) => {
    e.preventDefault()
    axios.post('https://address-book-system.onrender.com/api/v1/auth/register',
    {
      email: email,
      password: password
    })
    // console.log(email)
    // console.log(password)
  }

  return (
    <div>
      <div className="login">
        <Link to="/startup">
          <IoMdArrowRoundBack />
        </Link>

        <img src={signup} className="login-image" />
        <form>
          <h2>SignUp</h2>
          <input
            type="email"
            placeholder="E-mail "
            className="email form-control"
            onChange={getEmail}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="password form-control" maxLength="8"
            onChange={getPassword}
            required 
          />
          <button type="submit" onClick={sendData}>Create Account</button>

          <section className="alt">
            <p>Already have an account?</p>
            <Link className="alt_register link-danger">Login</Link>
          </section>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
