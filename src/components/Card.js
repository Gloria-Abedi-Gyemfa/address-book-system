import React from 'react'

const Card = props => {
  return (
    <>
      <div className="card">
        <h1 className="heading">{props.title}</h1>
        <section>{props.children}</section>
      </div>
    </>
  )
}

export default Card
