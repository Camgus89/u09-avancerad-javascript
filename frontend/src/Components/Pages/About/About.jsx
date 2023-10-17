import React, { useEffect, useRef } from "react";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import { useAnimation, useInView, motion } from "framer-motion";

const About = () => {
    const { innerWidth: Width } = window;
    const ref = useRef();
    const isInView = useInView(ref);
    const mainControlls = useAnimation();
    useEffect(() => {
      if (isInView) {
        mainControlls.start("visible");
      }
    }, [isInView]);
  return (
    <div>
      <Navbar />
      <div className="max-w-screen overflow-hidden font-poppins">
        <div className="sm:h-screen h-[80rem] -mb-80 sm:mb-0 bg-white pt-20">
          <div className="mt-5">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex justify-center text-center"
            >
              <h1 className="flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-400 font-extrabold text-[3rem]">
                Besök oss här
              </h1>
              
            </motion.div>
            <p className="flex justify-center text-center sm:text-2xl text-2xl">
            Älvsjövägen 4,<br/>
            125 34 Älvsjö
          </p>
            <div className="flex justify-center mt-10" id="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2038.2609867573071!2d18.00339407737451!3d59.27849491508851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77f7c4659a1b%3A0xd2355a7ef0f0b1bd!2zw4RsdnNqw7YgYmlsdmVya3N0YWQ!5e0!3m2!1ssv!2sse!4v1697525167643!5m2!1ssv!2sse"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-screen sm:mx-36 mx-10 h-[30rem]"
            ></iframe>
          </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About
