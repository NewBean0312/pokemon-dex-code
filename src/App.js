import { AppBar, Toolbar } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokedexPage from "./pages/PokedexPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar className="font-bold text-white text-xl">PokemonDex</Toolbar>
        <Router>
          <Routes>
            <Route path="/" element={<PokedexPage />} />
            <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
          </Routes>
        </Router>
      </AppBar>
    </>
  );
}

export default App;
