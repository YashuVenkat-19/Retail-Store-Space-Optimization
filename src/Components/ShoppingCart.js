import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

export default function ShoppingCart() {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center px-4 py-3 bg-gray-100">
        <h1 className="text-xl font-semibold">Shopping Cart</h1>
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700"
          onClick={() => setOpen(false)}
        >
          <span className="sr-only">Close panel</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="p-4">
        <ul className="divide-y divide-gray-200">
          {products.map((product) => (
            <li key={product.id} className="py-6">
              <div className="flex">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href={product.href}>{product.name}</a>
                    </h3>
                    <p className="ml-4">{product.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {product.quantity}</p>
                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-gray-200 px-4 py-3">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>$262.00</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="block w-full bg-indigo-600 text-white text-center py-2 rounded-md hover:bg-indigo-700"
          >
            Checkout
          </a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or{" "}
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => setOpen(false)}
            >
              Continue Shopping <span aria-hidden="true">&rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
