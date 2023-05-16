import React from 'react'
import style from './alert.module.css'


const Alert = ({ message, type }) => {
  return (
    <section className={style.alert}>
      <h2 className={type === 'error' ? style.unsuccessful : style.successful}>
        {message}
      </h2>
    </section>
  )
}

export default Alert
