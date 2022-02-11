import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart({ comAporte, semAporte }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  const labels = Object.keys(semAporte).map(item => item);

  const data = {
    labels,
    datasets: [
      {
        label: 'Sem Aporte',
        data: Object.values(semAporte).map(item => item),
        backgroundColor: 'black',
      },
      {
        label: 'Com Aporte',
        data: Object.values(comAporte).map(item => item),
        backgroundColor: '#eb8b54',
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default Chart;
