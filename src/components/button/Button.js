import React from 'react'

const Button = ({variant, size, text, loader, handleSubmit}) => {
  
  return (
    <>
      <button type="submit"  onClick={handleSubmit} className={`${variant} ${size}`} >
        {loader ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <>{text}</>
        )}
      </button>
    </>
  )
}

export default Button
