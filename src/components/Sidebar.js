import React from 'react';
import {BsThreeDotsVertical} from "react-icons/bs"
import {BiHome, BiUser} from "react-icons/bi"
import {GrAddCircle, GrCircleInformation,GrLogout} from "react-icons/gr";
import {TbSettings} from "react-icons/tb"

const Sidebar = () => {
    const style = { color: " #F67F20", width:"27px", height:"25px" }
  return (
    <div className='side-bar'>
        <div><BsThreeDotsVertical style={style}/>
        <span>velio</span>
        </div>

        <div><BiHome style={style} />
        <span>Home</span>
        </div>

        <div><BiUser style={style}/>
        <span>Profile</span>
        </div>

        <div><GrAddCircle style={style}/>
        <span>Add address</span></div>

        <div><TbSettings style={style}/>
        <span>Settings</span></div>

        <div><GrCircleInformation style={style}/>
        <span>About</span></div>

        <div><GrLogout style={style}/><span>Logout</span></div>
        
    </div>
  )
}

export default Sidebar