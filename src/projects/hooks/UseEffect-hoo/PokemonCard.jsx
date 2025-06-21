import React, { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";
import "./Pokemon.css";

const PokemonCard = () => {
    const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const API = "https://pokeapi.co/api/v2/pokemon?limit=100";
    const fetchPokemon = async () => {
      try {
        let res = await fetch(API);
        let data = await res.json();

        const pokemonlist = data.results.map(async (curPokemon) => {
          res = await fetch(curPokemon.url);
          data = await res.json();
          console.log(data);
          return data;
        });
        const DetailList = await Promise.all(pokemonlist);
        console.log(DetailList);
        setPokemon(DetailList);

      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemon();
  }, []);

  return  <div>
      <header>
        <h1> Lets Catch Pokémon</h1>
      </header>
      <ul className="cards">
        {
            pokemon.map((curPokemon) => {
                return  <PokemonCards key={curPokemon.id} pokemondata = {curPokemon} />

            })
           
        }

      </ul>

  </div>;
};

export default PokemonCard;
