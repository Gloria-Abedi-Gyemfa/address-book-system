import React from 'react'
import authStyles from './services/authLayout.module.css'

const Card = ({title, children}) => {
  return (
    <>
      <div className={authStyles.Card}>
        <h1 className={authStyles.title}>{title}</h1>
        <div>{children}</div>
      </div>
    </>
  )
}

export default Card
