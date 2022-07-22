import React from "react";
import PropTypes from "prop-types";
import "./Activity.css";
import {
  Tooltip,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

function Activity({ data }) {
  console.log(data);
 
  return (
    <div className='barChart'>
      <p className='barChart-title'>Activité quotidienne</p>

      <ResponsiveContainer>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='day' />
          <YAxis />
          <Tooltip />
          <Bar dataKey='kilogram' fill='#282D30' />
          <Bar dataKey='calories' fill='#E60000' />
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
    </div>
  );
}

Activity.propTypes = {};

export default Activity;
