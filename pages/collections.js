import Header from "@/Components/Header";
import ProductItem from "@/Components/ProductItem";
import data from "@/Utils/data";
import React from "react";

const Collections = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* hero content */}
      <div className="custom-img h-80 flex items-center justify-center">
        <div className="absolute top-0 left-0 right-0 bottom-60 md:bottom-96 bg-black/40 z-[2]"></div>
        <div className=" text-white z-[2]">
          <h1 className="text-2xl md:text-4xl font-bold my-16 text-white text-center">
            Our Collections
            <div className=" border-red-400 border-2 w-24 mt-5 mx-auto"></div>
          </h1>
        </div>
      </div>
      {/* main part */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 m-6 md:m-16">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default Collections;
