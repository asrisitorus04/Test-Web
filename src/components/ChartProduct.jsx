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
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agust'];
//const [product, setProduct] = useState({});

// const listPrice ={
//   labels: product.map(v => v.title),
//   datasets: [
//     {
//       data: product.map((v) => v.price)
//     }
//   ]
// }

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => setProduct(json));
  // }, []);

export const data = {
  labels,
  datasets: [
    {
      label: 'Category',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 20 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Title',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function ChartProduct() {
  return <Bar options={options} data={data} />;
}