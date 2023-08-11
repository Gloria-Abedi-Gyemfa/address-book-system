import React from 'react'
import styles from './button.module.css'

const Button = ({text, size, variant}) => {
  return (
    <button className={`${styles[size]} ${styles[variant]}`}>{text}</button>
  )
}

export default Button