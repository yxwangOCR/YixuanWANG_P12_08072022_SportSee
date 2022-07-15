import React from "react";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/NavBar/NavBar";
import ActivityChart from "../components/ActivityChart/ActivityChart";

function Dashboard() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <ActivityChart />
    </div>
  );
}

export default Dashboard;
