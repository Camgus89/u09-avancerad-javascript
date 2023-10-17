import React, {useEffect, useRef} from 'react';
import image1 from '../../src/images/Features/fb11.jpg';
import image2 from '../../src/images/Features/fb22.png';
import { inView, useAnimation, useInView, motion } from 'framer-motion';

const Features = () => {
    // const { innerWidth: width, innerHeight: height } = window;
    // const ref = useRef(null);
    // const isInView = useInView(ref);
  
    // const mainControlls = useAnimation();
  
    // useEffect(() => {
    //   if (isInView) {
    //     mainControlls.start("visible");
    //   }
    // }, [isInView])
  return (
	<div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
//     <>

//     <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
//      <div className='max-w-screen overflow-x-hidden font-poppins'>
//         {/* features section */}
//         {width < 631 ? (<><section className="text-black">
// 	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
// 		<div>
// 			<h2 className="text-3xl font-bold tracki text-center sm:text-5xl">Vape/E-cigaretter</h2>
// 			<p className="max-w-3xl mx-auto mt-4 text-xl text-center">Ett brett sortiment av Stockholms bästa Vapes!</p>
// 		</div>
// 		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
// 			<div>
// 				<p className="mt-3 text-lg">Här på VapeHouse Älvsjö erbjuder vi ett brett utbud av e-cigaretter, 
//                     skräddarsydda för att passa dina unika preferenser. Vår samling inkluderar 
//                     allt från kraftfulla vapes som skapar intensiv smak och massiva ångmoln till 
//                     smidiga och diskreta podsystem.</p>
// 				<div className="mt-12 space-y-12">
// 					<div 
//                         className="flex">
// 						<div className="flex-shrink-0">
// 							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
// 							</div>
// 						</div>
// 					</div>
// 					<div 
//                     className="flex">
// 						<div className="flex-shrink-0">
// 							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
// 							</div>
// 						</div>
// 						<div className="ml-4">
// 						</div>
// 					</div>
// 					<div 
//                     className="flex">
// 						<div className="flex-shrink-0">
// 							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div            
//                 aria-hidden="true" 
//                 className="mt-10 lg:mt-0"
//                 >
// 				<img 
//                 src={image1} 
//                 alt="image1" 
//                 className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop:shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
// 			</div>
// 		</div>
// 		<div>
// 			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
// 				<div className="lg:col-start-2">
// 					<div className="mt-12 space-y-12">
// 						<div
//                         className="flex">
// 							<div className="flex-shrink-0">
// 								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                           
// 								</div>
// 							</div>
							
// 						</div>

// 						<div
//                         className="flex">
// 							<div className="flex-shrink-0">
// 								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
// 								</div>
// 							</div>
// 						</div>

// 						<div                       
//                         className="flex">
// 							<div className="flex-shrink-0">
// 								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div 
//                 className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
// 					<img 
//                     src={image2} 
//                     alt="image2" 
//                     className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop:shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
//                     </div>
// 			</div>
// 		</div>
// 	</div>
// </section>
// </>
// ) : (
// <>
// <section className="text-black">
// 	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
// 		<div>
// 			<h2 className="text-3xl font-bold tracki text-center sm:text-5xl">Vape/E-cigaretter</h2>
// 			<p className="max-w-3xl mx-auto mt-4 text-xl text-center">Ett brett sortiment av Stockholms bästa Vapes!</p>
// 		</div>
// 		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
// 			<div>
// 				<div className="mt-12 space-y-12">
// 					<motion.div 
//                         ref={ref}
//                         variants={{
//                         hidden: {opacity: 0, y: 75 },
//                         visible: {opacity: 1, y: 0 }
//                         }}
//                         initial="hidden"
//                         animate={mainControlls}
//                         transition={{duration: 0.5, delay: 0.25}}
//                         className="flex">
// 						<div className="flex-shrink-0">
// 							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
// 							</div>
// 						</div>
// 					</motion.div>
// 					<motion.div 
//                         ref={ref}
//                         variants={{
//                         hidden: {opacity: 0, y: 75 },
//                         visible: {opacity: 1, y: 0 }
//                         }}
//                         initial="hidden"
//                         animate={mainControlls}
//                         transition={{duration: 0.5, delay: 0.25}}
//                     className="flex">
// 						<div className="flex-shrink-0">
// 							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
// 							</div>
// 						</div>
// 						<div className="ml-4">
// 							<h4 className="text-lg font-medium leadi">Här på VapeHouse Älvsjö erbjuder vi ett brett utbud av e-cigaretter, 
//                     skräddarsydda för att passa dina unika preferenser. Vår samling inkluderar 
//                     allt från kraftfulla vapes som skapar intensiv smak och massiva ångmoln till 
//                     smidiga och diskreta podsystem.</h4>
// 						</div>
// 					</motion.div>
// 					<motion.div 
//                         ref={ref}
//                         variants={{
//                         hidden: {opacity: 0, y: 75 },
//                         visible: {opacity: 1, y: 0 }
//                         }}
//                         initial="hidden"
//                         animate={mainControlls}
//                         transition={{duration: 0.5, delay: 0.35}}
//                     className="flex">
// 						<div className="flex-shrink-0">
// 							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
// 							</div>
// 						</div>
// 					</motion.div>
// 				</div>
// 			</div>
// 			<motion.div 
//                 ref={ref}
//                 variants={{
//                 hidden: {opacity: 0, x: 75 },
//                 visible: {opacity: 1, x: 0 }
//                 }}
//                 initial="hidden"
//                 animate={mainControlls}
//                 transition={{duration: 0.5, delay: 0.25}}            
//                 aria-hidden="true" 
//                 className="mt-10 lg:mt-0"
//                 >
// 				<img 
//                 src={image1} 
//                 alt="image1" 
//                 className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop:shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
// 			</motion.div>
// 		</div>
// 		<div>
// 			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
// 				<div className="lg:col-start-2">
// 					<div className="mt-12 space-y-12">
// 						<motion.div
//                             ref={ref}
//                             variants={{
//                             hidden: {opacity: 0, y: -75 },
//                             visible: {opacity: 1, y: 0 }
//                             }}
//                             initial="hidden"
//                             animate={mainControlls}
//                             transition={{duration: 0.5, delay: 0.15}}
//                         className="flex">
// 							<div className="flex-shrink-0">
// 								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
//        						</div>
// 							</div>
					
// 						</motion.div>

// 						<motion.div
//                             ref={ref}
//                             variants={{
//                             hidden: {opacity: 0, y: -75 },
//                             visible: {opacity: 1, y: 0 }
//                             }}
//                             initial="hidden"
//                             animate={mainControlls}
//                             transition={{duration: 0.5, delay: 0.35}}
//                         className="flex">
// 							<div className="flex-shrink-0">
// 								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
// 								</div>
// 							</div>

// 						</motion.div>

// 						<motion.div 
//                          ref={ref}
//                          variants={{
//                          hidden: {opacity: 0, y: -75 },
//                          visible: {opacity: 1, y: 0 }
//                          }}
//                          initial="hidden"
//                          animate={mainControlls}
//                          transition={{duration: 0.5, delay: 0.55}}                       
//                         className="flex">
// 							<div className="flex-shrink-0">
// 							</div>
// 						</motion.div>
// 					</div>
// 				</div>
// 				<motion.div 
//                     ref={ref}
//                     variants={{
//                     hidden: {opacity: 0, x: -75 },
//                     visible: {opacity: 1, x: 0 }
//                     }}
//                     initial="hidden"
//                     animate={mainControlls}
//                     transition={{duration: 0.5, delay: 0.25}}
//                 className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
// 					<img 
//                     src={image2} 
//                     alt="image2" 
//                     className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop:shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
//                     </motion.div>
// 			</div>
// 		</div>
// 	</div>
// </section></>)}
        
//         {/* end */}
//     </div>
//     <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>

//     </>

  );
}

export default Features;
