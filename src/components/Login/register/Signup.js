import React, { useState } from "react";
import "./Login.css";
import signup from "../../../images/signup.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import api from "../../../services/Api";
import { Cookies, useCookies } from "react-cookie";
import axios from "axios";

const SignUp = () => {
  // const [success, setSuccess] = useState(false)
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [cookie, setCookie] = useCookies()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [submissionError, setSubmissionError] = useState({
    error: false,
    msg: "",
  });

  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    setSuccess(true);
    e.preventDefault();
    try {
      const data = {
        email: form.email,
        password: form.password,
      };
      const result = await api().post("/auth/register", data);
      setSuccess(false);
      if (result.data.success) {
        setSubmissionError({ error: false, msg: "successful" });

        const { data, token } = result.data;

        Cookies.set("token", token);
        // Cookies.set("admin",JSON.stringify(data))

        setForm({ email: "", password: "" });

        navigate("/login");
      } else {
        setForm({ email: "", password: "" });
        setSubmissionError({ error: true, msg: result.data.error.msg });
      }
    } catch (error) {
      setSuccess(false);
      setSubmissionError({ error: true, msg: error.message });
    }
  };

  if (!success) {
    return <Navigate to="/login" />;
  }

  return (
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

            {submissionError.error && (
              <div className="alert alert-light text-center text-capitalize" role="alert">
                <strong className="text-danger font-itallic">{submissionError.msg}</strong>
              </div>
            )}
          </>
        )}
      </form>
    </div>
  );
};

export default SignUp;
