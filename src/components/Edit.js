import React from 'react'
import { BiEditAlt, BiSearchAlt } from 'react-icons/bi'


const Edit = () => {
  return (
    <form className='edit-page'>
       <div className='edit-title'>
        <h3 className='edit'>Edit</h3>
        <BiEditAlt className='edit-icon' />
       </div>
       <div className='search-bar'>
        <input placeholder='Find contact to edit'/>
        <span><BiSearchAlt/></span>
       </div>
        <input placeholder='Name' className='name in'/>
        <input placeholder='Phone' className='phone in'/>
        <input placeholder='Email' className='email in'/>
        <input placeholder='Company' className='company in'/>
        <input placeholder='Job Title' className='job'/>
        
        <div className='buttons'>
            <button>Cancel</button>
            <button>Save</button>
        </div>

    </form>
    
  )
}

export default Edit