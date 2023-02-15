import React, { useState } from "react";
import "./Login.css";
import login from "../../../images/login.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import api from "../../../services/Api";
import Api from "../../../services/Api";

const Login = () => {
 
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email: form.email,
        password: form.password
      }
      const response = await api().post("/auth/login", data);

      if(response.data.status === "success"){
        setForm({email: "", password: ""});
        navigate("/")
      }else{
        setForm({email: "", password: ""});
      }

      
    } catch (error) {
      console.error(Response)
      
    }
      
  };


  return (
    <div>
      <div className="login">
        <img src={login} className="login-image" />

        <form onSubmit={handleSubmit}>

          {submitted && valid? <div className="success-message">Success!</div> : null}
          <h2>LOGIN</h2>
          <input
            value={values.email}
            type="email"
            placeholder="E-mail... "
            className="email form-control"
            value={form.email}
            onChange={(e) =>{ setForm({...form, email:e.target.value})}}
            required
          />
          {submitted && !values.email ? <span className="validation">Please type your email</span> : null}
          <input
            value={values.password}
            type="password"
            placeholder="Password..."
            className="password form-control"
            value={form.password}
            onChange={(e)=> setForm({...form, password: e.target.value})}
            required
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
