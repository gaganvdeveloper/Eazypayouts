import React from "react";

const Filters = () => {
  return (
    <div className=" sm:hidden md:hidden  h-[120px] py-[32px] lg:flex gap-[43px] justify-end">
      <div className="border-2 rounded-[4px] w-[220px] h-[56px] flex justify-center gap-[3px] ">
        <div className="w-[196px] py-[16px] flex gap-[8px]">
          <h1 className="w-[164px] h-[24px] font-[400] text-[16px] text-[#333333] ">
            Company Name
          </h1>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10L12 15L17 10H7Z" fill="black" fill-opacity="0.54" />
          </svg>
        </div>
      </div>
      <div className="border-2 rounded-[4px] w-[220px] h-[56px] flex justify-center gap-[3px] ">
        <div className="w-[196px] py-[16px] flex gap-[8px]">
          <h1 className="w-[164px] h-[24px] font-[400] text-[16px] text-[#333333] ">
            Account Name
          </h1>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10L12 15L17 10H7Z" fill="black" fill-opacity="0.54" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Filters;
