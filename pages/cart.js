import Layout from "@/Components/Layout";
import { Store } from "@/Utils/Store";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const Cart = () => {
  const { state, dispatch } = useContext(Store);

  const {
    cart: { cartItems },
  } = state;

  const removeItem = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  return (
    <Layout>
      <div className="max-w-[1240px] m-auto md:p-6">
        {/* hero content */}
        <div className="absolute top-0 left-0 right-0 bottom-[490px] md:bottom-[625px] bg-black z-[2]"></div>
        <div className="text-left text-xl md:text-5xl font-bold text-black my-5">
          <h1>Shopping Cart</h1>
          <div className="flex my-10 text-xs md:text-xl font-light">
            <div>
              <Link href="/">Home</Link> /{" "}
            </div>
            <div>
              {" "}
              <Link href="/collections">Collections</Link> /
            </div>
            <div>
              <Link href="/cart" className="underline">
                {" "}
                Cart
              </Link>
            </div>
          </div>
        </div>
        {/* table */}
        {cartItems.length === 0 ? (
          <div>
            Cart is empty.{" "}
            <Link href="/" className="underline">
              Go shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-5">
            <div className="block md:overflow-x-auto col-span-1 md:col-span-3">
              <table className=" md:min-w-full ">
                <thead className="border-b">
                  <tr>
                    <th className="p-5 text-left">Item</th>
                    <th className="p-5 text-right">Quantity</th>
                    <th className="p-5 text-right">Price</th>
                    <th className="p-5">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.slug} className="border-b">
                      <td>
                        <Link
                          className="flex items-center"
                          href={`/product/${item.slug}`}
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                          ></Image>
                          &nbsp;
                          {item.name}
                        </Link>
                      </td>
                      <td className="p-5 text-right">{item.quantity}</td>
                      <td className="p-5 text-right">${item.price}</td>
                      <td className="p-5 text-center">
                        <button onClick={() => removeItem(item)}>
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
                              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-5 text-left">
              <p className="text-center text-2xl font-bold">Order Summary</p>
              <p className="text-sm text-gray-600 my-10 font-medium border-b">
                Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) :
                &nbsp; $
                {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
              </p>
              <p className="text-xl text-gray-600 my-10 font-medium border-b">
                Total ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : &nbsp;
                ${cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
              </p>
              <div className="text-center">
                <button className="px-24  py-2 bg-black hover:bg-green-400 rounded-full text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
