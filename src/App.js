import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const { userId } = useParams();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NavBar />
        <SideBar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/user/:userId' component={Dashboard} />
          <Route path='*' component={Error} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
