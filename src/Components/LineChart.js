import React, { useEffect, useState } from "react";
import { Chart, initTE } from "tw-elements";

const LineChart = (props) => {
  const [chartData, setChartData] = useState(null);
  const [data, setData] = useState([112, 234, 545, 423, 265, 985, 587]);
  console.log(props.props);

  const fetchData = () => {
    if (props.props == "Walmart-Towels") {
      console.log("hit");
      setData([12, 24, 45, 23, 65, 85, 7]);
    }
    setTimeout(() => {
      const dataLine = {
        type: "line",
        data: {
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          datasets: [
            {
              label: "Sales",
              data: data,
              backgroundColor: "rgba(75, 192, 192, 0.2)", // Set the fill color
              borderColor: "rgba(75, 192, 192, 1)", // Set the line color
            },
          ],
        },
      };
      setChartData(dataLine);
    }, 1000); // Simulate a 1-second delay for data fetching
  };

  useEffect(() => {
    // Fetch data here (e.g., API call, etc.)
    // For this example, we'll set a timeout to simulate data fetching

    fetchData();
  }, [props.type]);

  useEffect(() => {
    if (chartData && typeof window !== "undefined") {
      initTE({ Chart });
      new Chart(document.getElementById("line-chart"), chartData);
    }
  }, [chartData]);

  return (
    <div id="line-chart" className="h-100 p-0">
      {/* The chart will be rendered here */}
    </div>
  );
};

export default LineChart;
