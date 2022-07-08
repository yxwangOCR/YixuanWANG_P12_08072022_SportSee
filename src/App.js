import React from "react";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Community";
import Setting from "./pages/Setting";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <SideBar />
    </>
  );
}

export default App;
