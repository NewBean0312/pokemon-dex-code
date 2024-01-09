import React from "react";

export default function PokemonDetail({ pokemon }) {
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
        {type.type.korean_name === "노말" && <i class="fa-solid fa-circle" />}
        {type.type.korean_name === "불꽃" && <i class="fa-solid fa-fire" />}
        {type.type.korean_name === "물" && <i class="fa-solid fa-droplet" />}
        {type.type.korean_name === "풀" && <i class="fa-solid fa-leaf" />}
        {type.type.korean_name === "전기" && <i class="fa-solid fa-bolt" />}
        {type.type.korean_name === "얼음" && (
          <i class="fa-solid fa-snowflake" />
        )}
        {type.type.korean_name === "격투" && (
          <i class="fa-solid fa-hand-fist" />
        )}
        {type.type.korean_name === "독" && <i class="fa-solid fa-flask" />}
        {type.type.korean_name === "땅" && <i class="fa-solid fa-mound" />}
        {type.type.korean_name === "비행" && <i class="fa-solid fa-feather" />}
        {type.type.korean_name === "에스퍼" && (
          <i class="fa-solid fa-wand-magic-sparkles" />
        )}
        {type.type.korean_name === "벌레" && <i class="fa-solid fa-bug" />}
        {type.type.korean_name === "바위" && <i class="fa-solid fa-globe" />}
        {type.type.korean_name === "고스트" && <i class="fa-solid fa-ghost" />}
        {type.type.korean_name === "드래곤" && <i class="fa-solid fa-dragon" />}
        {type.type.korean_name === "악" && <i class="fa-solid fa-crossbones" />}
        {type.type.korean_name === "강철" && <i class="fa-solid fa-shield" />}
        {type.type.korean_name === "페어리" && <i class="fa-solid fa-heart" />}
        {type.type.korean_name}
        <span className="text-black ml-1 mr-1">
          {index < pokemon.types.length - 1 ? "," : ""}
        </span>
      </span>
    ));
  };

  // 특성
  const renderAbilities = () => {
    return pokemon.abilities.map((ability) => (
      <span
        key={ability.ability.name}
        className="mr-2 p-1 rounded-lg bg-gray-600 text-white"
      >
        {ability.ability.korean_name}
      </span>
    ));
  };

  return (
    <div className="flex justify-center w-screen h-full bg-white mr-auto ml-auto">
      <div className="flex flex-col md:flex-row justify-center w-3/4 h-3/4 mt-10 p-4 border-4 rounded-xl border-red-600">
        <div className="w-full md:w-1/2">
          <img
            className="w-3/4 mt-10 ml-auto mr-auto rounded-xl border-4 border-gray-900"
            src={pokemon.sprites.front_default}
            alt={pokemon.korean_name}
          />
        </div>
        <div className="flex w-full md:w-1/2 pt-10">
          <div className="w-full">
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
}
