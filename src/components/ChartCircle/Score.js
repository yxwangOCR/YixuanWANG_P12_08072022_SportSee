import React from "react";
import {
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";

function Score(data) {
  return (
    <div className='circleChart'>
      <h2>Score here</h2>
      <ResponsiveContainer>
        <RadialBarChart
          width={730}
          height={250}
          innerRadius='10%'
          outerRadius='80%'
          data={data}
          startAngle={180}
          endAngle={0}>
          <RadialBar
            minAngle={15}
            label={{ fill: "#666", position: "insideStart" }}
            background
            clockWise={true}
            dataKey='uv'
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout='vertical'
            verticalAlign='middle'
            align='right'
          />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Score;
