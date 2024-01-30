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
    <YAxis dataKey="totalBalance" />
    <Tooltip />
    <Legend />
    <Bar dataKey="totalBalance" fill="#82ca9d" />
  </BarChart>
);

export default BarChartComponent;
