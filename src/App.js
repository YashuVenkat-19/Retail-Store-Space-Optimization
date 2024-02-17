import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LineChart from "./Components/LineChart";
import DoughNut from "./Components/DoughnutChart";
import Trends from "./Components/Trends";
import HeatMaps from "./Components/HeatMaps";
import CustomerBehaviour from "./Components/CustomerBehaviour";
import Reports from "./Components/Reports";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/trends" element={<Trends />} />
          <Route exact path="/heatMaps" element={<HeatMaps />} />
          <Route
            exact
            path="/customerBehaviour"
            element={<CustomerBehaviour />}
          />
          <Route exact path="/newProductPerf" element={<Reports />} />
          <Route exact path="/navbar" element={<Navbar />} />
          <Route exact path="/line" element={<LineChart />} />
          <Route exact path="/doughnut" element={<DoughNut />} />
          <Route exact path="/carousel" element={<Carousel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
