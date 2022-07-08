import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Profil from "./pages/Profil";
import Community from "./pages/Community";
import Setting from "./pages/Setting";
import Home from "./pages/Home";
import Error from "./pages/Error";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
      <>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <NavBar />
            <SideBar />
          </BrowserRouter>
        </QueryClientProvider>
      </>
  );
}

export default App;
