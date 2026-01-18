import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// test
import Header from "./Componente/Header";
import Home from "./Componente/Home"; // pagina principala
import Menu from "./Componente/Menu";
import Reservations from "./Componente/Reservations";
import Wineries from "./Componente/Wineries";
import PrivateEvents from "./Componente/Private Events";
import Contact from "./Componente/Contact";
import Footer from "./Componente/Footer";

function App() {
  return (
    <div className="App">
      <Header /> {}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer /> {}
    </div>
  );
}

export default App;
