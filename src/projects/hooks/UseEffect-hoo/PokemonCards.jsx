import React from 'react';

const PokemonCards = ({ pokemondata }) => {
  return (
    <li className='pokemon-card'>
      <figure>
        <img 
          src={pokemondata.sprites.other.dream_world.front_default} 
          alt={pokemondata.name} 
          className='pokemon-image'/>
      </figure>
      <h1 className='pokemon-name'>
        {pokemondata.name}
      </h1>
      <div className='pokemon-info pokemon-highlight' >
        <p>
          {pokemondata.types.map((curType)=> curType.type.name).join(",")}
        </p>
      </div>
       <div className="grid-three-cols">
            <p className="pokemon-info text-black">
              Height: <span> {pokemondata.height} </span>
            </p>
            <p className="pokemon-info text-black">
              Weight: <span> {pokemondata.weight}</span>
            </p>
            <p className="pokemon-info text-black">
              speed: <span>{pokemondata.stats[5].base_stat}</span>
            </p>
          </div>
    </li>
  );
};

export default PokemonCards;

