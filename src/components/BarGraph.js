import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartComponent = ({ data }) => (
  <BarChart
    width={500}
    height={300}
    data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="grade" />
    <YAxis dataKey="total" />
    <Tooltip />
    <Legend />
    <Bar dataKey="total" fill="#34cb75" background={{ fill: '#f1f1f1' }} />
  </BarChart>
);

export default BarChartComponent;
