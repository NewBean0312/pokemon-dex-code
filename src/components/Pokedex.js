import axios from "axios";
import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonPerPage = 76;
  const totalPokemon = 1000;

  // 데이터 받아오기
  useEffect(() => {
    // api 가져오기
    const fetchData = async () => {
      const allPokemonData = [];
      for (
        let i = 1;
        i <= Math.min(currentPage * pokemonPerPage, totalPokemon);
        i++
      ) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );
        const speciesResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${i}`
        );
        const koreanName = speciesResponse.data.names.find(
          (name) => name.language.name === "ko"
        );
        allPokemonData.push({ ...response.data, korean_name: koreanName.name });
      }
      setPokemonData(allPokemonData);
    };

    fetchData();
  }, [currentPage]);

  const fetchMoreData = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <InfiniteScroll
      dataLength={pokemonData.length}
      next={fetchMoreData}
      hasMore={currentPage * pokemonPerPage}
      loader={<div className="pt-2 text-3xl">포켓몬 불러오는중...</div>}
      endMessage={<p>All Pokémon have been loaded</p>}
    >
      <div className="flex justify-center w-screen bg-white">
        <ul className="flex flex-wrap justify-around mt-10 w-4/5 ">
          {pokemonData.map((pokemon) => (
            <PokemonList
              id={pokemon.id}
              imgSrc={pokemon.sprites.front_default}
              pokemonName={pokemon.korean_name}
            />
          ))}
        </ul>
      </div>
    </InfiniteScroll>
  );
}
