import React from 'react'
import {FaFacebookSquare, FaInstagram, FaApplePay} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className="overflow-x-hidden max-w-screen font-poppins">
      {/* footer top section */}
      <div className="sm:flex justify-between py-10 px-8 grid bg-gray-900">
        <div className="text-white">
          <h1 className="w-full text-3xl font-bold cursor-pointer text-purple-400">
            VapeHouse Älvsjö
          </h1>
          <p className="py-4">
          Här på VapeHouse Älvsjö erbjuder vi ett brett utbud av e-cigaretter, 
          skräddarsydda för att passa dina unika preferenser. 
          </p>
        </div>
        <div className="text-white sm:w-[900px] sm:ml-[18%] sm:mr-[12%] sm:pt-0">
          <div>
            <p className="sm:w-[30rem] md:text-4xl sm:text-3xl text-center text-2xl font-bold py-2">
            Prenumerera på vårt nyhetsbrev
            </p>
          </div>
          <div className="my-4">
            <div className="justify-center flex">
              <input
                className="placeholder:pl-2 flex sm:mr-[-50px] h-10 sm:w-[50%]  sm:h-[35px] mx-auto rounded-md text-black"
                type="email"
                placeholder="Email"
              />
              <button className="bg-purple-400 mx-auto w-28 hover:bg-purple-500 rounded-md font-medium">
              Prenumerera
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
      <div className="sm:mx-auto pt-10 pb-8 sm:grid flex-row lg:grid-cols-3 w-screen gap-8 text-gray-300 bg-gray-800 ">
        <div className="lg:col-span-3 sm:mr-20  flex justify-between max-w-screen sm:ml-20 ml-[12px] mb-4 sm:mb-0 ">
          <div className="pr-4">
            <h6 className="font-medium text-purple-400">BUTIKENS ÖPPETTIDER</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                <span className='font-bold'>Mån-fre</span> 10:00-18:00
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Lör-sön 10:00-17:00
              </li>
            </ul>
          </div>
          <div className="pr-4">
            <h6 className="font-medium text-purple-400">HITTA OSS</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer font-semibold">
              Älvsjövägen 4,
              125 34 Älvsjö
              </li>
            </ul>
          </div>
          <div className="pr-4">
            <h6 className="font-medium text-purple-400">FÖLJ OSS</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer font-semibold">
              <FaFacebookSquare size={30} className="cursor-pointer " />
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
              <FaInstagram size={30} className="cursor-pointer " />
              </li>
            </ul>
          </div>
          <div className="pr-4">
            <h6 className="font-medium text-purple-400">BETALNING</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer font-semibold">
              <FaApplePay size={30} className="cursor-pointer " />
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
              Kort
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">Swish</li>
            </ul>
          </div>
        </div>
        <div className="w-[310%] h-[2px] bg-gradient-to-r from-purple-800 to-violet-200"></div>
        <p className='pt-4 text-gray-200/40 text-sm flex justify-center text-center'>All Rights Reserved 2023 - VapeHouse Älvsjö</p>
      </div>
      
      {/* footer bottom section with links */}
      <div></div>
      {/* footer bottom section with links end */}
    </div>
  );
}

export default Footer