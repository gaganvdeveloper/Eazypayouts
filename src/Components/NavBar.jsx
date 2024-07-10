import { GanttChart, SlidersHorizontal, X } from "lucide-react";
import React, { useState } from "react";
import MobileLogo from "../Util/MobileLogo";
import SideNav from "../Util/SideNav";
import MyFilters from "../Util/MyFilters";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFOpen, setIsFOpen] = useState(false);
  const size = 35;

  return (
    <>
      <div className="lg:hidden bg-[#F3F3F3] shadow-md flex justify-between items-center py-1 px-1 ">
        <div onClick={() => setIsOpen(!isOpen)} className="z-20">
          {isOpen ? <X size={size} /> : <GanttChart size={size} />}
        </div>
        <MobileLogo />
        <div onClick={() => setIsFOpen(!isFOpen)}>
          {isFOpen ? <X size={28} /> : <SlidersHorizontal size={28} />}
          {isFOpen && <MyFilters />}
        </div>
      </div>
      <div>
        {isOpen ? (
          <div className=" absolute inset-0 z-10 w-[100%] bg-gray-500 bg-opacity-40 pt-14">
            <SideNav style={``} logostyle={`hidden`} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default NavBar;
