import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./Dashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

/**
 * React query : library simplifies fetch + synchronize data from server.
 */

const queryClient = new QueryClient(); // instanitiate the query client and provide it in component tree

function App() {
  return (
    //every child component can fetch data:
    // then define a function in hooks to fetch data from server
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
