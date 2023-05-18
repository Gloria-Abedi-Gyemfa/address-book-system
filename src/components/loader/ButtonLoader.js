import React from 'react'
import loaderStyles from './loader.module.css'

const ButtonLoader = () => {
  return (
    <div className={loaderStyles.loaderCcontainer}>
        <div className={loaderStyles.loader}></div>
    </div>
  )
}

export default ButtonLoader