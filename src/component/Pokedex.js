import axios, { all } from "axios";
import { useEffect, useState } from "react";

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([]);

  // 데이터 받아오기
  useEffect(() => {
    // api 가져오기
    const fetchData = async () => {
      const allPokemonData = [];
      for (let i = 1; i < 151; i++) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );
        const speciesReponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${i}`
        );
        const korName = speciesReponse.data.names.find(
          (name) => name.language.name === "ko"
        );
        allPokemonData.push({ ...response.data, kor_name: korName.name });
      }
      setPokemonData(allPokemonData);
    };

    fetchData();
  }, []);

  const renderPokemonList = () => {
    console.log(pokemonData);
    return pokemonData.map((pokemon) => (
      <div key={pokemon.id}>
        <img src={pokemon.sprites.front_default} alt={pokemon.kor_name} />
        <p>{pokemon.kor_name}</p>
        <p>ID : {pokemon.id}</p>
      </div>
    ));
  };

  return <div>{renderPokemonList()}</div>;
};

export default Pokedex;
