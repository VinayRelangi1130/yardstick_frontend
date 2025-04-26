// src/components/Chart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const Chart = ({ transactions }) => {
  const monthlyData = {};
  transactions.forEach(({ date, amount }) => {
    const month = new Date(date).toLocaleString('default', { month: 'short', year: 'numeric' });
    monthlyData[month] = (monthlyData[month] || 0) + parseFloat(amount);
  });

  const data = {
    labels: Object.keys(monthlyData),
    datasets: [{ label: 'Monthly Expenses', data: Object.values(monthlyData), backgroundColor: 'teal' }],
  };

  return <Bar data={data} />;
};

export default Chart;
