import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { json } from "react-router-dom";
import { ChartProduct } from "../components/ChartProduct";
import Layout from "../components/Layout";
import { LineChart } from "../components/LineChart";

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
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

function Dashboard() {
  const tab = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agust",
  ];
  const [product, setProduct] = useState([]);

  const listPrice = {
    labels: product.map((v) => v.title),
    datasets: [
      {
        label: "ID",
        data: product.map((v) => v.id),
        backgroundColor: "rgba(200, 40, 0, 5)",
      },
      {
        label: "Price",
        data: product.map((v) => v.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Category",
        data: product.map((v) => v.category),
        backgroundColor: "rgba(20, 60, 0.5, 10)",
      },
      {
        label: "Number",
        data: tab.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: "rgba(25, 12, 235, 5)",
      },
    ],
  };

  const listDescription = {
    labels: product.map((v) => v.description),
    datasets: [
      {
        label: "ID",
        data: product.map((v) => v.id),
        backgroundColor: "rgba(100, 20, 0, 5)",
      },
      {
        label: "Number",
        data: tab.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: "rgba(25, 12, 235, 5)",
      },
    ],
  };

  const listCategory = {
    labels: product.map((v) => v.category),
    datasets: [
      {
        label: "Price",
        data: product.map((v) => v.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Category",
        data: tab.map((p) => p.category),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Number",
        data: tab.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: "rgba(25, 12, 235, 5)",
      },
    ],
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <>
      <Layout>
        <div className="flex h-screen ">
          <div className="flex flex-col flex-1 w-full">
            <main className="h-full pb-16 overflow-y-auto">
              <div className="container grid px-6 py-10 mx-auto">
                <div className="w-full overflow-hidden rounded shadow-xs">
                  <div className="w-full overflow-x-auto">
                    <div className="font-bold">Table data API</div>
                    <table className="w-full whitespace-no-wrap">
                      <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-100 text-[#303030] bg-gray-200">
                          <th className="px-4 py-3">ID</th>
                          <th className="px-4 py-3">Title</th>
                          <th className="px-4 py-3">Price</th>
                          <th className="px-4 py-3">Description</th>
                          <th className="px-4 py-3">Category</th>
                          <th className="px-4 py-3">Image</th>
                        </tr>
                      </thead>
                      <tbody className=" divide-y divide-gray-200 bg-gray-50">
                        {product.map((v, i) => {
                          return (
                            <>
                              <tr className="text-[#1B1B1B]" key={i}>
                                <td className="px-4 py-3 text-sm">{v.id}</td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center text-sm">
                                    <p className="font-semibold">{v.title}</p>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-sm">{v.price}</td>
                                <td className="px-4 py-3 text-sm">
                                  {v.description}
                                </td>
                                <td className="px-4 py-3 text-sm">
                                  {v.category}
                                </td>
                                <td className="px-4 py-3 text-sm">
                                  <img src={data.image} />
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* diberikan 2 button untuk menampilkan data yang tidak dapat ditampilkan secara keseluruhan */}
                <div className="text-gray-500 flex justify-end mt-6 gap-4">
                  <button className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#266663] border border-none rounded-md active:bg-[#276562] hover:bg-[#368581] focus:outline-none focus:shadow-outline-purple">
                    Previous
                  </button>
                  <button className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#266663] border border-none rounded-md active:bg-[#276562] hover:bg-[#368581] focus:outline-none focus:shadow-outline-purple">
                    Next
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Layout>

      {/* CHART YANG PERTAMA */}
      <div>
        <div className="mb-40 mt-20">
          {/* Top section */}
          <div className="text-secondary bg-primary-800 rounded-xl p-5">
            <h2 className="sm:text-xl font-semibold text-white mb-1">
              Chart Pertama
            </h2>
            <h5 className="text-xs">Title dan Price</h5>
            <div className="lg:flex mb-6">
              <div className="w-full lg:w-8/12">
                <Bar data={listPrice} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHART YANG KEDUA */}
      <div>
        <div className="mb-40">
          {/* Top section */}
          <div className="text-secondary bg-primary-800 rounded-xl p-5">
            <h2 className="sm:text-xl font-semibold text-white mb-1">
              Chart kedua
            </h2>
            <h5 className="text-xs">ID dan Description</h5>
            <div className="lg:flex mb-6">
              <div className="w-full lg:w-8/12">
                <Bar data={listDescription} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHART YANG KETIGA */}
      <div>
        <div className="mb-10">
          {/* Top section */}
          <div className="text-secondary bg-primary-800 rounded-xl p-5">
            <h2 className="sm:text-xl font-semibold text-white mb-1">
              Chart Ketiga
            </h2>
            <h5 className="text-xs">Price dan Category</h5>
            <div className="lg:flex mb-6">
              <div className="w-full lg:w-8/12">
                <Line data={listCategory} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ChartProduct/>
      </div>
      <div>
        <LineChart/>
      </div>
    </>
  );
}

export default Dashboard;
