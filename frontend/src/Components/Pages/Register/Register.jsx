import React from 'react';
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";

const Register = () => {
  return (
    <div>
      <Navbar />
<div className="max-w-screen font-poppins overflow-hidden ">
<section class="relative z-10 bg-gradient-to-br from-purple-100  py-20  sm:px-20 sm:py-40">
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4">
        <div
          class="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"
        >
          <div class="mb-10 text-center md:mb-16">
          <h1 className='text-black mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]'>Register</h1>  
          </div>
          <form>
            <div class="mb-6">
              <input
                type="text"
                placeholder="Email"
                class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
            <div class="mb-6">
              <input
                type="password"
                placeholder="Password"
                class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
            <div class="mb-6">
              <input
                type="password"
                placeholder="Confirmn Password"
                class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
            <div class="mb-10">
              <input
                type="submit"
                value="Registrera"
                class="bg-purple-800 hover:bg-purple-500 border-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
              />
            </div>
          </form>
          <p class="text-base text-[#adadad]">
            <span class="pr-0.5">Redan medlem?</span>
            <a href="/login" class="text-purple-800 hover:underline">
              Logga In
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
}

export default Register;
