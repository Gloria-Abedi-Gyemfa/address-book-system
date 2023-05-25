import React from 'react'
import cardStyles from './card.module.css'

const Card = ({title, children}) => {
  return (
      <div>
        <h1 className={cardStyles.heading}>{title}</h1>
        <div>{children}</div>
      </div>
  )
}

export default Card
