import React, { useEffect, useState } from "react";
import { Chart, initTE } from "tw-elements";

const LineChart2 = (props) => {
  const [chartData, setChartData] = useState(null);
  const [data, setData] = useState([342, 134, 645, 423, 865, 685, 387]);

  useEffect(() => {
    if (props.props === "walmart-towel") {
      setData([22, 234, 745, 343, 265, 198, 987]);
    } else {
      setData([2112, 234, 2545, 3423, 2365, 1985, 987]);
    }

    // Fetch data here (e.g., API call, etc.)
    // For this example, we'll set a timeout to simulate data fetching
    const fetchData = () => {
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
                backgroundColor: "#ea580d", // Set the fill color
                borderColor: "#ea580c", // Set the line color
              },
            ],
          },
        };
        setChartData(dataLine);
      }, 1000); // Simulate a 1-second delay for data fetching
    };

    fetchData();
  }, [props.props]);

  useEffect(() => {
    if (chartData && typeof window !== "undefined") {
      initTE({ Chart });
      new Chart(document.getElementById("line-chart"), chartData);
    }
  }, [chartData]);

  return (
    <>
      <div className="h-full w-full  bg-white">
        {/* <h5 className="flex justify-center p-3"> Scrub daddy Scrubber</h5> */}
        <div
          id="line-chart"
          className=" mt-16 w-full flex items-center justify-center  bg-white"
        ></div>
      </div>
    </>
  );
};

export default LineChart2;
