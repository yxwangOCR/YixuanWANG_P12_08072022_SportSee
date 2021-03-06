import React from "react";
import "./Session.css";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const CustomizedLegend = ({ payload }) => {
    return (
        <div className='custom-legend'>
          <span>Durée moyenne des sessions</span>
        </div>
    )
}

function Session({ sessions }) {
  return (
    <div className='lineChart  chart-box'>
      <ResponsiveContainer>
        <LineChart
          width={730}
          height={250}
          data={sessions}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <Tooltip />
          <Legend
              iconSize={10}
              width={20}
              height={20}
              layout='vertical'
              verticalAlign='top'
              align='center'
              content={<CustomizedLegend />}
          />
          <Line type='monotone' dataKey='sessionLength' stroke="white" />
        </LineChart>

      </ResponsiveContainer>
    </div>
  );
}

export default Session;
