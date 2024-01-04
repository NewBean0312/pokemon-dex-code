import axios from "axios";
import { useEffect, useState } from "react";
import PokemonTypeData from "./PokemonTypeData";

export default function PokemonType({ id }) {
  const [pokemonTypeData, setPokemonTypeData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

      const types = await Promise.all(
        response.data.types.map(async (type) => {
          const typeResponse = await axios.get(type.type.url);
          const koreanTypeName = typeResponse.data.names.find(
            (name) => name.language.name === 'ko'
          ).name;
          return { ...type, type: { ...type.type, korean_name: koreanTypeName } };
        })
      );

      setPokemonTypeData({
        ...response.data,
        types,
      });
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div>{id}</div>
      <div>{}</div>
      <PokemonTypeData pokemon={pokemonTypeData} />
    </>
  );
}
