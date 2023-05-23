import React from 'react'
import style from './alert.module.css'


const Alert = ({ message, type }) => {
  return (
    <div className={style.alert}>
      <p className={type === 'error' ? style.unsuccessful : style.successful}>
        {message}
      </p>
    </div>
  )
}

export default Alert
