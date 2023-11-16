import React from "react";
import logo from "../assets/logo.png";
export default function Header() {
  return (
    <div className="bg-black flex flex-row justify-evenly h-full items-center overflow-hidden py-8  border-yellow-500 border-b-2">
      <div className="">
        <img src={logo} className="w-200 h-150" />
      </div>
      <nav className="text-white">
        <ul className="flex  space-x-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Forums</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="bg-yellow-500  py-1 px-3 rounded-full font-bold float-right hover:bg-yellow-400 hover:text-black">
        Login/Register
      </button>
    </div>
  );
}
