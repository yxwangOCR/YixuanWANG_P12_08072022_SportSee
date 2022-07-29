import React from "react";
import Activity from "./components/ChartBar/Activity";
import Session from "./components/ChartLine/Session";
import Performance from "./components/ChartRadar/Performance";
import Score from "./components/ChartCircle/Score";
import Profil from "./components/Profil/Profil";
import Summary from "./components/Summary/Summary";
import useUserActivity from "./hooks/useUserActivity";
import useUserSession from "./hooks/useUserSession";
import useUserPerformance from "./hooks/useUserPerformance";
import useUser from "./hooks/useUser";
import "./Dashboard.css";

function Dashboard() {
  const { data: dataUser } = useUser("18");
  const { data: dataActivity } = useUserActivity("18");
  const { data: dataSession } = useUserSession("12");
  const { data: dataPerformance } = useUserPerformance("12");

  return (
    <div className='dashboard'>
      <Profil user={dataUser?.data?.userInfos} className='dashboard-profil' />

      <div className='dashboard-graph-container'>
        <div className='dashboard-data-container'>
          <Activity activity={dataActivity?.data?.sessions} />
          <div className='dashboard-data-graph'>
            <Session sessions={dataSession?.data?.sessions} />
            <Performance
              performanceKind={dataPerformance?.data?.kind}
              performanceData={dataPerformance?.data?.data}
            />
            <Score score={dataUser?.data} />
          </div>
        </div>
        <div>
          <Summary />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
