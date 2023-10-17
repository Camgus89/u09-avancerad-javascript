import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../../images/heroImage.jpg'; 

const Herosection = () => {
  const heroImageStyle = {
    backgroundImage: `url(${heroImage})`, 
    backgroundSize: 'cover', // Change this to adjust image size
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='font-poppins overflow-x-hidden'>
      <div className="relative pt-[120px] pb-[110px] lg:pt-[150px] bg-[#000000]" style={heroImageStyle}>
        <div className="container mx-auto px-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <motion.div 
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <h1 className="text-transparent bg-clip-text bg-gradient-to-r sm:text-8xl text-2xl from-purple-800 to-purple-200 mb-3  font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                    VapeHouse 
                    <br />
                    <span className='sm:text-8xl text-6xl'>
                      Älvsjö
                    </span>
                  </h1>
                </motion.div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <motion.div
                    variants={{
                      visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                      hidden: { opacity: 0, x: 75, filter: "blur(5px)" },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="relative z-10 inline-block pt-11 lg:pt-0 mt-6"
                  >
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
