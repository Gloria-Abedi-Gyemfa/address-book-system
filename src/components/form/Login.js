import React, { useState, createContext, useEffect } from 'react'
import Input from './Input'
import Button from '../button/Button'
import Api from '../services/api'
import authImg from '../assets/authImage.jpg'
import styles from './form.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
  const [inputValue, setInputValue] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault();
    useEffect(() => {
      const fetchData = async () => {
        const data = new FormData(e.target)
        try{
         const response = await Api.post('/register', Object.fromEntries(data.entries()))
             console.log(response)
                }catch(err){
         console.log(err)
  
        }
      }
      fetchData()
    }, [])
  }
  
    
  return (
    <div className={styles.mainForm}>
        <img src={authImg} className={styles.formImg}/>
        <form onSubmit={handleSubmit} className={styles.form}>
            <Input label='Email' type='email' name='email' value={inputValue} setInputValue={e=>setInputValue( e.target.value)} placeholder='Enter your Email' isFirst={true}/>
            <Input label='Password' type='password' name ='password' value={inputValue} setInputValue={e=>setInputValue( e.target.value)} placeholder='Enter your Password' isFirst={false}/>
            <Button text='Login' variant='primary' size='large'/>
            <div>Don't have accout? <Link to='/signup'>Signup</Link></div>
        </form>
    </div>
  )
}

export default Login