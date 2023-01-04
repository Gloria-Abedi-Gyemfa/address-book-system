import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BiMenu,BiSearchAlt, BiEditAlt} from "react-icons/bi";
import {MdOutlineAdd,MdQrCode2, MdOutlineIosShare} from "react-icons/md";
import {RiDeleteBin5Line} from "react-icons/ri";
import {FiSettings} from "react-icons/fi"
 



const Navbar = () => {

  return (
    <div className='navbar'>
      <section className='section-1'>
        <BiMenu className='menu-icon'/>
        <h1>velio</h1>
        <img className='user-image' alt='user-image' src='#'/>
      </section>

      <section className='input-group mb-3 search-bar'>
          <span class="input-group-text" id="basic-addon1"><BiSearchAlt/></span>
          <input type="text" class="form-control" placeholder="search for address" aria-label="Username" aria-describedby="basic-addon1"/>
        </section>
      
      <section>
        <div>
          <div className='Add-button '>
            <MdOutlineAdd className='icons '/>
          </div>
          <p className='funct-text'>Add</p>
        </div>

        <div>
          <div className='edit-button'>
            <BiEditAlt className='icons'/>
          </div>
          <p className='funct-text '>Edit</p>
        </div>

        <div>
          <div className='delete-button'>
            <RiDeleteBin5Line className='icons'/>
          </div>
          <p className='funct-text'> Delete</p>
        </div>

        <div>
          <div className='scan-button'>
            <MdQrCode2 className=' icons' />
          </div>
          <p className='funct-text'>Scan QR<br/>code</p>
        </div>

        <div>
          <div className='share-button'>
          <MdOutlineIosShare className='icons'/>
          </div>
          <p className='funct-text'>Share</p>
        </div>
        <div>
          <div className='settings-button'>
            <FiSettings className='icons'/>
          </div>
          <p className='funct-text'>Settings</p>
        </div>
      </section>


      
  
    </div>
  )
}

export default Navbar