import React from "react";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
import "./Score.css";

// tuto: https://github.com/recharts/recharts/issues/2662
const CustomizedLegend = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div className='custom-legend'>
        <h2 className='legend'>{payload[0].value + "%"}</h2>
        <span>de votre objectif</span>
      </div>
    );
  }
  return null;
};

function Score({ score }) {
  const scorePercent = score?.score * 100;
  const value = [{ value: scorePercent }];
  return (
    <div className='circleChart  chart-box'>
      <ResponsiveContainer>
        <RadialBarChart
          width={258}
          height={258}
          innerRadius={800}
          outerRadius={100}
          barSize={8}
          data={value}
          startAngle={100}
          endAngle={0}>
          <RadialBar
            background
            clockWise={true}
            dataKey='value'
            fill='#ff0000'
            cornerRadius={10}
          />
          <Legend
            iconSize={10}
            width={20}
            height={20}
            layout='vertical'
            verticalAlign='top'
            align='center'
            payload={value}
            content={<CustomizedLegend />}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Score;
