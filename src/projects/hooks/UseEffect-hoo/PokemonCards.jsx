import React from 'react';

const PokemonCards = ({ pokemondata }) => {
  return (
    <li className='pokemon-card'>
      <figure>
        <img 
          src={pokemondata.sprites.other.dream_world.front_default} 
          alt={pokemondata.name} 
        />
      </figure>
    </li>
  );
};

export default PokemonCards;

