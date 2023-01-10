import React from 'react';
import "./Login.css";
import login from "../../../images/login.jpg"
import { Link } from 'react-router-dom';
import {IoMdArrowRoundBack} from "react-icons/io"

const Login = () => {
  return (
    <div>
      
    <div className='login'>
      <Link to='/startup'><IoMdArrowRoundBack/></Link>
    
      <img src={login} className='login-image'/>
      <form>
        <h2>LOGIN</h2>
        <input placeholder='E-mail ' className='email form-control'/>
        <input placeholder='Password' className='password form-control'/>
        <button>Login</button>
        {/* <Link to='/signup'>
        <p>signup</p>
        </Link> */}
      </form>
    </div>
    </div>
  )
}

export default Login