import React from 'react'
import velio from '../../../Velio/sept25-300x225.jpg'

const Startup = () => {
  return (
    <div className='startup'>
        <div className='image-wrapper'>
            <img src={velio} alt='post box'/>
           <p className='welcome-message'>Welcome to velio ...an addressing solution</p>
        </div>

        <div className='login-options'>
            <div className='login-wrapper'>
                <p className='have-account'>Already have an account?</p>
                <button className='login-button'>Sign in/ Login</button>
            </div>

            <div>
                <p>New user?</p>
                <p>Sign up for free</p>
            </div>

        </div>
        
    </div>
  )
}

export default Startup