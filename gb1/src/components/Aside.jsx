import React from "react";
import first from "../assets/latest-blog/1.jpg";
import second from "../assets/latest-blog/2.jpg";
import third from "../assets/latest-blog/3.jpg";

export default function Aside() {
  return (
    <div className="py-3 px-6 border-b">
      <form action="">
        <div className="relative flex items-center text-gray-500 focus-within:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            name="search"
            placeholder="Search"
            autoComplete="off"
            className="w-full h-10 pr-6 pl-10 font-medium placeholder-gray-500 text-black border-none ring-2 ring-gray-300 focus-ring-gray-500 focus:ring-2"
          />
        </div>
      </form>

      <div>
        <h4 className="font-bold text-xl pb-10">Latest Posts</h4>
        <div>
          <div className="flex gap-1 flex-col">
            <div className="max-w">
              <img src={first} alt="" className="h-28" />
            </div>
            <div className="max-w">
              <img src={second} alt="" className="h-28" />
            </div>
            <div className="max-w">
              <img src={third} alt="" className="h-28" />
            </div>
          </div>

          <div>
            <div className="text-yellow-500 text-sm">June 21, 2018</div>
            <p className="text-sm py-3">
              ipsum dolor sit amet, consectetur adipisc ing <br /> ipsum
            </p>
            <a
              href="#"
              className="text-gray-400 inline-flex items-center md:mb-2 lg:mb-0 font-light text-sm"
            >
              By Admin
            </a>
          </div>
          <div>
            <div className="text-yellow-500 text-sm">June 21, 2018</div>
            <p className="text-sm py-3">
              ipsum dolor sit amet, consectetur adipisc ing <br /> ipsum
            </p>
            <a
              href="#"
              className="text-gray-400 inline-flex items-center md:mb-2 lg:mb-0 font-light text-sm"
            >
              By Admin
            </a>
          </div>
          <div>
            <div className="text-yellow-500 text-sm">June 21, 2018</div>
            <p className="text-sm py-3">
              ipsum dolor sit amet, consectetur adipisc ing <br /> ipsum
            </p>
            <a
              href="#"
              className="text-gray-400 inline-flex items-center md:mb-2 lg:mb-0 font-light text-sm"
            >
              By Admin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
