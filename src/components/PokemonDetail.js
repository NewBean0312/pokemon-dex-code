import React from "react";

const PokemonDetail = ({ pokemon }) => {
  if (!pokemon) {
    return <p>Loading...</p>;
  }

  const renderTypes = () => {
    return pokemon.types.map((type, index) => (
      <span key={type.type.name}>
        {type.type.korean_name}
        {index < pokemon.types.length - 1 ? "," : ""}
      </span>
    ));
  };


  const renderAbilities = () => {
    return pokemon.abilities.map((ability, index) => (
      <span key={ability.ability.name}>
        {ability.ability.korean_name}
        {index < pokemon.types.length - 1 ? "," : ""}
      </span>
    ));
  };

  const renderMoves = () => {
    return pokemon.moves.map((move) => (
      <li key={move.move.name}>{move.move.korean_name}</li>
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
        <div className="w-2/3 pt-10 bg-red-300">
          <p> #{pokemon.id}</p>
          <h2 className="text-5xl text-black">{pokemon.korean_name}</h2>
          <p>속성: {renderTypes()}</p>
          <p>특성: {renderAbilities()}</p>
          <p>키: {pokemon.height / 10}m</p>
          <p>무게: {pokemon.weight / 10}kg</p>
          <p>기술:</p>
          <ul>{renderMoves()}</ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
