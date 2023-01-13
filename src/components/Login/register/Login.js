import React from 'react';
import "./Login.css";
import login from "../../../images/login.jpg"
import { Link } from 'react-router-dom';
import {IoMdArrowRoundBack} from "react-icons/io"

class Login extends React.Component {
  constructor (props)
  {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
}

handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
}
render(){
  return (
    <div>
      
    <div className='login'>
      <Link to='/startup'><IoMdArrowRoundBack/></Link>
    
      <img src={login} className='login-image'/>
      <form onSubmit={this.handleSubmit}>
        <h2>LOGIN</h2>
        <input type="email" placeholder='E-mail ' className='email form-control'
        onChange={this.handleChange}
        />
        <input type="password" placeholder='Password' className='password form-control'
        onChange={this.handleChange}
        />
        <button type='submit'>Login</button>
        {/* <Link to='/signup'>
        <p>signup</p>
        </Link> */}
      </form>
    </div>
    </div>
  )
}
}

export default Login