import React from "react";
import Navbar from "./Navbar";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";
import CompareGraph from "./CompareGraph";
import { useState } from "react";
import LineChart2 from "./LineChart2";
import CompareGraph2 from "./CompareGraph2";

const Trends = () => {
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);
  const [isDropdown4Open, setIsDropdown4Open] = useState(false);
  const [isDropdown5Open, setIsDropdown5Open] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Choose a product");
  const [selectedProductMoney, setSelectedProductMoney] = useState("$0.0");
  const [selectedProductImage, setSelectedProductImage] = useState("");

  const toggleDropdown1 = () => {
    setIsDropdown1Open(!isDropdown1Open);
  };
  const toggleDropdown2 = () => {
    setIsDropdown2Open(!isDropdown2Open);
  };
  const toggleDropdown3 = () => {
    setIsDropdown3Open(!isDropdown3Open);
  };
  const toggleDropdown4 = () => {
    setIsDropdown4Open(!isDropdown4Open);
  };
  const toggleDropdown5 = () => {
    setIsDropdown5Open(!isDropdown5Open);
  };
  return (
    <>
      <Navbar />
      <div>
        <aside
          id="sidebar-multi-level-sidebar"
          className="fixed bg-sky-700 top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-sky-700 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              {/* <li>
                <a
                  href="#"s
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-400 dark:hover:bg-gray-700 group"
                >w
                  <svga
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ml-b3">Shampoo-Bodywash-Scrubber</span>
                </a>
              </li> */}
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700"
                >
                  {/* <svg
                    className="flex-shrink-0 w-5 h-5 text- transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg> */}
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Products
                  </span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                  onClick={toggleDropdown1}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Toiletries
                  </span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {isDropdown1Open && (
                  <ul className=" py-2 space-y-2">
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Walmart-Towels");
                          setSelectedProductMoney("$4.65");
                          setSelectedProductImage(
                            "https://images.unsplash.com/photo-1600369672770-985fd30004eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=817&q=80"
                          );
                        }}
                      >
                        Walmart-Towels
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Scrub Daddy scrubber");
                          setSelectedProductMoney("$0.87");
                          setSelectedProductImage(
                            "https://m.media-amazon.com/images/I/61ss+e8FJ9L._AC_US750_.jpg"
                          );
                        }}
                      >
                        Scrub Dabby scrubber
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Tide Pods");
                          setSelectedProductMoney("$3.50");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/6353ae01ad20b81763384b88-tide-pods-laundry-detergent-soap-pods.jpg"
                          );
                        }}
                      >
                        Tide Pods
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Walmart-Clips");
                          setSelectedProductImage(
                            "https://image.similarpng.com/very-thumbnail/2020/09/Hand-drawn-beautiful-cartoon-sun-clipart-PNG.png"
                          );
                        }}
                      >
                        Walmart-Clips
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Cleaner-Mops");
                        }}
                      >
                        Cleaner-Mop
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                  onClick={toggleDropdown2}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Groceries
                  </span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {isDropdown2Open && (
                  <ul className=" py-2 space-y-2">
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Mott's Assorted Fruits");
                          setSelectedProductMoney("15.75");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/633219c279824128c65b6532-mott-s-fruit-flavored-snacks-assorted.jpg"
                          );
                        }}
                      >
                        Mott's Assorted Fruits
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Black Cherry Sparkling Water");
                          setSelectedProductMoney("19.99");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/633039ea80f33d2f3c176243-sparkling-ice-black-cherry-sparkling.jpg"
                          );
                        }}
                      >
                        Black Cherry Sparkling Water
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Reese Peanut Butter");
                          setSelectedProductMoney("7.99");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/63de72d9cbde1c07951804d2-betty-crocker-reese-s-peanut-butter.jpg"
                          );
                        }}
                      >
                        Reese Peanut Butter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Jack Daniel Seasoning");
                          setSelectedProductMoney("7.99");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/6349ec6e6c39bd106472b7d6-jack-daniels-116714-jacks-steak.jpg"
                          );
                        }}
                      >
                        Jack Daniel Seasoning
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Australian Bbq Sauce");
                          setSelectedProductMoney("30.99");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/64db038bf98f6701f1566340-original-australian-hot-bbq-sauce.jpg"
                          );
                        }}
                      >
                        Australian Bbq Sauce
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                  onClick={toggleDropdown3}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Home decors
                  </span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {isDropdown3Open && (
                  <ul className=" py-2 space-y-2">
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Mott's Assorted Fruits");
                          setSelectedProductMoney("15.75");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/633219c279824128c65b6532-mott-s-fruit-flavored-snacks-assorted.jpg"
                          );
                        }}
                      >
                        Mott's Assorted Fruits
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Black Cherry Sparkling Water");
                          setSelectedProductMoney("19.99");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/633039ea80f33d2f3c176243-sparkling-ice-black-cherry-sparkling.jpg"
                          );
                        }}
                      >
                        Black Cherry Sparkling Water
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Reese Peanut Butter");
                          setSelectedProductMoney("7.99");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/63de72d9cbde1c07951804d2-betty-crocker-reese-s-peanut-butter.jpg"
                          );
                        }}
                      >
                        Reese Peanut Butter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Jack Daniel Seasoning");
                          setSelectedProductMoney("7.99");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/6349ec6e6c39bd106472b7d6-jack-daniels-116714-jacks-steak.jpg"
                          );
                        }}
                      >
                        Jack Daniel Seasoning
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Australian Bbq Sauce");
                          setSelectedProductMoney("30.99");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/64db038bf98f6701f1566340-original-australian-hot-bbq-sauce.jpg"
                          );
                        }}
                      >
                        Australian Bbq Sauce
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                  onClick={toggleDropdown4}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Make-Up and Salon
                  </span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {isDropdown4Open && (
                  <ul className=" py-2 space-y-2">
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Mott's Assorted Fruits");
                          setSelectedProductMoney("15.75");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/633219c279824128c65b6532-mott-s-fruit-flavored-snacks-assorted.jpg"
                          );
                        }}
                      >
                        Mott's Assorted Fruits
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Black Cherry Sparkling Water");
                          setSelectedProductMoney("19.99");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/633039ea80f33d2f3c176243-sparkling-ice-black-cherry-sparkling.jpg"
                          );
                        }}
                      >
                        Black Cherry Sparkling Water
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Reese Peanut Butter");
                          setSelectedProductMoney("7.99");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/63de72d9cbde1c07951804d2-betty-crocker-reese-s-peanut-butter.jpg"
                          );
                        }}
                      >
                        Reese Peanut Butter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Jack Daniel Seasoning");
                          setSelectedProductMoney("7.99");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/6349ec6e6c39bd106472b7d6-jack-daniels-116714-jacks-steak.jpg"
                          );
                        }}
                      >
                        Jack Daniel Seasoning
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Australian Bbq Sauce");
                          setSelectedProductMoney("30.99");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/64db038bf98f6701f1566340-original-australian-hot-bbq-sauce.jpg"
                          );
                        }}
                      >
                        Australian Bbq Sauce
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                  onClick={toggleDropdown4}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Travel
                  </span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {isDropdown4Open && (
                  <ul className=" py-2 space-y-2">
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Mott's Assorted Fruits");
                          setSelectedProductMoney("15.75");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/633219c279824128c65b6532-mott-s-fruit-flavored-snacks-assorted.jpg"
                          );
                        }}
                      >
                        Mott's Assorted Fruits
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Black Cherry Sparkling Water");
                          setSelectedProductMoney("19.99");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/633039ea80f33d2f3c176243-sparkling-ice-black-cherry-sparkling.jpg"
                          );
                        }}
                      >
                        Black Cherry Sparkling Water
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Reese Peanut Butter");
                          setSelectedProductMoney("7.99");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/63de72d9cbde1c07951804d2-betty-crocker-reese-s-peanut-butter.jpg"
                          );
                        }}
                      >
                        Reese Peanut Butter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Jack Daniel Seasoning");
                          setSelectedProductMoney("7.99");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/6349ec6e6c39bd106472b7d6-jack-daniels-116714-jacks-steak.jpg"
                          );
                        }}
                      >
                        Jack Daniel Seasoning
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-yellow-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct("Australian Bbq Sauce");
                          setSelectedProductMoney("30.99");
                          setSelectedProductImage(
                            "https://images-cdn.ubuy.co.in/64db038bf98f6701f1566340-original-australian-hot-bbq-sauce.jpg"
                          );
                        }}
                      >
                        Australian Bbq Sauce
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <div className="bg-teal-100">
        <div className="p-4 sm:ml-64 bg-teal-100">
          <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
            <div className="flex items-center justify-center  mb-4 rounded bg-white dark:bg-gray-800">
              <h5 className="mb-2 p-4 text-2xl font-bold tracking-tight text-amber-400  dark:text-white">
                Store: Walmart @ 743 Rainier Ave S, Renton, WA 98057, United
                States
              </h5>
            </div>
            <div className="flex items-center justify-center  mb-4 rounded bg-sky-700 dark:bg-gray-800">
              <h5 className="mb-2 p-4 text-2xl font-bold tracking-tight text-lime-400 dark:text-white">
                Product : {selectedProduct}
                <br />
                Product price :{selectedProductMoney}
              </h5>

              <div className="relative h-100 w-80 m-2 overflow-hidden rounded-lg bg-sky-700 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img src={selectedProductImage} />
              </div>
            </div>
            <div className="flex items-center justify-center  mb-4 rounded bg-gray-50 dark:bg-gray-800">
              {selectedProduct === "Walmart-Towels" && <CompareGraph />}
              {selectedProduct === "Scrub Daddy scrubber" && <CompareGraph2 />}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="grid grid-cols-1 gap-4 flex-row ">
                <div className="flex items-center justify-center flex-row   mb-4 rounded bg-gray-50 h-50  dark:bg-gray-800">
                  {!(selectedProduct === "Choose a product") && (
                    <LineChart props={selectedProduct} />
                  )}
                </div>
                <div className="flex items-center justify-center  mb-4 rounded bg-sky-700 h-50  dark:bg-gray-800">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-center rounded bg-gray-50  dark:bg-gray-800">
                      <h5 className=" 0 w-full p-4 text-2xl font-bold tracking-tight text-lime-400 dark:text-white">
                        Sales Over Week
                      </h5>
                    </div>

                    <h5 className=" w-full p-4 text-3xl font-bold tracking-tight text-amber-400 dark:text-white">
                      45%
                    </h5>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center  mb-4 rounded bg-gray-50 h-50 p-3 dark:bg-gray-800">
                {!(selectedProduct === "Choose a product") && <DoughnutChart />}
              </div>
              {/* <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"></div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <div className="flex items-center justify-center  mb-4 rounded bg-gray-50 h-50 p-3 dark:bg-gray-800">
                </div>
              </div> */}
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trends;
