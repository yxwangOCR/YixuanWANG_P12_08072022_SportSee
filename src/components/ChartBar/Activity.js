import React from "react";
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

function Activity({ activity }) {
  //这里的activity来自与Dashboard ： <Activity activity={dataActivity?.data?.sessions} />
  //console.log(activity);
  return (
      <div className='barChart'>
        <div className='barChart-detail'>
          <p className='barChart-title'>Activité quotidienne</p>
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
        <div style={{ width: '100%', height: 200 }}>
          <ResponsiveContainer>
            <BarChart data={activity}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='day' />
              <Tooltip />
              <Bar dataKey='kilogram' fill='#282D30' />
              <Bar dataKey='calories' fill='#E60000' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
  );
}

export default Activity;
