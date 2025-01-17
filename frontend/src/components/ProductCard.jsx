import React from "react";
import product from "../assets/Images/product.png";
import sideArrow from "../assets/Icons/sideArrow.png";


export default function ProductCard() {
  return (
    <div className="w-[200px] flex justify-center border rounded-md mx-2 my-2 pl-6 p-2">
        <div className="w-[200px]">
      <img src={product} alt="" />
      <p>140091 TILT CYLINDER SEAL KIT</p>
      <div className="flex">
        <p className="text-slate-400 line-through mx-2">$20</p>
        <p>$18</p>
      </div>
      <div className="flex items-center"><p>Add to cart</p><img className="w-3 h-3 mx-2" src={sideArrow} alt="" /></div>
    </div>
    </div>
  );
}
