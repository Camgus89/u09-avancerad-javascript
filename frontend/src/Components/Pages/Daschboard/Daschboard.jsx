import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

const Daschboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Navbar />
      <div className="max-w-screen font-poppins overflow-hidden ">
        <section class="relative z-10 bg-gradient-to-br from-purple-100  py-20  sm:px-20 sm:py-40">
          <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap">
              <div class="w-full px-4">
                <div class="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
                  <div class="mb-10 text-center md:mb-16">
                    <h1 className="text-black mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                      Daschboard
                    </h1>
                    {!!user && <h1>Welcome {user.name}! </h1>}
                  </div>
                  <Link
                        to="/"
                        className="hover:bg-purple-500 my-1 mr-4 inline-block rounded bg-purple-700 py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-100 md:px-9 lg:px-6 xl:px-9"
                      >
                        Börja shoppa
                      </Link>
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

export default Daschboard;
