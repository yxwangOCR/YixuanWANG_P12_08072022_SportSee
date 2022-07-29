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

function Performance({ performance }) {

  console.log()
  return (
    <div className='radarChart chart-box'>
      <ResponsiveContainer >
        <RadarChart outerRadius={90}>
          <PolarGrid />
          <PolarAngleAxis dataKey='kind' data={performance} />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            dataKey='value'
            data={performance}
            stroke='#FF0101'
            fill='#FF0101'
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Performance;
