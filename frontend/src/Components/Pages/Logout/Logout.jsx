import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import { UserContext } from "../../../context/userContext";

const Logout = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);

    navigate("/login");
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-screen font-poppins overflow-hidden">
        <section className="relative z-10 py-20">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
                  <div className="mb-10 text-center md:mb-16">
                    <h1 className="text-black mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                      Är du säker på att du vill logga ut?
                    </h1>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="hover:bg-purple-500 my-1 mr-4 inline-block rounded bg-purple-700 py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-100 md:px-9 lg:px-6 xl:px-9">
                    Ja, Logga ut mig
                  </button>
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

export default Logout;
