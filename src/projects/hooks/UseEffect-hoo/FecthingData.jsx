import React, { useState, useEffect } from "react";
import "./Pokemon.css";

const FetchingPokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // boolean used

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const api = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
        const data = await api.json();
        setPokemon(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h1>Error fetching Pokémon data.</h1>
      </div>
    );
  }

  return (
    <div>
      <section className="container">
        <header>
          <h1>Let's Catch Pokémon</h1>
        </header>
        <ul className="card-demo">
          {pokemon && (
            <li className="pokemon-card">
              <figure>
                <img
                  src={pokemon?.sprites?.other?.dream_world?.front_default}
                  alt={pokemon?.name}
                  className="pokemon-image"
                />
              </figure>
              <h1>{pokemon.name}</h1>
               <div className="grid-three-cols">
            <p className="pokemon-info">
              Height: <span> {pokemon.height} </span>
            </p>
            <p className="pokemon-info">
              Weight: <span> {pokemon.weight}</span>
            </p>
            <p className="pokemon-info">
              speed: <span>{pokemon.stats[5].base_stat}</span>
            </p>
          </div>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
};

export default FetchingPokemon;
