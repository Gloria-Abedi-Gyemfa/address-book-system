import React from 'react'
import inputStyles from './Input.module.css'

const TextInput = ({label, setName, name}) => {
  
  return (
    <>
      <div className={inputStyles.inputWrapper}>
        <label className={inputStyles.label}>{label}</label>
      <input 
      placeholder={label}
      name={label}
      type="text"
      onChange={e=>setName(e.target.value)}
      value={name}
      onFocus={e=>e.target.placeholder = ''}
      onBlur={e=>e.target.placeholder=`${label}`}
      maxLength='20'
      className={inputStyles.input}
      required
      />
      <div className={inputStyles.alert}>Enter valid name</div>
    </div>
    </>
      
    
  )
}

export default TextInput
