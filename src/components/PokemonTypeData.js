export default function PokemonTypeData({ pokemon }) {
  if (!pokemon.types) {
    return <p className="text-sm ml-2">Loading...</p>;
  }
  const renderType = () => {
    return pokemon.types.map((type) => (
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
            : "text-white"
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
        <span className="pl-1"></span>
      </span>
    ));
  };
  return <span className="pl-2 pt-2">{renderType()}</span>;
}
