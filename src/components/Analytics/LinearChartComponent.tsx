import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Light Blue',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 8000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'RNS App ',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 8000 })),
      borderColor: 'rgb(241, 196, 15)',
      backgroundColor: 'rgba(241, 196, 15)',
    },
    {
      label: ' Sing App ',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 8000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
     
    },
   
  ],
};

export function LinearChartComponent() {
  return <Line options={options} data={data} />;
}
