/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext } from "react";
import styles from "@/styles/Home.module.css";
import { Store } from "@/Utils/Store";

export default function ProductItem({ product }) {
  const { state, dispatch } = useContext(Store);

  const handleCart = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);

    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("Sorry. this product is out of Stock");
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };

  return (
    <div>
      <div className="card hover:bg-red-300 ease-in duration-300 rounded-lg">
        <div className="block md:flex items-center rounded-lg shadow-xl">
          <div className="w-full md:w-1/2 p-6">
            <Link href={`/product/${product.slug}`}>
              <img
                className="rounded-lg h-72 w-72 mx-auto"
                src={product.image}
                alt=""
              />
            </Link>
          </div>
          <div className="p-6 w-full md:w-1/2 text-center md:text-left">
            <Link href={`/product/${product.slug}`}>
              <p className=" text-3xl font-bold text-gray-600">
                {product.name}
              </p>
            </Link>
            <p className=" text-sm font-bold text-gray-600">{product.brand}</p>
            <p className="mt-5 text-xl font-bold text-gray-600">
              {product.description}
            </p>
            <div className="flex justify-between items-center mt-5">
              <p className=" text-2xl font-bold text-red-400">
                ${product.price}
              </p>
              <Link href={`/product/${product.slug}`}>
                <button
                  onClick={handleCart}
                  className="bg-red-400 p-4 text-white rounded-lg"
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
