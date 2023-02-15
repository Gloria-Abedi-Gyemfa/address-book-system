import React from 'react';
import {BiHome, BiUser} from "react-icons/bi"
import {MdAddCircleOutline} from "react-icons/md";
import {TbSettings,TbLogout} from "react-icons/tb"
import {RiInformationLine} from "react-icons/ri"
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const style = { color: " #F67F20", width:"27px", height:"25px", backgroundColor:"#ffff" }
  return (
    <section className='sidebar'>

        <div><BiHome style={style} />
        <span>Home</span>
        </div>

        <div><BiUser style={style}/>
        <span>Profile</span>
        </div>

        <div><MdAddCircleOutline style={style}/>
        <span>Add address</span></div>

        <div><TbSettings style={style}/>
        <span>Settings</span></div>

        <div><RiInformationLine style={style}/>
        <span>About</span></div>

        <div><TbLogout style={style}/>
        <a href='/login'>
        <span>Logout</span>
        </a>
        </div>
        
        
    </section>
  )
}

export default Sidebar