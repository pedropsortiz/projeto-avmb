import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";


import PerfilPage from "./pages/PerfilPage";
import CriarBanco from "./pages/CriarBancoPage";
import TabelasPage from "./pages/TabelasPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<PerfilPage />} path="perfil"/>
        <Route element={<CriarBanco />} path="criaBanco"/>
        <Route element={<TabelasPage />} path="banco"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
