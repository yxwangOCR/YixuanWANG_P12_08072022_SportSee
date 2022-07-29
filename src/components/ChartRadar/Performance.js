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

function Performance({ performanceKind, performanceData, kindValue }) {
  //console.log(performanceData);
  //console.log(performanceKind);
  /**
   * conditionally check if the value of the variable you're passing to the function is truthy before calling it,
   * e.g. if (obj) {func()}.
   * The function will not be invoked if the value is null or undefined.
   */
  if (performanceKind) {
    const kindValue = Object.values(performanceKind);
    console.log(kindValue);
    //return kindValue;
  }

  return (
    <div className='radarChart'>
      <ResponsiveContainer>
        <RadarChart outerRadius={90}>
          <PolarGrid />
          <PolarAngleAxis dataKey='kind' data={kindValue} />
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
