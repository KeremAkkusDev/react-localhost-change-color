import { useEffect, useState } from 'react';
import './App.css';

import Palette from "./components/Palette"
import {init, subscribe } from "./socketApi"

function App() {
  const [color,setColor] = useState("#000")
  useEffect(()=>{
    init();
    subscribe(setColor);
  },[])

  return (
    <div style={{backgroundColor:color}} className="App">
      <Palette/>
    </div>
  );
}

export default App;
