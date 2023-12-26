import { Link } from "react-router-dom";

export default function PokemonList({
  id,
  imgSrc,
  pokemonName,
}) {
  return (
    <>
      <li className="w-52 h-60 mt-6 mb-2 border-gray-900 border-2">
        <div className="grid flex-col" key={id}>
          <Link to={`/pokemon/${id}`} className="grid">
            <img
              className="w-4/5 justify-self-center"
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
