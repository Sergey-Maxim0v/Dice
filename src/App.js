import React from "react";

import Navbar from "./components/Navbar";

import './styles/app.scss'
import Footer from "./components/Footer";

function App() {
  return (
      <div className='mainLayout'>
        <Navbar/>
        <a>start project</a>
        <Footer/>
      </div>
  );
}

export default App;
