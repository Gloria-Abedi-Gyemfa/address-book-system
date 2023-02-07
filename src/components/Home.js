import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AuthProvider from "../context/AuthProvider";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="body">
      <Sidebar />
      </div>
      
    </div>
  );
};

export default Home;
