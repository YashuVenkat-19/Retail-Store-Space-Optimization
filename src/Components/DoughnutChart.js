import React, { useEffect, useState } from "react";
import { Chart, initTE } from "tw-elements";

const DoughnutChart = () => {
  const [dataDoughnut, setDataDoughnut] = useState(null);

  // Simulate data fetching with a delay
  useEffect(() => {
    // Fetch data here (e.g., API call, etc.)
    // For this example, we'll set a timeout to simulate data fetching
    const fetchData = () => {
      setTimeout(() => {
        const data = {
          type: "doughnut",
          data: {
            labels: [
              "Store @ Seattle",
              "Store @ California",
              "Store @ NewYork",
              "Store @ Ohio",
              "Store @ Las Vegas",
              "Store @ Oklahoma",
              "Store @ Washington",
            ],
            datasets: [
              {
                label: "Traffic",
                data: [344, 778, -567, 443, 365, 685, 687],
                backgroundColor: [
                  "#ea580c",
                  "#a3e635",
                  "#0284c7",
                  "#be185d",
                  "#22c55e",
                  "#312e81",
                  "#500724",
                ],
              },
            ],
          },
        };
        setDataDoughnut(data);
      }, 1000); // Simulate a 1-second delay for data fetching
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (dataDoughnut && typeof window !== "undefined") {
      initTE({ Chart });
      new Chart(document.getElementById("doughnut-chart"), dataDoughnut);
    }
  }, [dataDoughnut]);

  return (
    <canvas id="doughnut-chart" className="bg-white" width="400" height="400" />
  );
};

export default DoughnutChart;
