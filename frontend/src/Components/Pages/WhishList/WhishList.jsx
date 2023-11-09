import React from "react";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";

const WhishList = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen font-poppins overflow-hidden ">
        <section className="relative z-10 bg-gradient-to-br from-purple-100  py-20  sm:px-20 sm:py-40">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
                  <div className="mb-10 text-center md:mb-16">
                    <h1 className="text-black mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                      You wish, i wish! 
                    </h1>
                    <h2>Make a VapeList instead!</h2>
                  </div>

                  <div className="mb-10">
                    <input
                      type="submit"
                      value="Logga in"
                      className="bg-purple-800 hover.bg-purple-500 border-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default WhishList;
