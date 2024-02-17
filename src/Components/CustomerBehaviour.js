import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import "./style.css";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Example from "./Example";

const CustomerBehaviour = () => {
  const [modalContent, setModalContent] = useState("");
  const [products, setProducts] = useState([]);

  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const openModal = (content) => {
    console.log(content);
    if (content === "shelf1") {
      setProducts([
        {
          id: 1,
          name: "Gourmet Honey Roasted Nut mix",
          href: "#",
          imageSrc:
            "https://images-cdn.ubuy.co.in/64db038bf98f6701f1566338-gourmet-roasted-nut-mix-cashews.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$3.7",
          color: "Black",
        },
        {
          id: 2,
          name: "YellowBird Sauce",
          href: "#",
          imageSrc:
            "https://images-cdn.ubuy.co.in/64db038bf98f6701f1566342-yellowbird-9-8-oz-serrano-sauce.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$26",
          color: "Black",
        },
        {
          id: 3,
          name: "Tomato Organic paste",
          href: "#",
          imageSrc:
            "https://images-cdn.ubuy.co.in/64db038bf98f6701f1566343-madewith-6-oz-tomato-organic-paste.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$50",
          color: "Black",
        },
        {
          id: 4,
          name: "Toaster Pastries",
          href: "#",
          imageSrc:
            "https://images-cdn.ubuy.co.in/6373abb9762607441a3f0964-amazon-fresh-toaster-pastries-variety.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$3.53",
          color: "Black",
        },
        {
          id: 5,
          name: "Gatorade Drink",
          href: "#",
          imageSrc:
            "https://images-cdn.ubuy.co.in/632dbfb34234073acf2cbea4-gatorade-original-thirst-quencher.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$9.9",
          color: "Black",
        },
        // More products...
      ]);
    }
    if (content === "shelf2") {
      setProducts([
        {
          id: 1,
          name: "Milk Chocolate Almond",
          href: "#",
          imageSrc:
            "https://images-cdn.ubuy.co.in/64db038bf98f6701f156633d-bilot-gourmet-milk-chocolate-covered.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$56.5",
          color: "Black",
          count: 630,
          recount: 183,
        },
        {
          id: 2,
          name: "Bitter Kola",
          href: "#",
          imageSrc:
            "https://images-cdn.ubuy.co.in/63a864a754053d5976356a63-bitter-kola.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$3.0",
          color: "Black",
          count: 164,
          recount: 33,
        },
        {
          id: 3,
          name: "Kraft-easy-mac-flavor-macroni",
          href: "#",
          imageSrc:
            "https://images-cdn.ubuy.co.in/6430cdeea79a7141db4cb838-kraft-easy-mac-original-flavor-macaroni.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$12",
          color: "Black",
          count: 834,
          recount: 233,
        },
        // More products...
      ]);
    }
    if (content === "shelf3") {
      setProducts([
        {
          id: 1,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 2,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 3,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 4,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 5,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        // More products...
      ]);
    }
    setOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setOpen(false);
    setModalContent("");
  };

  return (
    <>
      <div className="bg-teal-100 min-h-full">
        <Navbar />
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-100 overflow-hidden">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-y-auto rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            Customer behaviour on each Product
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              See the number of times the products in the shelf
                              has been picked up by the customer and how many
                              times the product has been replaced and more.
                            </p>
                          </div>
                          <div
                            className="bg-white h-80"
                            id="products"
                            style={{ maxHeight: "100%", overflowY: "auto" }}
                          >
                            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-3 sm:py-16 lg:max-w-7xl lg:px-4">
                              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                Products in this shelf
                              </h2>

                              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {products.map((products) => (
                                  <div
                                    key={products.id}
                                    className="group relative"
                                  >
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-36">
                                      <img
                                        src={products.imageSrc}
                                        alt={products.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                      />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                      <div>
                                        <h3 className="text-sm text-gray-700">
                                          <a href={products.href}>
                                            <span
                                              aria-hidden="true"
                                              className="absolute inset-0"
                                            />
                                            {products.name}
                                          </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {products.color}
                                        </p>
                                        <p className="text-sm font-medium text-gray-900">
                                          {products.price}
                                        </p>
                                        <p className="text-sm font-medium text-gray-900">
                                          Number of times product picked:{" "}
                                          {products.count}
                                        </p>
                                        <p className="text-sm font-medium text-gray-900">
                                          Number of times product replaced:{" "}
                                          {products.recount}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => setOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <div className="bg-teal-100">
          <div className="p-4 sm:ml bg-teal-100">
            <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
              <div className="flex items-center justify-center  mb-4 rounded bg-white dark:bg-gray-800">
                <h5 className="mb-2 p-4 text-2xl font-bold tracking-tight text-amber-400  dark:text-white">
                  Store: Walmart @ 743 Rainier Ave S, Renton, WA 98057, United
                  States
                </h5>
              </div>
              <div className="flex items-center justify-center  mb-4 rounded bg-sky-700 dark:bg-gray-800">
                <h5 className="mb-2 p-4 text-2xl font-bold tracking-tight text-lime-400 dark:text-white">
                  All Aisle of the store
                </h5>

                {/* <div className="relative h-100 w-80 m-2 overflow-hidden rounded-lg bg-sky-700 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"> */}
                {/* <img src={selectedProductImage} /> */}
                {/* </div> */}
              </div>

              {/* <div className="grid grid-cols-2 gap-4 flex-row ">
                  <div className="flex items-center justify-center flex-row rounded  mb-4 bg-sky-700 h-50 p-3 dark:bg-gray-800">
                    <h5 className=" w-full justify-center p-4 text-3xl font-bold tracking-tight text-amber-400 dark:text-white">
                      45%
                    </h5>
                  </div>
                  <div className="flex items-center justify-center flex-row mb-4 rounded bg-sky-700 h-50  dark:bg-gray-800">
                    <h5 className=" w-full justify-center p-4 text-3xl font-bold tracking-tight text-amber-400 dark:text-white">
                      45%
                    </h5>
                  </div>
                </div> */}
              <div className="grid grid-cols-3 gap-10 mb-4">
                <div className="col-span-1 flex flex-col border-2 border-white items-center justify-center rounded bg-teal-300 p-3 dark:bg-gray-800">
                  <h5 className="text-2xl font-bold tracking-tight text-amber-400 dark:text-white mb-4">
                    Aisle 1
                  </h5>
                  <div className="grid grid-cols-2 gap-4 flex-row">
                    <div
                      onClick={() => openModal("shelf1")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 1
                        <br />
                        Groceries
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf2")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 1
                        <br />
                        Groceries
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf3")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 2
                        <br />
                        Pulses
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf4")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 2
                        <br />
                        Juice
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf5")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 3
                        <br />
                        Pulses
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf5")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 3
                        <br />
                        Juice
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf5")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 4
                        <br />
                        Pulses
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf5")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 4
                        <br />
                        Dairy
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col border-2 border-white items-center justify-center rounded bg-teal-300 p-3 dark:bg-gray-800">
                  <h5 className="text-2xl font-bold tracking-tight text-amber-400 dark:text-white mb-4">
                    Aisle 2
                  </h5>
                  <div className="grid grid-cols-2 gap-4 flex-row">
                    <div
                      onClick={() => openModal("shelf1")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 1
                        <br />
                        Groceries
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf2")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 1
                        <br />
                        Groceries
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf3")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 2
                        <br />
                        Jam
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf4")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 2
                        <br />
                        Nuts
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf5")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 3
                        <br />
                        Fruits
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf5")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 3
                        <br />
                        Nuts
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf5")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 7
                        <br />
                        Vegetables
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf5")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 8
                        <br />
                        Spices
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col border-2 border-white items-center justify-center rounded bg-teal-300 p-3 dark:bg-gray-800">
                  <h5 className="text-2xl font-bold tracking-tight text-amber-400 dark:text-white mb-4">
                    Aisle 3
                  </h5>
                  <div className="grid grid-cols-2 gap-4 flex-row">
                    <div
                      onClick={() => openModal("shelf1")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 1
                        <br />
                        Groceries
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf2")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 1
                        <br />
                        Groceries
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf3")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 2
                        <br />
                        Oil
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf4")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 2
                        <br />
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf5")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 3
                        <br />
                        Fruits
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf5")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 3
                        <br />
                        Nuts
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf5")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform "
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 7
                        <br />
                        Vegetables
                      </h5>
                    </div>
                    <div
                      onClick={() => openModal("shelf5")}
                      className="flex items-center justify-center flex-row rounded bg-sky-700 h-50 p-3 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform"
                    >
                      <h5 className="w-full justify-center p-3 text-l font-bold tracking-tight text-amber-400 dark:text-white">
                        Shelf 8
                        <br />
                        Spices
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800 hover:bg-sky-500 hover:scale-105 transition-transform">
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
      </div>

      {/* <div>THis is heatMaps page</div>
      <div className="p-24 items-center">
        <img
          height="400px"
          width="600px"
          src="https://cdn.shopify.com/s/files/1/1246/6441/files/Angular_store_layout.jpg?v=1622669539"
        ></img>

        <img src="https://webassets.linkretail.com/wp-content/uploads/2021/05/Zrzut-ekranu-2021-05-17-o-11.32-1-1536x766.png" />
      </div> */}
    </>
  );
};

export default CustomerBehaviour;
