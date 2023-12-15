import axios from "axios";
import { useEffect, useState } from "react";
export default function PokemonList({ key, imgSrc, pokemonName, id }) {
  return (
    <>
      <li>
        <div key={key}>
          <img src={imgSrc} alt={pokemonName} />
          <p>{pokemonName}</p>
          <p>ID : {id}</p>
        </div>
      </li>
    </>
  );
}
