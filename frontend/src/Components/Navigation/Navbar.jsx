import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaDoorOpen,
  FaShoppingBasket,
  FaRegUser,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-screen overflow-x-hidden font-poppins">
      <nav className="bg-black fixed px-3 h-auto w-full lg:w-screen z-20 left-0 right-0 top-0 border-b border-purple-950">
        {/* dektop nav */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:p-4 pb-3 pt-3">
          <button onClick={() => setOpen(!open)} className="sm:hidden block">
            <GiHamburgerMenu
              size={40}
              className="p-1 mt-2 mr-1 text-purple-500"
            />
          </button>
          <Link to="/" className="flex items-center">
            <span className="mt-2 sm:mt-0 text-white font-semibold text-xl mr-1 sm:ml-2">
              VapeHouse Älvsjö
            </span>
            <div className="flex">
              <Link to="/login">
                <FaRegUser
                  size={28}
                  className="p-1 mt-1 text-white hover:text-purple-500"
                />
              </Link>
              <Link to="/shoppingcart">
                <FaShoppingBasket
                  size={28}
                  className="p-1 mt-1 ml-2 text-white hover:text-purple-500"
                />
              </Link>
              <Link to="/logout">
                <FaDoorOpen
                  size={28}
                  className="p-1 mt-1 ml-2 text-white hover:text-purple-500"
                />
              </Link>
            </div>
          </Link>
          <div className="flex">
            <ul className="sm:flex justify-center hidden">
              <li className="p-2 mr-4 text-white hover:text-purple-500 cursor-pointer">
                <Link to="/">Start</Link>
              </li>
              <li className="p-2 mr-4 text-white hover:text-purple-500 cursor-pointer">
                <Link to="/about">Hitta oss</Link>
              </li>
              <li className="p-2 text-white hover:text-purple-500 cursor-pointer">
                <Link to="/contact">Kontakta oss</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* desktop nav end */}

        <div className={`${open ? null : "hidden"} `}>
          <div className="p-3 space-y-2 w-60 bg-black text-gray-100">
            <div className="flex items-center p-2 space-x-4">
              <div>
                <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
              </div>
            </div>
            <div className="divide-y divide-purple-950">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="/dashboard"
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-purple-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current text-gray-400">
                      <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                    </svg>
                    <span>Mitt konto</span>
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="/about"
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-purple-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current text-gray-400 ">
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                    <span>Hitta oss</span>
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="/contact"
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-purple-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current text-gray-400 ">
                      <path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
                      <path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
                      <path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
                    </svg>
                    <span>Kontakta oss</span>
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="/whishlist"
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-purple-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current text-gray-400">
                      <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                    </svg>
                    <span>Wishlist</span>
                  </a>
                </li>
              </ul>
              <ul className="pt-4 pb-2 space-y-1 text-sm">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="/logout"
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-purple-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current text-gray-400 ">
                      <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                      <rect width="32" height="64" x="256" y="232"></rect>
                    </svg>
                    <span>Logga ut</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
