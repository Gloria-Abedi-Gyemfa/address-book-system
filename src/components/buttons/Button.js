import React from 'react'
import styles from './button.module.css'
import { ContactApi } from '../../services/api'

const Button = ({ text, size, variant, page }) => {
  const handleSubmit = () => {
    if (text === 'Cancel') {
    }
  }

  return (
    <button
      className={`${styles[size]} ${styles[variant]}`}
      onClick={handleSubmit}
    >
      {text}
    </button>
  )
}

export default Button
