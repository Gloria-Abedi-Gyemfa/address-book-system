import React, { useState } from "react";
import "./Login.css";
import signup from "../../../images/signup.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import api from "../../../services/Api";
// import { Cookies, useCookies } from "react-cookie";
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap"

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setSuccess(true);
    
    try {
      const data = {
        email: form.email,
        password: form.password,
      };
      const result = await api().post("/auth/register", data);
      console.log(result)

      if (result.data.success) {
        setForm({ email: "", password: "" });

        navigate("/login");
        setSuccess(false)
      } else {
        setForm({ email: "", password: "" });
        
      }
      setSuccess(false);
    } catch (error) {
      setSuccess(false);
      
    }
  };

 

  return (
    <div className="login">
      <img src={signup} className="login-image" />
      <form onSubmit={handleSignup}>
        <h2>SignUp</h2>
        <input
          type="email"
          placeholder="E-mail... "
          className="email form-control"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password..."
          className="password form-control"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        {success ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status"></div>
          </div>
        ) : (
          <>
            <button type="submit">Create Account</button>

            <section className="alt">
              <p className="have-account">Already have an account?</p>
              <Link className="alt_register link-danger" to="/login">
                Login
              </Link>
            </section>

           
          </>
        )}
      </form>
    </div>
  );
};

export default SignUp;
