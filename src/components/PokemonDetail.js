import React from "react";

const PokemonDetail = ({ pokemon }) => {
  if (!pokemon) {
    return <p>Loading...</p>;
  }

  // 속성
  const renderTypes = () => {
    return pokemon.types.map((type, index) => (
      <span
        key={type.type.name}
        className={
          type.type.korean_name === "노말"
            ? "text-gray-400"
            : type.type.korean_name === "불꽃"
            ? "text-red-600"
            : type.type.korean_name === "물"
            ? "text-blue-600"
            : type.type.korean_name === "풀"
            ? "text-green-600"
            : type.type.korean_name === "전기"
            ? "text-yellow-600"
            : type.type.korean_name === "얼음"
            ? "text-blue-400"
            : type.type.korean_name === "격투"
            ? "text-red-800"
            : type.type.korean_name === "독"
            ? "text-purple-800"
            : type.type.korean_name === "땅"
            ? "text-yellow-900"
            : type.type.korean_name === "비행"
            ? "text-indigo-400"
            : type.type.korean_name === "에스퍼"
            ? "text-pink-600"
            : type.type.korean_name === "벌레"
            ? "text-green-900"
            : type.type.korean_name === "바위"
            ? "text-gray-800"
            : type.type.korean_name === "고스트"
            ? "text-purple-600"
            : type.type.korean_name === "드래곤"
            ? "text-blue-800"
            : type.type.korean_name === "악"
            ? "text-gray-800"
            : type.type.korean_name === "강철"
            ? "text-indigo-200"
            : type.type.korean_name === "페어리"
            ? "text-pink-300"
            : ""
        }
      >
        {type.type.korean_name}
        <span className="text-black ml-1 mr-1">
          {index < pokemon.types.length - 1 ? "," : ""}
        </span>
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
        <div className="flex w-2/3 pt-10">
          <div className="w-2/5">
            <p className="text-2xl text-gray-600"> #{pokemon.id}</p>
            <h2 className="pt-2 text-5xl text-black">{pokemon.korean_name}</h2>
            <p className="pt-2 text-xl">속성 : {renderTypes()}</p>
            <p className="pt-2 text-xl">특성 : {renderAbilities()}</p>
            <p className="pt-2 text-xl">키 : {pokemon.height / 10}m</p>
            <p className="pt-2 text-xl">무게 : {pokemon.weight / 10}kg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
