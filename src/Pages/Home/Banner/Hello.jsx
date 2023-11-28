import React from "react";
import { FaFish } from "react-icons/fa";
import { IoFish } from "react-icons/io5";
import { FaFishFins } from "react-icons/fa6";
import { GiSpearfishing } from "react-icons/gi";
import { GiDoubleFish } from "react-icons/gi";
const Hello = () => {
  return (
    <div className=" flex justify-center bg-indigo-50 py-10">
      <div className=" w-11/12 md:w-3/4 grid grid-cols-3 md:grid-cols-4 gap-8">
        <div className="p-3 shadow-xl rounded-md h-20 flex flex-col justify-center items-center bg-white btn hover:bg-indigo-400">
          <p className=" bg-indigo-700 text-white p-2 rounded-full shadow-xl">
            <FaFish />
          </p>
          <p className="font-bold text-xs text-gray-700">Ilish</p>
        </div>
        <div className="p-3 shadow-xl rounded-md h-20 flex flex-col justify-center items-center bg-white btn hover:bg-indigo-400">
          <p className=" bg-indigo-700 text-white p-2 rounded-full shadow-xl">
            <GiDoubleFish />
          </p>
          <p className="font-bold text-xs text-gray-700">Mystuscavasius</p>
        </div>
        <div className="p-3 shadow-xl rounded-md h-20 flex flex-col justify-center items-center bg-white btn hover:bg-indigo-400">
          <p className=" bg-indigo-700 text-white p-2 rounded-full shadow-xl">
            <GiSpearfishing />
          </p>
          <p className="font-bold text-xs text-gray-700">CommonCarp</p>
        </div>
        <div className="p-3 shadow-xl rounded-md h-20 flex flex-col justify-center items-center bg-white btn hover:bg-indigo-400">
          <p className=" bg-indigo-700 text-white p-2 rounded-full shadow-xl">
            <FaFishFins />
          </p>
          <p className="font-bold text-xs text-gray-700">Catla</p>
        </div>
        <div className="p-3 shadow-xl rounded-md h-20 flex flex-col justify-center items-center bg-white btn hover:bg-indigo-400">
          <p className=" bg-indigo-700 text-white p-2 rounded-full shadow-xl">
            <IoFish />
          </p>
          <p className="font-bold text-xs text-gray-700">wallagoattu</p>
        </div>
      </div>
    </div>
  );
};

export default Hello;
