import React from 'react'
import styles from './alert.module.css'
import {MdOutlineClose} from 'react-icons/md'

const Alert = ({text, type, setClose}) => {
  return (
    <div className={type==='error'? styles.error :   styles.success}>
      <p>{text}</p>
      <MdOutlineClose  className={type==='error'? styles.closeError :   styles.closeSuccess} onClick={()=>setClose(true)}/>
    </div>
  )
}

export default Alert