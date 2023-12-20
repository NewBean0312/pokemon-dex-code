import axios from "axios";
import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import InfiniteScroll from "react-infinite-scroll-component";

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonPerPage = 76;
  const totalPokemon = 152;

  // 데이터 받아오기
  useEffect(() => {
    // api 가져오기
    const fetchData = async () => {
      const allPokemonData = [];
      for (
        let i =1;
        i < Math.min(currentPage * pokemonPerPage, totalPokemon);
        i++
      ) {
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
  }, [currentPage]);

  const fetchMoreData = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
      <InfiniteScroll
        dataLength={pokemonData.length}
        next={fetchMoreData}
        hasMore={currentPage * pokemonPerPage}
        loader={<h4>Loading...</h4>}
        endMessage={<p>All Pokémon have been loaded</p>}
      >
        <div className="flex justify-center w-screen bg-white">
          <ul className="flex flex-wrap justify-around mt-10 w-4/5 ">
            {pokemonData.map((pokemon) => (
              <PokemonList
                key={pokemon.id}
                imgSrc={pokemon.sprites.front_default}
                id={pokemon.id}
                pokemonName={pokemon.kor_name}
              />
            ))}
          </ul>
        </div>
      </InfiniteScroll>
  );
};

export default Pokedex;
