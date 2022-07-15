import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import { QueryClient, QueryClientProvider } from "react-query";
import './App.css';

const queryClient = new QueryClient();

function App() {
  const { userId } = useParams();
  return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="app">
            <NavBar />
            <div className="app--content">
              <SideBar />
              <Dashboard />
            </div>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;
