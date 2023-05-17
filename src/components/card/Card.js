import React from 'react'
import cardStyles from './card.module.css'
import authStyles from '../services/authLayout.module.css'

const Card = ({title, children}) => {
  return (
    <>
      <div className={authStyles.Card}>
        <h1 className={cardStyles.heading}>{title}</h1>
        <div>{children}</div>
      </div>
    </>
  )
}

export default Card
