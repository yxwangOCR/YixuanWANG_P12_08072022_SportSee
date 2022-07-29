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
  /**
   * conditionally check if the value of the variable you're passing to the function is truthy before calling it,
   * e.g. if (obj) {func()}.
   * The function will not be invoked if the value is null or undefined.
   */
  /** ======================================== */
  /****
   * Pour obtenir un array avec toute les values:  "cardio" ... 
  const kindValueArray = performanceKind
    ? Object.values(performanceKind)
    : null;
  console.log(kindValueArray);
  
  

  /* Utiliser reduce to get un object avec "value": value, mais error : cannot read properties of null (reading 'reduce') 
  const kindValueObject = kindValueArray.reduce((acc, value) => {
    return { ...acc, [value]: "value" };
  }, {});
  console.log(kindValueObject);
  */

  // utilser forEach pour le meme but de reduce, mais error :cannot read properties of null (reading 'foreach'), donc:

  const kindValueArray = [
    "cardio",
    "energy",
    "endurance",
    "strength",
    "speed",
    "intensity",
  ];
  const kindValueObject = {};
  kindValueArray.forEach((element) => {
    kindValueObject[element] = element;
  });
  console.log(kindValueObject);

  return (
    <div className='radarChart'>
      <ResponsiveContainer>
        <RadarChart outerRadius={90}>
          <PolarGrid />
          <PolarAngleAxis dataKey='kind' data={kindValueObject} />
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
