import { AppBar, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import PokedexPage from "./pages/PokedexPage";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>PokemonDex</Toolbar>
        <PokedexPage />
      </AppBar>
    </>
  );
}

export default App;
