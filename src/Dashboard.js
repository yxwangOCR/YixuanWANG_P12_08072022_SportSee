import React from "react";
import Activity from "./components/Activity/Activity";
import Session from "./components/Session/Session";
import Performance from "./components/Performance/Performance";
import Score from "./components/Score/Score";
import Profil from "./components/Profil/Profil";
import Summary from "./components/Summary/Summary";
import useUserActivity from "./hooks/useUserActivity";
import useUserSession from "./hooks/useUserSession";
import useUserPerformance from "./hooks/useUserPerformance";
import useUser from "./hooks/useUser";
import "./Dashboard.css";

const ID_USER = "18";

function Dashboard() {
  const { data: dataUser } = useUser(ID_USER);
  const { data: dataActivity } = useUserActivity(ID_USER);
  const { data: dataSession } = useUserSession(ID_USER);
  const { data: dataPerformance } = useUserPerformance(ID_USER);

  return (
    <div className="dashboard">
      <Profil user={dataUser?.data?.userInfos} className="dashboard-profil" />

      <div className="dashboard-graph-container">
        <div className="dashboard-data-container">
          <Activity activity={dataActivity?.data?.sessions} />
          <div className="dashboard-data-graph">
            <Session sessions={dataSession?.data?.sessions} />
            <Performance performance={dataPerformance?.data} />
            <Score score={dataUser?.data} />
          </div>
        </div>
        <div>
          <Summary keyData={dataUser?.data?.keyData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
