import React from 'react'
import inputStyles from './Input.module.css'

const TextInput = ({label, setName, name}) => {
  
  return (
    <>
    <label className={inputStyles.label}>{label}</label>
      <div className={inputStyles.textInput}>
      <input 
      placeholder={label}
      name={label}
      type="text"
      onChange={e=>setName(e.target.value)}
      value={name}
      onFocus={e=>e.target.placeholder = ''}
      onBlur={e=>e.target.placeholder=`${label}`}
      minLength='5'
      className={inputStyles.input}
      required
      />
      <span className={inputStyles.alert}>Enter valid name</span>
    </div>
    </>
      
    
  )
}

export default TextInput
