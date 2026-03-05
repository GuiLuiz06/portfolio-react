import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Aside from "./components/Aside.jsx";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
   <App/>
);
