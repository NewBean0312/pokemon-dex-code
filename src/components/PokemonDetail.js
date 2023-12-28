import React from "react";

const PokemonDetail = ({ pokemon }) => {
  if (!pokemon) {
    return <p>Loading...</p>;
  }

  // 속성
  const renderTypes = () => {
    return pokemon.types.map((type, index) => (
      <span key={type.type.name}>
        {type.type.korean_name}
        {index < pokemon.types.length - 1 ? "," : ""}
      </span>
    ));
  };

  // 특성
  const renderAbilities = () => {
    return pokemon.abilities.map((ability, index) => (
      <span key={ability.ability.name}>
        {ability.ability.korean_name}
        {index < pokemon.types.length - 1 ? "," : ""}
      </span>
    ));
  };

  // 기술
  const renderMoves = () => {
    return pokemon.moves.map((move, index) => (
      <li className={index % 2 == 0 ? "bg-yellow-200" : "bg-yellow-100"} key={move.move.name}>{move.move.korean_name}</li>
    ));
  };

  return (
    <div className="flex justify-center w-screen h-full bg-white mr-auto ml-auto">
      <div className="flex w-3/4 h-3/4 mt-10 p-4 border-4 rounded-xl border-blue-600">
        <div className="w-1/3">
          <img
            className="w-3/4 mt-10 ml-auto mr-auto rounded-xl border-4 border-gray-900"
            src={pokemon.sprites.front_default}
            alt={pokemon.korean_name}
          />
        </div>
        <div className="w-2/3 pt-10">
          <p className="text-2xl text-gray-600"> #{pokemon.id}</p>
          <h2 className="pt-2 text-5xl text-black">{pokemon.korean_name}</h2>
          <p className="pt-2 text-xl">속성: {renderTypes()}</p>
          <p className="pt-2 text-xl">특성: {renderAbilities()}</p>
          <p className="pt-2 text-xl">키: {pokemon.height / 10}m</p>
          <p className="pt-2 text-xl">무게: {pokemon.weight / 10}kg</p>
          <p className="pt-2 text-xl">기술:</p>
          <ul className="overflow-y-scroll w-64 h-64 text-lg">{renderMoves()}</ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
