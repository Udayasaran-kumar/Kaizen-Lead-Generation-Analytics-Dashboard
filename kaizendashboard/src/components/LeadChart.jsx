import React from 'react';
import { PieChart, Pie, Tooltip, Cell, BarChart, Bar, XAxis, YAxis } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const LeadChart = ({ leads, type }) => {
  const groupBy = (key) => {
    return leads.reduce((acc, lead) => {
      acc[lead[key]] = (acc[lead[key]] || 0) + 1;
      return acc;
    }, {});
  };

  const dataMap = groupBy(type);
  const chartData = Object.entries(dataMap).map(([key, value]) => ({ name: key, value }));

  return type === 'quality' ? (
    <PieChart width={300} height={300}>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
      >
        {chartData.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  ) : (
    <BarChart width={400} height={300} data={chartData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#82ca9d" />
    </BarChart>
  );
};

export default LeadChart;