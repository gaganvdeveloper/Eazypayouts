import React from "react";
import SideNav from "../Util/SideNav";
import Content from "./Content";
import NavBar from "./NavBar";

const LoadScreen = () => {
  return (
    <>
      <NavBar />
      <div className="bg-white w-[1440px] h-[1024px] m-auto flex gap-[32px] font-myfont">
        <SideNav />
        <Content />
      </div>
    </>
  );
};

export default LoadScreen;
