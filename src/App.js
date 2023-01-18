import React from "react";
import Navbar from "./components/Navbar";
import PlanosDeEstudo from "./components/PlanosDeEstudo";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import Login from "./components/Login";

function App() {
  return (
    <div>
          <Navbar />
          <PlanosDeEstudo />
   </div>
  );
}

export default App;
