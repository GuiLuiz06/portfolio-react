import { useState } from "react";
import viteLogo from "/vite.svg";
import Aside from "./components/Home/Aside";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Sobremim from "./components/SobreMim";
import ProjetosCard from "./components/projetos/ProjetosCard";
import CardStack from "./components/Stacks/StacksCard";
import Navbar from "./components/Home/Navbar";
import HomeMain from "./components/Home/Main";
import HomeProject from "./components/projetos/HomeProjetos";
import Contact from "./components/contatos/Contats";

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
                <div className="flex flex-col w-full mb-[30%]">
                  <HomeMain />
                </div>
              </>
            }
          />
          <Route
            path="/Projetos"
            element={
              <>
                <div className="flex flex-col w-full mb-[30%]">
                  <HomeProject />
                </div>
              </>
            }
          />
          <Route path="/MyStacks" element={
            <>
            <div className="flex flex-col w-full mb-[30%]">
              <CardStack />
            </div>
            </>

            } />

            <Route path="/Contatos" element={
              <>
              <div className="flex flex-col w-full mb-[30%]">
                <Contact />
              </div>
              </>
            }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
