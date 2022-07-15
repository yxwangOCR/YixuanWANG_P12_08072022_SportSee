import React from "react";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/NavBar/NavBar";
import ActivityChart from "../components/ActivityChart/ActivityChart";
import useUserActivity from "../hooks/useUserActivity";

function Dashboard() {
    const { data } = useUserActivity('18')
    return (
        <div className="dashboard">
            <ActivityChart data={data?.data?.sessions}/>
        </div>
    );
}

export default Dashboard;
