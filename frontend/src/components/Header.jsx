import React from "react";
import image3 from "../assets/Logo/image 3.png";
import Search from "../assets/Icons/MagnifyingGlass.png";
import swap from "../assets/Icons/ArrowsLeftRight.png";
import fav from "../assets/Icons/fav.png";
import cart from "../assets/Icons/cart.png";
import user from "../assets/Icons/User.png";

export default function Header() {
  return (
    <div>
      <div className="w-full px-12 py-4 bg-[#172230] flex">
        <div className="w-[30%] pl-20">
          <img className="w-16 " src={image3} alt="MainLogo" />
        </div>
        <div className="w-[40%]">
          <div className="bg-white h-8 rounded w-full flex items-center border border-white">
            <input
              className="pl-3 w-[80%] lg:w-[90%]  bg-transparent border-none focus:outline-none focus:border-none focus:ring-0"
              type="text"
              placeholder="search here"
            />
            <button className="bg-red-500 h-7 w-[19%] lg:w-[9%] rounded flex justify-center items-center">
              <img className="w-4 h-4" src={Search} alt="search" />
            </button>
          </div>
        </div>
        <div className="w-[30%] flex justify-center items-center">
          <div className="flex justify-between items-center w-[80%]">
            <img className="w-4 h-4" src={swap} alt="" />
            <img className="w-4 h-4" src={fav} alt="" />
            <div className="flex items-center">
              <img className="w-4 h-4" src={cart} alt="" />
              <p className="text-xs ml-2 text-white">0 items</p>
            </div>
            <button className=" p-1 flex justify-center items-center bg-white rounded ">
              <img className="w-4 h-4" src={user} alt="user" />{" "}
              <p className=" text-[#172230]">Login</p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-scroll scrollbar_none flex md:justify-center py-2">
        <span className="mx-3 text-xs font-semibold text-[#172230]">Home</span>
        <span className="mx-3 text-xs hover:text-[#172230] hover:font-semibold text-gray-400">About</span>
        <span className="mx-3 text-xs hover:text-[#172230] hover:font-semibold text-gray-400">Equipments</span>
        <span className="mx-3 text-xs hover:text-[#172230] hover:font-semibold text-gray-400">Services</span>
        <span className="mx-3 text-xs hover:text-[#172230] hover:font-semibold text-gray-400">Parts</span>
        <span className="mx-3 text-xs hover:text-[#172230] hover:font-semibold text-gray-400">Rentals</span>
        <span className="mx-3 text-xs hover:text-[#172230] hover:font-semibold text-gray-400">Ebooks</span>
        <span className="mx-3 text-xs hover:text-[#172230] hover:font-semibold text-gray-400">Contact</span>
        <span className="mx-3 text-xs hover:text-[#172230] hover:font-semibold text-gray-400">Blog</span>
      </div>
    </div>
  );
}
