export default function PokemonList({ key, imgSrc, pokemonName, id }) {
  return (
    <>
      <li className="w-52 h-60 mt-6 mb-2 bg-white">
        <div className="grid flex-col" key={key} >
          <img className="w-3/4 justify-self-center" src={imgSrc} alt={pokemonName} />
          <p className="text-[color:var(--mui-color-text-main)]">{pokemonName}</p>
          <p className="text-[color:var(--mui-color-text-main)]">ID : {id}</p>
        </div>
      </li>
    </>
  );
}
