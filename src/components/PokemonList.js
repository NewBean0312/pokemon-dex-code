import { Link } from "react-router-dom";
import PokemonType from "./PokemonType";

export default function PokemonList({ id, imgSrc, pokemonName }) {
  
  return (
    <>
      <li className="w-full sm:w-2/5 lg:w-1/4 xl:w-1/6 h-60 mt-6 mr-6 mb-2 border-red-600 border-4 rounded-xl">
        <div className="grid flex-col" key={id}>
          <Link to={`/pokemon/${id}`} className="grid">
            <PokemonType id={id} />
            <img
              className="w-1/3 sm:w-1/2 lg:w-2/3 justify-self-center"
              src={imgSrc}
              alt={pokemonName}
            />
            <p className="ml-2 text-gray-500">No.{id}</p>
            <p className="mt-2 ml-2 text-xl text-[color:var(--mui-color-text-main)]">
              {pokemonName}
            </p>
          </Link>
        </div>
      </li>
    </>
  );
}
