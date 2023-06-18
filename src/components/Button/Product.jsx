import React from "react";

export const Product = () => {
  return (
    <div className="h-screen">
      <div class="flex flex-col m-auto p-auto">
        <h1 class="flex px-32 pb-10 text-5xl font-bold text-center md:text-left min-[320px]:text-center max-[600px]:text-lg">
          Product
        </h1>
        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div class="flex flex-nowrap lg:ml-20 md:ml-20 ml-4 ">
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
