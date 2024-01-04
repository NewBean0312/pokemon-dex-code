export default function PokemonTypeData({ pokemon }) {
  // 속성
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
            : ""
        }
      ><i class="fa-solid fa-circle" /></span>
    ));
  };
  return <>{renderType()}</>;
}
