import React from 'react'

const Alert = ({ message, type }) => {
  return (
    <section className="alert">
      <h2 className={type === 'error' ? 'unsuccessful' : 'successful'}>
        {message}
      </h2>
    </section>
  )
}

export default Alert
