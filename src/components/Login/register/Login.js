import React from 'react';
import "./Login.css";
import login from "../../../images/login.jpg"
import { Link } from 'react-router-dom';
import {IoMdArrowRoundBack} from "react-icons/io"
import { loginUrl } from '../../../DefaultValues';

class Login extends React.Component {
  constructor (props)
  {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
}

handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let config = {
      method: "post",
      url : `${loginUrl}`
    }

}


render(){
  return (
    <div>
      
    <div className='login'>
      <Link to='/startup'><IoMdArrowRoundBack/></Link>
    
      <img src={login} className='login-image img-fluid'/>
      <form onSubmit={this.handleSubmit}>
        <h2>LOGIN</h2>
        <input type="email" placeholder='E-mail ' className='email form-control'
        onChange={this.handleChange}
        required/>
        <input type="password" placeholder='Password' className='password form-control'
        onChange={this.handleChange}
        required/>
        <button type='submit'>Login</button>

        <div className='alt'>
        <p>Don't have an account?</p>

        <Link className='alt_register link-danger' to='/signup'>Register</Link>

        </div>
        
        
       
      </form>
    </div>
    </div>
  )
}
}

export default Login