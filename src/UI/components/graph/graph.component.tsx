import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Stats, StatsData } from "./graph.types";

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
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Gols feitos por minuto",
    },
  },
};

const Graph: React.FC<{ stats: Stats }> = ({ stats }: { stats: Stats }) => {
  const statsArray = Object.entries(stats).map(([key, value]) => ({
    key,
    ...(value as StatsData),
  }));
  const chartData = {
    labels: statsArray.map((stats) => stats.key),
    datasets: [
      {
        label: "Goals",
        data: statsArray.map((stats) => stats.total),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Line
      data-testid="graph-gols-per-minute-component"
      options={options}
      data={chartData}
    />
  );
};

export default Graph;
