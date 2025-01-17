import React from "react";
import arowDown from "../assets/Icons/arrowDown.png";

export default function SideBar() {
  return (
    <div className="w-[30%] p-2">
      <p className="mb-2">Forklift Parts</p>
      <div className="w-[80%] rounded border">
        <div className="h-6 pl-2 bg-slate-200 mb-4 flex justify-between items-center"><p>Price range</p><img className="w-2 h-1 mx-2" src={arowDown} alt="arowDown" /></div>
        <input className="ml-4" type="range" min={0} max={100} />
        <div className="flex justify-evenly py-2"><input className="h-8 w-16 rounded" type="text" placeholder="min" /><input className="h-8 w-16 rounded" type="text" placeholder="max" /></div>
      </div>
    </div>
  );
}
