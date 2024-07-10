import React from "react";

const AvailableBalance = () => {
  return (
    <div className="w-[366px] h-[108px] flex justify-center items-center shadow-myshadow rounded-[5px] px-[32px] py-[20px]">
      <div className="  flex justify-center items-center gap-[8px] h-[68px] w-[278] ">
        <div className=" flex flex-col justify-center items-center rounded-[10px] bg-[#F9F9F9] h-[68px] w-[67px]">
          <svg
            width="36"
            height="26"
            viewBox="0 0 36 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.08415 2.16667C3.08415 0.97005 4.0542 0 5.25081 0H31.2508C32.4474 0 33.4175 0.97005 33.4175 2.16667L3.08415 2.16667Z"
              fill="#FE914D"
            />
            <path
              d="M18.2508 19.5C20.6441 19.5 22.5842 17.5599 22.5842 15.1667C22.5842 12.7734 20.6441 10.8333 18.2508 10.8333C15.8576 10.8333 13.9175 12.7734 13.9175 15.1667C13.9175 17.5599 15.8576 19.5 18.2508 19.5Z"
              fill="#FE914D"
            />
            <path
              d="M0.91748 6.5C0.91748 5.30338 1.88753 4.33333 3.08415 4.33333H33.4175C34.6141 4.33333 35.5842 5.30338 35.5842 6.5V23.8333C35.5842 25.0299 34.6141 26 33.4175 26H3.08415C1.88753 26 0.91748 25.03 0.91748 23.8333V6.5ZM7.41748 6.5C7.41748 8.89323 5.47738 10.8333 3.08415 10.8333V19.5C5.47738 19.5 7.41748 21.4401 7.41748 23.8333H29.0842C29.0842 21.4401 31.0243 19.5 33.4175 19.5V10.8333C31.0243 10.8333 29.0842 8.89323 29.0842 6.5H7.41748Z"
              fill="#FE914D"
            />
          </svg>
        </div>
        <div className=" w-[203px] h-[56px] flex flex-col gap-[8px] font-myfont ">
          <h1 className="text-[#32327C] font-[600] text-[24px] h-[24px] ">
            Available Balance
          </h1>
          <h2 className="text-[#219653] w-[150px] font-[500] h-[24px] text-[18px]">
            ₹ 8888,88,88,888
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AvailableBalance;
