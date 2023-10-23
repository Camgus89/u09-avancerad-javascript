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
        <section className="relative z-10 py-20 ">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
                  <div className="mb-10 text-center md:mb-16">
                    <h1 className="text-black mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                    {!!user && <h1> HEJ {user.name}! </h1>}
                    </h1>
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
