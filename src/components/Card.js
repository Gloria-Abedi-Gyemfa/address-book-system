import React from 'react'

const Card = ({title, children}) => {
  return (
    <>
      <div className="card">
        <h1 className="heading">{title}</h1>
        <section>{children}</section>
      </div>
    </>
  )
}

export default Card
