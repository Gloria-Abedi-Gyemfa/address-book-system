import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Recent from "./Recent";
import Contacts from "./Contacts";
import Edit from "./Edit";

const Home = () => {
  return (
    <section className="home-page">
      <header>
      <Navbar />
      </header>
      
      <body className="body  row g-3">
      <Sidebar/>
      <section className="middle-col">
        <Recent/>
        <Contacts/>
      </section>
      <section className="last-col">
        <Edit/>
      </section>
      
      </body>
      
    </section>
  );
};

export default Home;
