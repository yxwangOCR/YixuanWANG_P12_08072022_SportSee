import React from "react";
import {
  PolarGrid,
  ResponsiveContainer,
  RadarChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import "./Performance.css";

function Performance({ performanceKind, performanceData }) {
  //console.log(performanceData);
  //console.log(performanceKind);
  return (
    <div className='radarChart'>
      <ResponsiveContainer>
        <RadarChart outerRadius={90} data={(performanceData, performanceKind)}>
          <PolarGrid />
          <PolarAngleAxis dataKey='kind' data={performanceKind} />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            dataKey='value'
            data={performanceData}
            stroke='#FF0101'
            fill='#FF0101'
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Performance;
