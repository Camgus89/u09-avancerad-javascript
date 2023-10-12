import React from 'react';
import { Link } from 'react-router-dom'
import heroImage from '../../images/heroImage.jpg';

const Herosection = () => {
  return (
    <div className='font-poppins'>

      {/* components from tailgrids */}

<div class="relative pt-[120px] pb-[110px] lg:pt-[150px] bg-[#000000]">
  <div class="container mx-auto px-10">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4 lg:w-5/12">
        <div class="hero-content">
          <h1
              class="text-transparent bg-clip-text bg-gradient-to-r sm:text-8xl text-2xl from-blue-400 to-emerald-600 mb-3  font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                  VapeHouse 
                  <br />
                  <span className='text-7xl'>
                    Älvsjö bla vla vla vla bla bla bla
                    </span>
          </h1>
          <p class="text-white text-sm mb-8 max-w-[480px] sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
            tristique urna in dui vehicula, et condimentum libero suscipit. 
            Nullam id aliquam metus. Integer laoreet nunc in ligula rhoncus, 
            </p>
          
          <ul class="flex flex-wrap items-center">
                    <li>
                      <Link
                        to="#"
                        class="bg-blue-400 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-blue-500 sm:px-10 lg:px-8 xl:px-10"
                      >
                        Get Started
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        class="bg-blue-200/80 ml-6 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-black font-normal hover:bg-blue-200 sm:px-10 lg:px-8 xl:px-10"
                      >
                        Take a look
                      </Link>
                    </li>
                  </ul>

        </div>
      </div>
      <div class="hidden px-4 lg:block lg:w-1/12"></div>
      <div class="w-full px-4 lg:w-6/12">
        <div class="lg:ml-auto lg:text-right">
          <div class="relative z-10 inline-block pt-11 lg:pt-0">
            
          <img
                    src={heroImage}
                    alt="hero"
                    class="max-w-full lg:ml-auto rounded-l-[20%] rounded-br-[6%]"
                  />
            <span class="absolute -left-8 -bottom-8 z-[-1]">
              <svg
                width="93"
                height="93"
                viewBox="0 0 93 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* components from tailgrids end */}
    </div>
  );
}

export default Herosection;
