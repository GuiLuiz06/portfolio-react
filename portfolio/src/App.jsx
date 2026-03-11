import { useState } from "react";
import viteLogo from "/vite.svg";
import Aside from "./components/Home/Aside";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Sobremim from "./components/SobreMim";
import CardStack from "./components/Stacks/StacksCard";
import Projetos from "./components/projetos/Projetos";
import Navbar from "./components/Home/Navbar";
import HomeMain from "./components/Home/Main";

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
                <div className="flex flex-col w-full">
                  <HomeMain/>
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
