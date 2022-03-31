import React, {useState} from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Set from "./components/Set";
import Dice from "./components/Dice";

import './styles/app.scss'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [diceArray, setDiceArray] = useState([])

  return (
      <div className='mainLayout'>
        <Navbar activePage={activePage} setActivePage={setActivePage}/>
        {activePage === 'home' &&
            <Home diceArray={diceArray} setDiceArray={setDiceArray} setActivePage={setActivePage}/>}
        {activePage === 'set' &&
            <Set setActivePage={setActivePage} diceArray={diceArray} setDiceArray={setDiceArray}/>}
        {activePage === 'dice' &&
            <Dice diceArray={diceArray}/>}
        <Footer/>
      </div>
  );
}

export default App;
