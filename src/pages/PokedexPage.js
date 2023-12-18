import axios from "axios";
import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([]);

  // 데이터 받아오기
  useEffect(() => {
    // api 가져오기
    const fetchData = async () => {
      const allPokemonData = [];
      for (let i = 1; i < 152; i++) {
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

  return (
    <>
      <div className="flex justify-center w-screen bg-white">
        <ul className="flex flex-wrap justify-around w-4/5 bg-red-500 mt-10">
          {pokemonData.map((pokemon) => (
            <PokemonList
              key={pokemon.id}
              imgSrc={pokemon.sprites.front_default}
              pokemonName={pokemon.kor_name}
              id={pokemon.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pokedex;
