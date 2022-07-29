import React from "react";
import "./Session.css";
import PropTypes from "prop-types";
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

function Session({ sessions }) {
  //console.log(sessions);
  return (
    <div className='lineChart'>
     
      <ResponsiveContainer>
        <LineChart
          width={730}
          height={250}
          data={sessions}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='day' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='sessionLength' stroke='#8884d8' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
Session.propTypes = {};

export default Session;
