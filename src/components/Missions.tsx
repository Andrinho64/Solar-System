import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

function Missions() {
  return (
    <div data-testid="missions">
      <Title
        headline="Missões"
      />
      {missions.map((mission) => (
        <MissionCard
          key={ mission.name }
          name={ mission.name }
          year={ mission.year }
          country={ mission.country }
          destination={ mission.destination }
        />
      ))}
    </div>
  );
}

export default Missions;
