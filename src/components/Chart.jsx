import { Line } from "react-chartjs-2"
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

const Chart = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      }
    }
  }

  const labels = ["Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday", "Sunday"]

  const data = {
    labels,
    datasets: [
      {
        label: 'Earnings',
        data: labels.map(() => Math.floor(Math.random() * 70) + 10),
        borderColor: '#34367c',
        backgroundColor: '#34367c',
      },
    ],
  };


  return (
    <>
      <Line options={options} data={data} />
    </>
  )
}

export default Chart