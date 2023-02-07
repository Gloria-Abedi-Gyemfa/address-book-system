import React from "react";
import { BiMenu, BiSearchAlt, BiEditAlt } from "react-icons/bi";
import { MdOutlineAdd, MdQrCode2, MdOutlineIosShare } from "react-icons/md";



const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Velio</h1>
      <div className="searchbar" >
      
      <input placeholder="search for contacts" className="search-input"/>
      <BiSearchAlt/>
      </div>
      <div className="add">Add Contact</div>
    </nav>
  );
  
};

export default Navbar;
