// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function Search() {
//   // 검색 중인 단어를 저장
//   const searchData = useNavigate();
//   const [inputValue, setInputValue] = useState("");

//   // onChange일 때, 실행
//   const searching = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="포켓몬을 검색해보세요!"
//         className="w-52 h-8 rounded-lg text-sm p-2"
//         onChange={searching}
//       />
//       <button
//         type="submit"
//         onClick={() =>
//           searchData.push({
//             patname: "/pokemon/searchPage",
//             inputValue: inputValue,
//           })
//         }
//       />
//     </>
//   );
// }
