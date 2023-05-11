import React, { useState } from 'react'

const Button = ({variant, size, text}) => {
  const [loader, setLoader] = useState(false)
  const [disable, setDisable] = useState(true)
  const handleClick = () => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 3500)
  }
  return (
    <>
      <button type="submit"  onClick={handleClick} className={`${variant} ${size}`} >
        {loader ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          text
        )}
      </button>
    </>
  )
}

export default Button
