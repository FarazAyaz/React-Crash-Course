import React, { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";
import "./Pokemon.css";

const PokemonCard = () => {
    const [pokemon, setPokemon] = useState([]);
    const [search, setSearch] = useState("");
  useEffect(() => {
    const API = "https://pokeapi.co/api/v2/pokemon?limit=1000";
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
   const filterPokemon = pokemon.filter((curPokemon) => curPokemon.name.toLowerCase().includes(search.toLowerCase()))
  return  <div>
      <header>
        <h1> Lets Catch Pokémon</h1>
      </header>
      <div className="pokemon-search">
        <input
          type="text"
          placeholder="Search Pokémon"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="cards">
        {
            filterPokemon.map((curPokemon) => {
                return  <PokemonCards key={curPokemon.id} pokemondata = {curPokemon} />

            })
           
        }

      </ul>

  </div>;
};

export default PokemonCard;
