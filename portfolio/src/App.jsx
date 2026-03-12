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
                <div className="flex flex-col w-full mb-[70%]">
                  <HomeMain />
                </div>
              </>
            }
          />
          <Route
            path="/ProjetosCard"
            element={
              <>
                <div>
                  <ProjetosCard />
                </div>
              </>

            }

          />
          <Route path="/MyStacks" element={<CardStack />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
