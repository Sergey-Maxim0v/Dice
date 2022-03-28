import React, {useState} from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Set from "./components/Set";
import Dice from "./components/Dice";

import './styles/app.scss'


function App() {
  const [activePage, setActivePage] = useState('home')


  return (
      <div className='mainLayout'>
        <Navbar activePage={activePage} setActivePage={setActivePage}/>
        {activePage === 'home' && <Home/>}
        {activePage === 'set' && <Set/>}
        {activePage === 'dice' && <Dice/>}
        <Footer/>
      </div>
  );
}

export default App;
