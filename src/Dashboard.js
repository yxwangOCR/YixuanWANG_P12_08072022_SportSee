import React from "react";
import Activity from "./components/ChartBar/Activity";
import Session from "./components/ChartLine/Session";
import Performance from "./components/ChartRadar/Performance";
import Score from "./components/ChartCircle/Score";
import Profil from "./components/Profil/Profil";
import useUserActivity from "./hooks/useUserActivity";
import useUserSession from "./hooks/useUserSession";
import useUserPerformance from "./hooks/useUserPerformance";
import useUser from "./hooks/useUser";

function Dashboard() {
  const { data: dataActivity } = useUserActivity("18");
  const { data: dataSession } = useUserSession("12");
  //const { data }= useUserPerformance("12");
  const { data: dataUser } = useUser("18")

  return (
    <div className='dashboard'>
      <Profil user={dataUser?.data?.userInfos} />
      {/** syntax means? */}
      <Activity data={dataActivity?.data?.sessions} />
      <Session sessions={dataSession?.data?.sessions} />
      <Performance />
      <Score />
    </div>
  );
}

export default Dashboard;
