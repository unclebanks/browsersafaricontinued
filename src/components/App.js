import { useEffect } from 'react';
import '../App.css';
import { Banner } from './Banner';
import { ButtonSelector } from './ButtonSelector';
import { PlayerStats } from './PlayerStats';
import { Zones } from './Zones';
import { Shop } from './Shop';
import { Pokedex } from './Pokedex';

function App() {


  useEffect(() => {
    // Update the document title using the browser API
    checkStart();
  });
  const checkStart = () => {
    console.log("Just a reminder for stuff here");
  }

  return (
    <div className="App">
      <Banner />
      <Zones />
      <PlayerStats />
      <ButtonSelector />
      <Shop />
      <Pokedex />
    </div>
  );
}

export default App;
