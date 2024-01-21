import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import MissionCard from './components/MissionCard';
import Missions from './components/Missions';

function App() {
  return (
    <div>
      <Header />
      <SolarSystem />
      <Missions />
      <Title
        headline="Andrew"
      />
      <p>Sistema Solar</p>
      <MissionCard
        name="1"
        year="2"
        country="3"
        destination="4"
      />
    </div>
  );
}

export default App;
