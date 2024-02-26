import React from "react";
import { FaFish } from "react-icons/fa";
import { IoFish } from "react-icons/io5";
import { FaFishFins } from "react-icons/fa6";
import { GiSpearfishing } from "react-icons/gi";
import { GiDoubleFish } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Hello = () => {
  const navigate = useNavigate();

  const onClickNavigate = (pathName) => {
    navigate(`/order/${pathName}`);
  };
  return (
    <div className=" flex justify-center bg-indigo-50 py-1">
      <div className=" w-full px-3 md:w-3/4 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-8">
        <div
          onClick={() => {
            onClickNavigate("ilish");
          }}
          className="p-3 shadow-xl rounded-md  h-20 flex flex-col justify-center items-center bg-white btn hover:bg-indigo-400"
        >
          <p className=" bg-indigo-700 text-white p-2 rounded-full shadow-xl">
            <FaFish />
          </p>
          <p className="font-bold text-xs text-gray-700">Ilish</p>
        </div>
        <div
          onClick={() => {
            onClickNavigate("mystuscavasius");
          }}
          className="p-3 shadow-xl rounded-md h-20 flex flex-col justify-center items-center bg-white btn hover:bg-indigo-400"
        >
          <p className=" bg-indigo-700 text-white p-2 rounded-full shadow-xl">
            <GiDoubleFish />
          </p>
          <p className="font-bold text-xs text-gray-700">Mystuscavasius</p>
        </div>
        <div
          onClick={() => {
            onClickNavigate("commonCarp");
          }}
          className="p-3 shadow-xl rounded-md h-20 flex flex-col justify-center items-center bg-white btn hover:bg-indigo-400"
        >
          <p className=" bg-indigo-700 text-white p-2 rounded-full shadow-xl">
            <GiSpearfishing />
          </p>
          <p className="font-bold text-xs text-gray-700">CommonCarp</p>
        </div>
        <div
          onClick={() => {
            onClickNavigate("catla");
          }}
          className="p-3 shadow-xl rounded-md h-20 flex flex-col justify-center items-center bg-white btn hover:bg-indigo-400"
        >
          <p className=" bg-indigo-700 text-white p-2 rounded-full shadow-xl">
            <FaFishFins />
          </p>
          <p className="font-bold text-xs text-gray-700">Catla</p>
        </div>
        <div
          onClick={() => {
            onClickNavigate("wallagoattu");
          }}
          className="p-3 shadow-xl rounded-md h-20 flex flex-col justify-center items-center bg-white btn hover:bg-indigo-400"
        >
          <p className=" bg-indigo-700 text-white p-2 rounded-full shadow-xl">
            <IoFish />
          </p>
          <p className="font-bold text-xs text-gray-700">wallagoattu</p>
        </div>
        <div
          onClick={() => {
            onClickNavigate("ilish");
          }}
          className="p-3 shadow-xl rounded-md h-20 flex flex-col justify-center items-center bg-white btn hover:bg-indigo-400"
        >
          <p className=" bg-indigo-700 text-white p-2 rounded-full shadow-xl">
            <FaFish />
          </p>
          <p className="font-bold text-xs text-gray-700">Ilish</p>
        </div>
      </div>
    </div>
  );
};

export default Hello;
