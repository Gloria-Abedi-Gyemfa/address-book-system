import React, {useState} from 'react'

const TextInput = () => {
  const [characterCounter, setCharacterCounter] = useState('')

  
  return (
    <section className='text-input'>
      <h4>Add Comment</h4>
      <textarea placeholder="Type your comment here" 
      onChange={e=>setCharacterCounter(e.target.value)}
      value={characterCounter}
      required
      maxLength='250'
      ></textarea>
      <h4 className='danger'>{250 - characterCounter.length} characters left</h4>
    </section>
    
  )
}

export default TextInput
