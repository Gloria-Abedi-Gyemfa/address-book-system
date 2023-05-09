import React, {useState} from 'react'

const TextInput = ({label}) => {
  const [characterCounter, setCharacterCounter] = useState('')

  
  return (
    <div className='text-input'>
      <label>{label}</label>
      <input 
      placeholder={label}
      name={label}
      type="text"
      onChange={e=>setCharacterCounter(e.target.value)}
      value={characterCounter}
      required
      maxLength='250'
      />
      <h4 className='danger'>{250 - characterCounter.length} characters left</h4>
    </div>
    
  )
}

export default TextInput
