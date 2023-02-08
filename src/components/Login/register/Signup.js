import React, { useState } from "react";
import "./Login.css";
import signup from "../../../images/signup.jpg";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";
import Login from "./Login";
import api from "../../../services/Api";

const SignUp = () => {
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = (e) =>{
    e.preventDefault()
    const data ={
      email : email,
      password : password
    }
    api().post("/auth/register", data)
    .then(response => {
      console.log(response.data)
      setSuccess(response.data.success)
    })
    // .then(()=>{
    //   if(data.message === 
    //     "User created successfully"){
    //       <Login/>
    //     }
    //     else{
    //       console.log(data.message)
    //     }
    //   })
    .catch(e => {
      console.log(e);
    });
  }
  
  return (
    <div>
      {!success ? <div className="login">
        <Link to="/startup">
          <IoMdArrowRoundBack />
        </Link>

        <img src={signup} className="login-image" />
        <form onSubmit={handleSignup}>
          <h2>SignUp</h2>
          <input
            type="email"
            placeholder="E-mail... "
            className="email form-control"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password..."
            className="password form-control" maxLength="8"
            onChange={(e)=>setPassword(e.target.value)}
            required 
          />
          <button type="submit" >Create Account</button>

          <section className="alt">
            <p className="have-account">Already have an account?</p>
            <Link className="alt_register link-danger" to="/login">Login</Link>
          </section>
        </form>
      </div> : <Login/>}
    </div>
  );
};

export default SignUp;
