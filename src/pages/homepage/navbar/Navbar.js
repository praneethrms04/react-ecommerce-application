import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="bg-white border items-center p-4">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2">
            <p className=" text-[18px] font-bold cursor-pointer flex ">
              Ecommerce &nbsp;
              <span className="sm:block hidden"> | Shop Now</span>
            </p>
          </Link>

          <ul className="list-none hidden sm:flex flex-row items-center gap-4 ">
            <Link to="/products">
              <li className=" hover:text-[#FDD36A] text-[18px] font-medium cursor-pointer">
                products
              </li>
            </Link>
            <Link to="/login">
              <li className=" hover:text-[#FDD36A] text-[18px] font-medium cursor-pointer">
                Login
              </li>
            </Link>
            <Link to="/cart-page">
              <li className=" hover:text-[#FDD36A] text-[18px] flex font-medium cursor-pointer me-8 mt-1 flex-row">
                Cart
                <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span class="absolute  right-60 top-2 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                  5
                </span>
              </li>
            </Link>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <p onClick={() => setToggle(!toggle)}>
              {toggle ? "close" : "open"}
            </p>

            <div
              className={`${!toggle ? "hidden" : "flex"
                } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                <Link to="/products">
                  <li className=" hover:text-[#FDD36A] text-[18px] font-medium cursor-pointer">
                    products
                  </li>
                </Link>
                <Link to="/cart-page">
                  <li className=" hover:text-[#FDD36A] text-[18px] flex font-medium cursor-pointer me-8 flex-row">
                    Cart
                    <svg
                      class="flex-1 w-8 h-8 fill-current"
                      viewbox="0 0 24 24"
                    >
                      <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                    </svg>
                    <span class="absolute  right-16 top-1 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                      5
                    </span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
