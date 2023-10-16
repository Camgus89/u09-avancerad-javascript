import React from 'react'
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="overflow-x-hidden max-w-screen font-poppins">
      {/* footer top section */}
      <div className="sm:flex justify-between py-10 px-8 grid bg-black">
        <div className="text-white">
          <h1 className="w-full text-3xl font-bold cursor-pointer text-white">
            VapeHouse Älvsjö
          </h1>
          <div className="flex md:w-[75%] justify-between my-6 text-purple-400">
            {/* social media icons */}
            <FaFacebookSquare size={30} className="cursor-pointer " />
            <FaInstagram size={30} className="cursor-pointer " />
          </div>
        </div>
        <div className="text-white sm:w-[900px] sm:ml-[18%] sm:mr-[12%] sm:pt-0">
          <div>
            <h1 className="sm:w-[30rem] md:text-4xl sm:text-3xl text-center text-2xl font-bold py-2">
            Sign up to our newsletter and stay up to date.
            </h1>
          </div>
          <div className="my-4">
            <div className="justify-center flex">
              <input
                className="placeholder:pl-2 flex sm:mr-[-50px] h-10 sm:w-[50%]  sm:h-[35px] mx-auto rounded-md text-black"
                type="email"
                placeholder="Enter Your E-Mail"
              />
              <button className="bg-purple-400 mx-auto w-28 hover:bg-purple-500 rounded-md font-medium">
                Sign UP
              </button>
            </div>
            <p className="text-sm mx-10 flex-col text-center pt-4">
              Wee care about the protection of your data. Read our{" "}
              <span className="underline cursor-pointer text-purple-400">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* footer top section end */}
      <div className="sm:mx-auto pt-10 pb-8 sm:grid flex-row lg:grid-cols-3 w-screen gap-8 text-gray-300 bg-gray-900 ">
        <div className="lg:col-span-3 sm:mr-20  flex justify-between max-w-screen sm:ml-20 ml-[12px] mb-4 sm:mb-0 ">
          <div className="pr-4">
            <h6 className="font-medium text-purple-400">Solutions</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Analytics
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Marketing
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Ecommerce
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Insights
              </li>
            </ul>
          </div>
          <div className="pr-4">
            <h6 className="font-medium text-purple-400">Support</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Pricing
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Documentation
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Guides
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">API</li>
            </ul>
          </div>
          <div className="pr-4">
            <h6 className="font-medium text-purple-400">Company</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                About
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Blog
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Jobs
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Careers
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Press
              </li>
            </ul>
          </div>
          <div className="pr-4">
            <h6 className="font-medium text-purple-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Claim
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Policy
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Terms
              </li>
            </ul>
          </div>
        </div>
        <div className="h-[1px] bg-gray-100/20 w-[100rem] ml-[-20rem]"></div>
        <p className='pt-4 text-gray-200/40 text-sm flex justify-center text-center'>All Rights Reserved 2023 - VapeHouse Älvsjö</p>
      </div>
      {/* footer bottom section with links */}
      <div></div>
      {/* footer bottom section with links end */}
    </div>
  );
}

export default Footer