import React from "react";

const PokemonDetail = ({ pokemon }) => {
  if (!pokemon) {
    return <p>Loading...</p>;
  }

  const renderTypes = () => {
    return pokemon.types.map((type) => (
      <span key={type.type.name}>{type.type.name}</span>
    ));
  };

  const renderAbilities = () => {
    return pokemon.abilities.map((ability) => (
      <span key={ability.ability.name}>{ability.ability.name}</span>
    ));
  };

  return (
    <div>
      <h2>{pokemon.kor_name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.kor_name} />
      <p>Type: {renderTypes()}</p>
    </div>
  );
};

export default PokemonDetail;
