import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonDetail from "../components/PokemonDetail";

const PokemonDetailsPage = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const speciesResponse = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      const koreanName = speciesResponse.data.names.find(
        (name) => name.language.name === "ko"
      );
      setPokemonData({ ...response.data, korean_name: koreanName.name });
    };

    fetchData();
  }, [id]);

  return <PokemonDetail pokemon={pokemonData} />;
};

export default PokemonDetailsPage;
