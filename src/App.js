import React from "react";
import Navbar from "./components/Navbar";
import PlanosDeEstudo from "./components/PlanosDeEstudo";
import Mecenas from "./components/Mecenas";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import Login from "./components/Login";
import CampanhasMkt from "./components/CampanhasMkt";

function App() {
  return (
          <BrowserRouter>
              < Navbar />
            <Routes>
              <Route component={<PlanosDeEstudo/>} path="/" exact/>
              <Route component={<CampanhasMkt/>} path="/campanhasmkt" />
              <Route component={<Mecenas/>} path="/mecenas" />
            </Routes>
          </BrowserRouter>
  );
}

export default App;
