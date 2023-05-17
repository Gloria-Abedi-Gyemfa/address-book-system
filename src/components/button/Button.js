import React from 'react'
import styles from './button.module.css'

const Button = ({variant, size, text, loader, handleSubmit}) => {
  
  return (
    <>
      <button type="submit"  onClick={handleSubmit} className={`${styles[variant]} ${styles[size]}`} >
        {loader ? (
          <div className={styles.loaderCcontainer}>
            <div className={styles.loader}></div>
          </div>
        ) : (
          <>{text}</>
        )}
      </button>
    </>
  )
}

export default Button
