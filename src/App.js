import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Profil from "./pages/Profil";
import Community from "./pages/Community";
import Setting from "./pages/Setting";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <SideBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='../pages/Profil' element={<Profil />} />
          <Route path='../pages/Setting' element={<Setting />} />
          <Route path='../pages/Community' element={<Community />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
