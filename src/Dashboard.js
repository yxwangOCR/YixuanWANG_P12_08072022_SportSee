import React from "react";
import Activity from "./components/ChartBar/Activity";
import Session from "./components/ChartLine/Session";
import Performance from "./components/ChartRadar/Performance";
import Score from "./components/ChartCircle/Score";
import Profil from "./components/Profil/Profil";
import useUserActivity from "./hooks/useUserActivity";
import useUserSession from "./hooks/useUserSession";
import useUserPerformance from "./hooks/useUserPerformance";

function Dashboard() {
  const { data } = useUserActivity("18");
  //const { data } = useUserSession("12");
  //const { data }= useUserPerformance("12");
  // const {data} = useUser("18")
  return (
    <div className='dashboard'>
      <Profil data={data?.data?.userInfos} />
      {/** syntax means? */}
      <Activity data={data?.data?.sessions} />
      <Session data={data?.data?.sessions} />
      <Performance />
      <Score />
    </div>
  );
}

export default Dashboard;
