import React from 'react';
import './FecthingData.css';

const FecthingData = () => {
 
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching data:", error));

}
  return (
   function PokemonCard({ pokemon }) {
  return (
    <div>
      <section className="container">
        <header>
          <h1>Let's Catch Pokémon</h1>
        </header>
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img
                src={pokemon?.sprites?.other?.dream_world?.front_default}
                alt={pokemon?.name}
                className="pokemon-image"
              />
            </figure>
            <h1>{pokemon?.name}</h1>
          </li>
        </ul>
      </section>
    </div>
  );
}
)

export default FecthingData
