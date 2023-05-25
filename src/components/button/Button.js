import React from 'react'
import styles from './button.module.css'
import ButtonLoader from '../loader/ButtonLoader'

const Button = ({variant, size, text, loader, handleSubmit}) => {
  
  return (
    <>
      <button type="submit"  onClick={handleSubmit} className={`${styles[variant]} ${styles[size]}`}  disabled={loader}>
        {loader ? (
          <ButtonLoader/>
        ) : (
          <>{text}</>
        )}
      </button>
    </>
  )
}

export default Button
