/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import styles from "@/styles/Home.module.css";

export default function ProductItem({ product }) {
  console.log(product);
  return (
    <div>
      <div className="card hover:bg-red-300 ease-in duration-300 rounded-lg">
        <div className="block md:flex items-center rounded-lg shadow-xl">
          <div className="w-full md:w-1/2 p-6">
            <img
              className="rounded-lg h-72 w-72 mx-auto"
              src={product.image}
              alt=""
            />
          </div>
          <div className="p-6 w-full md:w-1/2 text-center md:text-left">
            <p className=" text-3xl font-bold text-gray-600">{product.name}</p>
            <p className=" text-sm font-bold text-gray-600">{product.brand}</p>
            <p className="mt-5 text-xl font-bold text-gray-600">
              {product.description}
            </p>
            <div className="flex justify-between items-center mt-5">
              <p className=" text-2xl font-bold text-red-400">
                ${product.price}
              </p>
              <button className="bg-red-400 p-4 text-white rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
