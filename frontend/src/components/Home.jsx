import React from "react";
import Search from "../assets/Icons/MagnifyingGlassGray.png";
import arowDown from "../assets/Icons/arrowDown.png";
import ProductCard from "./ProductCard";
import squarefour from "../assets/Icons/SquaresFour.png";
import squareTwo from "../assets/Icons/squareTwo.png";
import product from "../assets/Images/product.png";
import sideArrow from "../assets/Icons/sideArrow.png";
import side from "../assets/Icons/side.png";

export default function Home() {
  return (
    <div className="px-12">
      <p className="mb-2">Forklift Parts</p>
      <div className="flex">
        <div className="w-[30%] lg:w-[20%] p-2">
          <div className="w-[80%] rounded border">
            <div className="h-6 pl-2 bg-slate-200 mb-4 flex justify-between items-center">
              <p>Price range</p>
              <img className="w-2 h-1 mx-2" src={arowDown} alt="arowDown" />
            </div>
            <div className="flex justify-center">
              <input className="ml-2 text-red-600 color" type="range" color="red" min={0} max={100} />
            </div>
            <div className="flex justify-evenly py-2">
              <input
                className="h-8 w-16 rounded"
                type="text"
                placeholder="min"
              />
              <input
                className="h-8 w-16 rounded"
                type="text"
                placeholder="max"
              />
            </div>
          </div>
          <div className="w-[80%] mt-6 rounded border">
            <div className="h-6 pl-2 bg-slate-200 mb-4 flex justify-between items-center">
              <p>Featured products</p>
              <img className="w-2 h-1 mx-2" src={arowDown} alt="arowDown" />
            </div>
            <div className="w-[200px]">
              <div className="flex justify-center">
                <img src={product} alt="product" />
              </div>
              <p>140091 TILT CYLINDER SEAL KIT</p>
              <div className="flex">
                <p className="text-slate-400 line-through mx-2">$20</p>
                <p>$18</p>
              </div>
              <div className="flex items-center">
                <p>Add to cart</p>
                <img className="w-3 h-3 mx-2" src={sideArrow} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[80%] rounded mt-6 border">
            <div className="h-6 pl-2 bg-slate-200 mb-4 flex justify-between items-center">
              <p>Categories</p>
              <img className="w-2 h-1 mx-2" src={arowDown} alt="arowDown" />
            </div>
            <div className="">
              <div className="h-6 my-2 pl-2 flex justify-between items-center">
                <p>Engine Components</p>
                <img className="w-1 h-2 mx-2" src={side} alt="side" />
              </div>
              <div className="h-6 my-2 pl-2 flex justify-between items-center">
                <p>Transmission Parts</p>
                <img className="w-1 h-2 mx-2" src={side} alt="side" />
              </div>
              <div className="h-6 my-2 pl-2 flex justify-between items-center">
                <p>Electrical Components</p>

                <img className="w-1 h-2 mx-2" src={side} alt="side" />
              </div>
              <div className="h-6 my-2 pl-2 flex justify-between items-center">
                <p>Brake Systems</p>
                <img className="w-1 h-2 mx-2" src={side} alt="side" />
              </div>
              <div className="h-6 my-2 pl-2 flex justify-between items-center">
                <p>Transmission Parts</p>
                <img className="w-1 h-2 mx-2" src={side} alt="side" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%] lg:w-[70%]">
          <div className="bg-gray-100 p-4 flex items-center">
            <div className="bg-white pl-2 h-8 rounded w-full flex items-center border border-white">
              <img className="w-4 h-4" src={Search} alt="search" />
              <input
                className="pl-3 w-[80%] lg:w-[90%]  bg-transparent border-none focus:outline-none focus:border-none focus:ring-0"
                type="text"
                placeholder="search here"
              />
            </div>
            <button className="bg-red-500 mx-2 h-7 w-[19%] lg:w-[9%] text-white rounded flex justify-center items-center">
              search
            </button>
          </div>
          <div className="bg-gray-100 p-4 mt-2 flex items-center">
            <img className="w-5 h-5 mx-2" src={squarefour} alt="search" />
            <img className="w-4 h-4" src={squareTwo} alt="search" />
            <div className="flex bg-white w-48 justify-evenly items-center mx-4">
              <p>sort by</p>
              <select className="border-none" name="sort" id="">
                <option value="latest">latest</option>
              </select>{" "}
            </div>
          </div>
          <div className="flex w-full">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="flex w-full">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="flex justify-center my-4"><button className="border w-8 h-10 bg-[#172230] text-white mx-2">1</button><button className="border w-8 h-10 mx-2">2</button><button className="border flex justify-center items-center w-8 h-10 mx-2"><img className="w-2 h-4" src={side} alt="" /></button></div>
        </div>
      </div>
    </div>
  );
}
