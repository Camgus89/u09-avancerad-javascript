import React from 'react'
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>

<section class="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
          <img
            src="#"
            alt=""
            className="w-full"
          />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <Link
                to="#"
                classn="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                50+ Best creative website themes & templates
              </Link>
            </h3>
            <p class="text-body-color mb-7 text-base leading-relaxed">
              Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
              Lorem consectetur adipiscing elit.
            </p>
            <Link
                to="#"
                class="bg-purple-700 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-purple-500 sm:px-10 lg:px-8 xl:px-10"
                >
                View Details
            </Link>
          </div>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
          <img
            src=""
            alt=""
            className="w-full"
          />
          <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <Link
                to="#"
                class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                The ultimate UX and UI guide to card design
              </Link>
            </h3>
            <p class="text-body-color mb-7 text-base leading-relaxed">
              Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
              Lorem consectetur adipiscing elit.
            </p>
            <Link
                to="#"
                class="bg-purple-700 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-purple-500 sm:px-10 lg:px-8 xl:px-10"
                >
                View Details
            </Link>
          </div>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
          <img
            src=""
            alt=""
            className="w-full"
          />
          <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <Link
                to="#"
                class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                Creative Card Component designs graphic elements
              </Link>
            </h3>
            <p class="text-body-color mb-7 text-base leading-relaxed">
              Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
              Lorem consectetur adipiscing elit.
            </p>
            <Link
                to="#"
                class="bg-purple-700 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-purple-500 sm:px-10 lg:px-8 xl:px-10"
                >
                View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Products
