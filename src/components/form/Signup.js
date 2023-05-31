import React, { useState, createContext } from 'react'
import Input from './Input'
import Button from '../button/Button'
import Api from '../services/api'
import authImg from '../assets/assets.module.css'

const Signup = () => {
    const [inputValue, setInputValue] = useState('')
    const handleSubmit = async e =>{
       e.preventDefault();
       const data = new FormData(e.target)
       try{
        const response = await Api.post('/register', Object.fromEntries(data.entries()))
            console.log(response)
               }catch(err){
        console.log(err)

       }
    }
  return (
    <>
      <div><img src={authImg}/></div>
      <form onSubmit={handleSubmit}>
        <Input label='Email' type='email' name='email' value={inputValue} setInputValue={e=>setInputValue( e.target.value)} placeholder='Enter your Email'/>
        <Input label='Password' type='password' name ='password' value={inputValue} setInputValue={e=>setInputValue( e.target.value)} placeholder='Enter your Password'/>
        <Input label='First Name' type='text' name ='firstName' value={inputValue} setInputValue={e=>setInputValue( e.target.value)} placeholder='Enter your First name'/>
        <Input label='Last Name' type='text' name = 'lastName' value={inputValue} setInputValue={e=>setInputValue( e.target.value)} placeholder='Enter your last name'/>
        <Button text='Signup' variant='primary' size='large'/>
    </form>
    </>
    
  )
}

export default Signup