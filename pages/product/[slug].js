import Hero from "@/Components/Hero";
import Layout from "@/Components/Layout";
import data from "@/Utils/data";
import { Store } from "@/Utils/Store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const ProductScreen = () => {
  const { state, dispatch } = useContext(Store);

  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>product not found</div>;
  }

  const handleCart = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);

    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("Sorry. this product is out of Stock");
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };

  return (
    <Layout title={product.name}>
      <div className="custom-img h-80 flex items-center justify-center">
        <div className="absolute top-0 left-0 right-0 bottom-60 md:bottom-96 bg-black/40 z-[2]"></div>
        <div className=" text-white z-[2]">
          <h1 className="text-3xl font-semibold ">Product Details</h1>
        </div>
      </div>

      {/* previous btn */}
      <div className="mt-16 text-white">
        <Link href={`/collections`}>
          <button className="px-8 py-2 bg-red-400 hover:bg-red-500 rounded-md flex items-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
            Go Back to Collection
          </button>
        </Link>
      </div>

      {/* Product Details */}
      <div className="mx-auto max-w-[1200px] shadow-2xl p-4 mt-16 rounded-2xl">
        <div className="block md:flex items-center justify-between">
          <div className="md:w-1/3">
            <Image
              src={product.image}
              alt="/"
              className="rounded-2xl"
              height={400}
              width={400}
            />
          </div>
          <div className="md:w-1/4 text-left">
            <p className=" text-3xl font-bold text-gray-600">{product.name}</p>
            <p className="mt-2 text-2xl font-medium text-gray-600">
              Brand: {product.brand}
            </p>
            <p className="mt-2 text-xl font-light text-gray-600">
              Category: {product.category}
            </p>
            <p className="mt-2 text-xl font-normal text-gray-600">
              Description: {product.description}
            </p>
            <p className="mt-2 text-xl font-medium text-gray-600">
              Rating: {product.rating}
            </p>
          </div>
          <div className="md:w-1/4">
            <div className="">
              <p className="text-2xl font-bold text-red-400 mb-10">
                Price: ${product.price}
              </p>
              <button
                onClick={handleCart}
                className="bg-red-400 p-4 w-full text-white rounded-lg"
              >
                <Link href="/cart">Add to Cart</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductScreen;
