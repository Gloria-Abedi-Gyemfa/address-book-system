import React, {useState} from 'react'

const TextInput = ({label, validationMessage}) => {
  const [characterCounter, setCharacterCounter] = useState('')

  
  return (
    <>
    <label>{label}</label>
      <div className='text-input'>
      <input 
      placeholder={label}
      name={label}
      type="text"
      onChange={e=>setCharacterCounter(e.target.value)}
      value={characterCounter}
      onFocus={e=>e.target.placeholder = ''}
      onBlur={e=>e.target.placeholder=`${label}`}
      minLength='5'
      required
      />
    </div>
    <span className='danger validationMessage'>{validationMessage}</span>
    </>
      
    
  )
}

export default TextInput
