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

function Session(data) {
  return (
    <div className='lineChart'>
      <h2>Session here</h2>
      <ResponsiveContainer>
        <LineChart
          width={730}
          height={250}
          data={data}
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
