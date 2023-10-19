import React from 'react'
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>

<section class="bg-purple-50 pt-10 pb-10 lg:pt-[50px] lg:pb-20">
<div>
<h2 className="text-3xl font-bold tracki text-center sm:text-5xl">Vape/E-cigaretter</h2>
<p className="max-w-3xl mx-auto mt-4 text-xl text-center">Ett brett sortiment av Stockholms bästa Vapes!</p>
</div>
<br/>
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
          <img
            src="https://i0.wp.com/www.vapehuset.se/wp-content/uploads/2021/11/nonenew5.png?resize=350%2C350&ssl=1"
            alt=""
            className="w-full"
          />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
            <Link
                to="#"
                class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                N One Engångs Vape
              </Link>
            </h3>
            <p class="text-body-color mb-7 text-base leading-relaxed">
            N One Engångs Vapes / Disposables finns nu tillgängliga i 21 
            olika smaker och har genomgått en betydande uppdatering. 
            </p>
            <Link
                to="#"
                class="bg-purple-700 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-purple-500 sm:px-10 lg:px-8 xl:px-10"
                >
                Välj alternativ
            </Link>
          </div>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
          <img
            src="https://i0.wp.com/www.vapehuset.se/wp-content/uploads/2021/11/nonenew5.png?resize=350%2C350&ssl=1"
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
                Välj alternativ
            </Link>
          </div>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
          <img
            src="https://i0.wp.com/www.vapehuset.se/wp-content/uploads/2021/11/nonenew5.png?resize=350%2C350&ssl=1"
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
                Välj alternativ
            </Link>
          </div>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
          <img
            src="https://i0.wp.com/www.vapehuset.se/wp-content/uploads/2021/11/nonenew5.png?resize=350%2C350&ssl=1"
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
                Välj alternativ
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
