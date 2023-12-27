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

      const typesWithKoreanNames = await Promise.all(
        response.data.types.map(async (type) => {
          const typeResponse = await axios.get(type.type.url);
          const koreanTypeName = typeResponse.data.names.find(
            (name) => name.language.name === "ko"
          ).name;

          return {
            ...type,
            type: { ...type.type, korean_name: koreanTypeName },
          };
        })
      );

      const abilitiesWithKoreanNames = await Promise.all(
        response.data.abilities.map(async (ability) => {
          const abilityResponse = await axios.get(ability.ability.url);
          const koreanAbilityName = abilityResponse.data.names.find(
            (name) => name.language.name === "ko"
          ).name;

          return {
            ...ability,
            ability: { ...ability.ability, korean_name: koreanAbilityName },
          };
        })
      );

      const movesWithKoreanNames = await Promise.all(
        response.data.moves.map(async (move) => {
          const moveResponse = await axios.get(move.move.url);
          const koreanMoveName = moveResponse.data.names.find(
            (name) => name.language.name === "ko"
          ).name;
          return {
            ...move,
            move: { ...move.move, korean_name: koreanMoveName },
          };
        })
      );

      setPokemonData({
        ...response.data,
        korean_name: koreanName.name,
        types: typesWithKoreanNames,
        abilities: abilitiesWithKoreanNames,
        moves: movesWithKoreanNames,
      });
    };

    fetchData();
  }, [id]);

  return <PokemonDetail pokemon={pokemonData} />;
};

export default PokemonDetailsPage;
