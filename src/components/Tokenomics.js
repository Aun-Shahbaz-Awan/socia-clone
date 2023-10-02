import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.color = "black"; // Set the default text color for tooltips and legend

export const data = {
  labels: ["Team", "Investors", "Devs", "Burn", "Air Drops", "Top 1"],
  datasets: [
    {
      label: "ARES",
      data: [19500000, 23000000, 3500000, 5220000, 2100000, 3460000],
      backgroundColor: [
        "rgba(255, 99, 132, 0.7)",
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(75, 192, 192, 0.7)",
        "rgba(153, 102, 255, 0.7)",
        "rgba(255, 159, 64, 0.7)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
function Tokenomics() {
  return (
    <div className="w-full grid grid-cols-12 font-poppins px-6 py-10 md:px-20 md:py-16 lg:px-44 lg:py-20">
      <div className="col-span-12 sm:col-span-6 lg:col-span-5 xl:col-span-4">
        <Doughnut data={data} className="text-primary" />
      </div>
      <div className="h-full w-full p-10 col-span-12 sm:col-span-6 lg:col-span-7 xl:col-span-8">
        <h4 className="text-xl md:text-3xl mb-4">
          Lorem Ipsum is simply dummy
        </h4>
        <p className=" text-base lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  );
}

export default Tokenomics;
