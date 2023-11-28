// src/components/BottomNav.jsx
import React from "react";
import {
  FaHome,
  FaWater,
  FaFish,
  FaShoppingCart,
  FaComment,
} from "react-icons/fa";

const BottomNav = () => {
  return (
    <nav className="fixed flex md:hidden rounded-t-md bottom-0 left-0 right-0 bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-around items-center">
        <a
          href="/home"
          className="flex flex-col items-center text-white text-sm"
        >
          <FaHome />
          Home
        </a>
        <a
          href="/pond"
          className="flex flex-col items-center text-white text-sm"
        >
          <FaWater />
          Pond
        </a>
        <a
          href="/menu"
          className="flex flex-col items-center text-white text-sm"
        >
          <FaFish />
          Fishes
        </a>
        <a
          href="/order/commonCarp"
          className="flex flex-col items-center text-white text-sm"
        >
          <FaShoppingCart />
          Order
        </a>
        <a
          href="/contact"
          className="flex flex-col items-center text-white text-sm"
        >
          <FaComment />
          Contact
        </a>
      </div>
    </nav>
  );
};

export default BottomNav;
