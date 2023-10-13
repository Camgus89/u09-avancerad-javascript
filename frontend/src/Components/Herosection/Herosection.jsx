import React from 'react';
import { Link } from 'react-router-dom'
import heroImage from '../../images/heroImage.jpg';
// import Stars from '../../images/stars.png';
import {motion} from 'framer-motion';

const Herosection = () => {
  return (
    <div className='font-poppins overflow-x-hidden'>

      {/* components from tailgrids */}

<div class="relative pt-[120px] pb-[110px] lg:pt-[150px] bg-[#000000]">
  <div class="container mx-auto px-10">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4 lg:w-5/12">
        <div class="hero-content">
          
          <motion.div 
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          initial= "hidden"
          animate= "visible"
          transition={{duration: 0.5, delay: 0.25}}
        >
          <h1 class="text-transparent bg-clip-text bg-gradient-to-r sm:text-8xl text-2xl from-purple-900 to-purple-100 mb-3  font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
            VapeHouse 
            <br />
            <span className='sm:text-8xl text-6xl'>
            Älvsjö baaaam
            </span>
          </h1>
          <p class="text-white text-sm mb-8 max-w-[480px] sm:text-base">
          Här på VapeHouse Älvsjö erbjuder vi ett brett utbud av e-cigaretter, 
          skräddarsydda för att passa dina unika preferenser. Vår samling inkluderar 
          allt från kraftfulla vapes som skapar intensiv smak och massiva ångmoln till 
          smidiga och diskreta podsystem.
            </p>
          </motion.div>

          <motion.div           
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -75 },
          }}
          initial= "hidden"
          animate= "visible"
          transition={{duration: 0.5, delay: 0.25}}
        >
          <ul class="flex flex-wrap items-center">
                    <li>
                      <Link
                        to="#"
                        class="bg-purple-700 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-purple-500 sm:px-10 lg:px-8 xl:px-10"
                      >
                        Get Started
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        class="bg-purple-200/80 ml-6 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-black font-normal hover:bg-purple-200 sm:px-10 lg:px-8 xl:px-10"
                      >
                        Take a look
                      </Link>
                    </li>
                  </ul>
          </motion.div>

          {/* <motion.div
                  variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.8, delay: 0.25 }}
                  class="clients pt-16"
                >
                  <h6 class="text-white mb-2 flex items-center text-xs font-normal">
                    Some Of Our Clients
                    <span class="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
                  </h6>
                  <div class="flex items-center">
                    <div class="mr-4 w-full py-3">
                      <img
                        src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                        alt="ayroui"
                      />
                    </div>
                    <div class="mr-4 w-full py-3">
                      <img
                        src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                        alt="graygrids"
                      />
                    </div>
                    <div class="mr-4 w-full py-3">
                      <img
                        src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                        alt="uideck"
                      />
                    </div>
                  </div>
                </motion.div> */}

        </div>
      </div>
      <div class="hidden px-4 lg:block lg:w-1/12"></div>
      <div class="w-full px-4 lg:w-6/12">
        <div class="lg:ml-auto lg:text-right">
          <div class="relative z-10 inline-block pt-11 lg:pt-0">
            
          <motion.div
                  variants={{
                    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                    hidden: { opacity: 0, x: 75, filter: "blur(5px)" },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                  class="relative z-10 inline-block pt-11 lg:pt-0 mt-6"
                >
          <img
              src={heroImage}
              alt="hero"
              class="max-w-full lg:ml-auto rounded-l-[20%] rounded-br-[6%]"
                  />
          {/* <img 
          src={Stars} 
          alt='stars' 
          className='z-20 w-28 absolute mt-[-105%] right-[-5%] opacity-70 hover:opacity-100'
          /> */}

            <span class="absolute -left-8 -bottom-8 z-[-1]">
              <svg
                width="93"
                height="93"
                viewBox="0 0 93 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#7e22ce" />
                <circle cx="2.5" cy="24.5" r="2.5" fill="#7e22ce" />
                <circle cx="2.5" cy="46.5" r="2.5" fill="#7e22ce" />
                <circle cx="2.5" cy="68.5" r="2.5" fill="#7e22ce" />
                <circle cx="2.5" cy="90.5" r="2.5" fill="#7e22ce" />
                <circle cx="24.5" cy="2.5" r="2.5" fill="#7e22ce" />
                <circle cx="24.5" cy="24.5" r="2.5" fill="#7e22ce" />
                <circle cx="24.5" cy="46.5" r="2.5" fill="#7e22ce" />
                <circle cx="24.5" cy="68.5" r="2.5" fill="#7e22ce" />
                <circle cx="24.5" cy="90.5" r="2.5" fill="#7e22ce" />
                <circle cx="46.5" cy="2.5" r="2.5" fill="#7e22ce" />
                <circle cx="46.5" cy="24.5" r="2.5" fill="#7e22ce" />
                <circle cx="46.5" cy="46.5" r="2.5" fill="#7e22ce" />
                <circle cx="46.5" cy="68.5" r="2.5" fill="#7e22ce" />
                <circle cx="46.5" cy="90.5" r="2.5" fill="#7e22ce" />
                <circle cx="68.5" cy="2.5" r="2.5" fill="#7e22ce" />
                <circle cx="68.5" cy="24.5" r="2.5" fill="#7e22ce" />
                <circle cx="68.5" cy="46.5" r="2.5" fill="#7e22ce" />
                <circle cx="68.5" cy="68.5" r="2.5" fill="#7e22ce" />
                <circle cx="68.5" cy="90.5" r="2.5" fill="#7e22ce" />
                <circle cx="90.5" cy="2.5" r="2.5" fill="#7e22ce" />
                <circle cx="90.5" cy="24.5" r="2.5" fill="#7e22ce" />
                <circle cx="90.5" cy="46.5" r="2.5" fill="#7e22ce" />
                <circle cx="90.5" cy="68.5" r="2.5" fill="#7e22ce" />
                <circle cx="90.5" cy="90.5" r="2.5" fill="#7e22ce" />
              </svg>
            </span>
            </motion.div>
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
