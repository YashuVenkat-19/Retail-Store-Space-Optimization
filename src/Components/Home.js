import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Asset from "./Asset";

export default function Home() {
  return (
    <>
      <div className="min-h-full bg-teal-100">
        <Navbar />
        <main className="pt-24">
          <div className="px-32 py-8">
            <h1 className="mb-8 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Customer Behaviour, Profiling and Trend Analysis.
              </span>{" "}
            </h1>
            <p className="text-lg font-normal text-gray-900 lg:text-xl dark:text-gray-400">
              Here at Pre-Mart we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <div className="mx-8 grid max-w-xl grid-cols-2 items-center gap-x-2 gap-y-2 px-2 py-2 sm:px-2 sm:py-4 lg:max-w-5xl lg:grid-cols-2 lg:px-3">
              <img src="https://i.pinimg.com/564x/6d/01/45/6d01459d721eab1ac63de6973cf864c5.jpg"></img>
              <img src="https://i.pinimg.com/564x/41/18/9e/41189ecaff4f8f408e8f513cb38e1783.jpg"></img>
            </div>
          </div>
          <div className="px-24 pt-16 items-center gap-2">
            <div className=" bg-sky-700 mx-auto max-w-7xl py-4 sm:px-4 lg:px-20 rounded-xl shadow-2xl m-12">
              <Asset />
            </div>
            {/* <div className=" bg-white mx-auto max-w-7xl py-6 sm:px-6 lg:px-20 rounded-xl shadow-2xl m-12">
              <DoughnutChart />
            </div>
            <div className=" bg-white mx-auto max-w-7xl py-6 sm:px-6 lg:px-20 rounded-xl shadow-2xl m-12">
              <LineChart />
            </div> */}
          </div>
          {/* <Carousel /> */}
        </main>
      </div>
    </>
  );
}
