import React from 'react';
import {BiHome, BiUser} from "react-icons/bi"
import {MdAddCircleOutline} from "react-icons/md";
import {TbSettings,TbLogout} from "react-icons/tb"
import {RiInformationLine} from "react-icons/ri"

const Sidebar = () => {
    const style = { color: " #F67F20", width:"27px", height:"25px" }
  return (
    <div className='side-bar'>

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

        <div><TbLogout style={style}/><span>Logout</span></div>
        
    </div>
  )
}

export default Sidebar