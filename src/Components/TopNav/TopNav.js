import React from "react";
import '../../index.css';

const TopNav = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div>
          <svg
            width="30"
            height="34"
            viewBox="0 0 30 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30 8.5L15 0L0 8.5V25.5L15 34L30 25.5V8.5ZM24.0824 17.1885L19.378 9.41735L10.2958 9.22881L5.91791 16.8115L10.6223 24.5827L19.7046 24.7712L24.0824 17.1885Z"
              fill="url(#paint0_linear_36_20565)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30 8.5L15 0L0 8.5V25.5L15 34L30 25.5V8.5ZM24.0824 17.1885L19.378 9.41735L10.2958 9.22881L5.91791 16.8115L10.6223 24.5827L19.7046 24.7712L24.0824 17.1885Z"
              fill="url(#paint1_linear_36_20565)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_36_20565"
                x1="0"
                y1="0"
                x2="36.3364"
                y2="9.33473"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4EF0F0" />
                <stop offset="1" stop-color="#05C580" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_36_20565"
                x1="0.537459"
                y1="2.64444"
                x2="31.6124"
                y2="2.62865"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#AE67FA" />
                <stop offset="0.973958" stop-color="#F49867" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="ml-[15px] text-#3E4581 text-[18px] font-[600]">
          Brands.io
        </div>
      </div>
      <div className="flex gap-[45px]">
        <div className="text-[#3E4581] cursor-pointer hover:bg-gradient-to-r hover:from-[#AE67FA] hover:to-[#F49867] hover:bg-clip-text hover:text-transparent rounded-[5px] font-[500]">
          Home
        </div>
        <div className="text-[#3E4581] cursor-pointer hover:bg-gradient-to-r hover:from-[#AE67FA] hover:to-[#F49867] hover:bg-clip-text hover:text-transparent rounded-[5px] font-[500]">
          About Us
        </div>
        <div className="text-[#3E4581] cursor-pointer hover:bg-gradient-to-r hover:from-[#AE67FA] hover:to-[#F49867] hover:bg-clip-text hover:text-transparent rounded-[5px] font-[500]">
          Services
        </div>
        <div className="text-[#3E4581] cursor-pointer hover:bg-gradient-to-r hover:from-[#AE67FA] hover:to-[#F49867] hover:bg-clip-text hover:text-transparent rounded-[5px] font-[500]">
          Contact Us
        </div>
      </div>

      <div className="flex items-center justify-center py-[17px] px-[32px] bg-gradient-to-r from-[#AE67FA] to-[#F49867] rounded-[5px]">
        <div className="text-white">Login</div>
      </div>
    </div>
  );
};

export default TopNav;
