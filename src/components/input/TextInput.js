import React from 'react'

const TextInput = ({label, setName, name}) => {
  
  return (
    <>
    <label>{label}</label>
      <div className='text-input'>
      <input 
      placeholder={label}
      name={label}
      type="text"
      onChange={e=>setName(e.target.value)}
      value={name}
      onFocus={e=>e.target.placeholder = ''}
      onBlur={e=>e.target.placeholder=`${label}`}
      minLength='5'
      required
      />
      <span>Enter valid name</span>
    </div>
    </>
      
    
  )
}

export default TextInput
