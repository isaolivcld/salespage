import React from "react";
import Navbar from "./components/Navbar";
import PlanosDeEstudo from "../src/components/PlanosDeEstudo"
import Mecenas from "./components/Mecenas";
import {  BrowserRouter as Router, Route,Routes } from 'react-router-dom'
/* import { AuthContextProvider } from "./context/authContext";
 */import Login from "./components/Login";
import CampanhasMkt from "./components/CampanhasMkt";

function App() {
  return (
    <div>
    <Router>
     <Navbar />
     <Routes>
      <Route element={<PlanosDeEstudo/>} path="/" exact />
      <Route element={<CampanhasMkt/>} path="/campanhasmkt" />
      <Route element={<Mecenas/>} path="/mecenas" />
    </Routes>
  </Router>
  </div>
  
  );
}

export default App;
