import React from "react";
import dashBoardImage from "../../../images/dashboard.jpeg";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";

const Services = () => {
  const dashBoardImageStyle = {
    backgroundImage: `url(${dashBoardImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      <div className="font-poppins overflow-x-hidden">
        <div
          className="relative pt-[120px] pb-[110px] lg:pt-[500px] bg-[#000000]"
          style={dashBoardImageStyle}>
          <div className="">
            <div className="">
              <div className="w-full px-3 lg:w-5/12">
                <div className="hero-content">
                  <section class="relative z-10 py-20 sm:px-20 sm:py-40">
                    <div class="container mx-auto">
                      <div class="-mx-4 flex flex-wrap">
                        <div class="w-full px-4">
                          <div class="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white bg-opacity-25 py-16 px-10 text-center sm:px-12 md:px-[60px]">
                            <div class="mb-10 text-center md:mb-16">
                              <h1 className="text-black mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                {!!user && <h1>Welcome {user.name}! </h1>}
                              </h1>
                            </div>
                            <Link
                              to="/"
                              className="hover:bg-purple-500 my-1 mr-4 inline-block rounded bg-purple-700 py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-100 md:px-9 lg:px-6 xl:px-9">
                              Börja shoppa
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="hidden px-4 lg:block lg:w-1/12"></div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="lg:ml-auto lg:text-right">
                  <div className="relative z-10 inline-block pt-11 lg:pt-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
