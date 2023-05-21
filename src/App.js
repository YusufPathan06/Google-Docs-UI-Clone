import React from "react";
import Navbar from "./components/navbar";
import './App.css'
import Display from "./components/Display.jsx";
import SideBar from "./components/sidebar/SideBar";

const App = () => {
  return (
    <>
      <section>
        <Navbar />
        <Display />
        <SideBar/>
      </section>
    </>
  );
};

export default App;
