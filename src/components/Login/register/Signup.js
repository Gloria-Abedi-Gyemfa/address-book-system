import React, { useState } from "react";
import "./Login.css";
import signup from "../../../images/signup.jpg";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import api from "../../../services/Api";
import { useCookies } from "react-cookie";

const SignUp = () => {
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cookie, setCookie] = useCookies()
  

  let navigate = useNavigate();
  const handleSignup = (e) =>{
    e.preventDefault()
    const data ={
      email : email,
      password : password
    }
    const result = api().post("/auth/register", data)
    
    
      if(result.data.success){
        // setSuccess ( navigate("/login"))
        navigate("/login")
         }
        else{
          // setSuccess = navigate("/signup")
  
        }
      console.log(result.data)
     
  
     
    
    .catch(e => {
      console.error(e);
    });
  }
  
  return (
    <div>
      { !success ?
       <div className="login">
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
      </div> : null}
    </div>
  );
};

export default SignUp;
