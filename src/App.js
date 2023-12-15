import { AppBar, Toolbar } from "@mui/material";
import Pokedex from "./components/Pokedex";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          PokemonDex
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
