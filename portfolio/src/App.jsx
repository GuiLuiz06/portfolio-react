import { useState } from "react";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Sobremim from "./components/SobreMim";
import CardStack from "./components/Stacks/StacksCard";
import Projetos from "./components/projetos/Projetos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="flex w-full">
                  <Aside />
                  <div className="flex flex-col items-center w-full ">
                    <Projetos />
                  </div>
                </div>
              </>
            }
          />
          <Route path="/sobremim" element={<Sobremim />} />
          <Route path="/MyStacks" element={<CardStack />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
