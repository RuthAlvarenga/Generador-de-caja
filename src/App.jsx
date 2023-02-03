import './App.css';
import ListaDeCajas from './Components/ListaDeCajas';
import React, { useState } from 'react'
import ColorBox from './Components/ColorBox';

function App() {

  const [caja, setCaja] = useState([]);

  return (
    <div className="App">
      <ListaDeCajas caja={caja} setCaja={setCaja}/>
      <ColorBox data={caja}/>
    </div>
  );
}

export default App;
