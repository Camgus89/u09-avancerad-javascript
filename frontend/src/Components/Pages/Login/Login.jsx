import React, { useContext } from "react";
import axios from "axios";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { create } from "zustand";
import { UserContext } from "../../../context/userContext";

const useAuthStore = create((set) => ({
  email: "",
  password: "",
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
}));

const Login = () => {
  const navigate = useNavigate();
  const { email, password, setEmail, setPassword } = useAuthStore();
  const { setUser } = useContext(UserContext); // Hämta setUser från context


  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setEmail(""); // Återställ e-post
        setPassword(""); // Återställ lösenord
        setUser(data); // Uppdatera användaren i context
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

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
                      Login
                    </h1>
                  </div>

                  <form onSubmit={loginUser}>
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                      />
                    </div>
                    <div className="mb-10">
                      <input
                        type="submit"
                        value="Logga in"
                        className="bg-purple-800 hover.bg-purple-500 border-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                      />
                    </div>
                  </form>
                  <p className="mb-6 text-base text-[#adadad]">Logga in med:</p>
                  <ul className="-mx-2 mb-12 flex justify-between">
                    {/* Dina sociala inloggningssymboler här */}
                  </ul>
                  <a
                    href="/"
                    className="mb-2 inline-block text-base text-[#adadad] hover.text-purple-800 hover:underline"
                  >
                    Glömt lösenord?
                  </a>
                  <p className="text-base text-[#adadad]">
                    <span className="pr-0.5">Inte medlem? </span>
                    <a
                      href="/register"
                      className="hover.underline text-purple-800"
                    >
                      Registrera dig
                    </a>
                  </p>
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

export default Login;
