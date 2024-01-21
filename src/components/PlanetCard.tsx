import React from 'react';

type TitleProps = {
  planetName: string;
  planetImage: string;
};

function PlanetCard({ planetName, planetImage }: TitleProps) {
  return (
    <div data-testid="planet-card">
      <p data-testid="planet-name">{`${planetName}`}</p>
      ;
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
    </div>
  );
}

export default PlanetCard;
