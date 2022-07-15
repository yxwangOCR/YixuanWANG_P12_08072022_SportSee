import React from "react";
import "./ActivityChart.css";
import PropTypes from "prop-types";
import {
  Tooltip,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

function ActivityChart() {
  return (
    <article className='barChart'>
      <p className='barChart-title'>Activité quotidienne</p>

      <ResponsiveContainer>
        <BarChart width={730} height={250}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Bar dataKey='kg' fill='#282D30' />
          <Bar dataKey='kCal' fill='#E60000' />
        </BarChart>
      </ResponsiveContainer>

      <div className='custom-tooltip-legend'>
        <div className='kilogram'>
          <div className='blackRound'></div>
          <p className='desc'>Poids (kg)</p>
        </div>

        <div className='calories'>
          <div className='redRound'></div>
          <p className='desc'>Calories brûlées (kCal)</p>
        </div>
      </div>
    </article>
  );
}

ActivityChart.propTypes = {};

export default ActivityChart;
