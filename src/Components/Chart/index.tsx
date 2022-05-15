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
  ArcElement,
} from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'left' as const,
    },
    title: {
      display: true,
      text: 'Заявки',
    },
  },
};

const labels = ['Выполнена', 'В работе', 'Выполнена'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => 3),
      backgroundColor: ['#2ED47A', '#1565C0', '#8613CD'],
    },
  ],
};

interface IChartProps {
  line?: Boolean;
}

const Chart: React.FC<IChartProps> = ({ line }) => {
  return <>{<Pie height="270px" options={options} data={data} />}</>;
};

export default Chart;
