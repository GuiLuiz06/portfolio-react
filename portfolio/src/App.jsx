import { useState } from "react";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import Sobremim from "./components/SobreMim";
import CardStack from "./components/Stacks/StacksCard";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Aside />} />
            <Route path="/sobremim" element={<Sobremim />} />
            <Route path="/MyStacks" element={<CardStack />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
