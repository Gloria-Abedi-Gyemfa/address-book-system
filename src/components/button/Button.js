import React, { useState } from 'react'

const Button = () => {
  const [loader, setLoader] = useState(false)
  const hanleClick = () => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }
  return (
    <>
      <button type="submit" className="btn" onClick={hanleClick}>
        {loader ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          'submit'
        )}
      </button>
    </>
  )
}

export default Button
