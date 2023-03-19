import { Store } from "@/Utils/Store";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const Header = () => {
  const { state } = useContext(Store);
  const { cart } = state;

  const [nav, setNav] = useState(false);
  const [clr, setClr] = useState("transparent");
  const [txtclr, setTxtclr] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeClr = () => {
      if (window.scrollY >= 90) {
        setClr("#ffffff");
        setTxtclr("#000000");
      } else {
        setClr("transparent");
        setTxtclr("#ffffff");
      }
    };
    window.addEventListener("scroll", changeClr);
  }, []);

  return (
    <div>
      <div
        style={{ backgroundColor: `${clr}` }}
        className="fixed left-0 top-0 w-full z-10 ease-in duration-300 shadow-lg"
      >
        <div className="max-w-[1240px]  m-auto flex justify-between items-center p-4 text-white">
          <div>
            <Link href="/">
              <h1
                // style={{ color: `${txtclr}` }}
                className="font-bold text-2xl md:text-4xl text-red-400"
              >
                Door Next Store
              </h1>
            </Link>
          </div>
          <div className="">
            <ul style={{ color: `${txtclr}` }} className="hidden sm:flex ">
              <li className="p-4 hover:bg-red-500 rounded-md hover:text-white">
                <Link href="/">Home</Link>
              </li>
              <li className="p-4 hover:bg-red-500 rounded-md hover:text-white">
                <Link href="/collections">Collections</Link>
              </li>

              <li className="p-4 hover:bg-red-500 rounded-md hover:text-white">
                <Link href="/cart">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                </Link>
              </li>
              <li className="p-4 hover:bg-red-500 rounded-md hover:text-white">
                <Link href="/work">Contact</Link>
              </li>
              <li className="p-4 bg-red-400 hover:bg-red-500 rounded-md hover:text-white">
                <Link href="/contact">Login</Link>
              </li>
            </ul>
          </div>

          {/* mbl btn */}
          <div onClick={handleNav} className="block sm:hidden z-10">
            {nav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                // style={{ color: `${txtclr}` }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                style={{ color: `${txtclr}` }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>

          {/* mbl menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            }
          >
            <ul>
              <li onClick={handleNav} className="p-4 text-4xl">
                <Link href="/">Home</Link>
              </li>
              <li onClick={handleNav} className="p-4 text-4xl">
                <Link href="/collection">Collections</Link>
              </li>
              <li onClick={handleNav} className="p-4 text-4xl">
                <Link href="/work">Cart</Link>
              </li>
              <li onClick={handleNav} className="p-4 text-4xl">
                <Link href="/contact">Login</Link>
              </li>
              <li onClick={handleNav} className="p-4 text-4xl">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
