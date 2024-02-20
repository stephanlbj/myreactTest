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

const labels = ['20/01/2024', '22/01/2024', '24/01/2024', '26/01/2024',
 '28/01/2024', '30/01/2024', '01/02/2024', '03/02/2024','05/02/2024','07/02/2024',
'09/02/2024', '11/02/2024','13/02/2024', '15/02/2024', '17/02/2024', '19/02/2024'];

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
