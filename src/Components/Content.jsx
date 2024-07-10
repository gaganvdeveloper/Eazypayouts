import React from "react";
import Filters from "../Util/Filters";
import AvailableBalance from "../Util/AvailableBalance";
import TableContent from "../Util/TableContent";

const Content = () => {
  return (
    <div className="w-[1223px] h-[782px]  flex flex-col gap-[64px] ">
      <div className=" h-[260px] flex flex-col gap-[32px]">
        <Filters />
        <AvailableBalance />
      </div>
      <span className="w-[253px] h-[24px]  text-[18px]  font-[500] ">
        Latest Loads are displyed here
      </span>
      <TableContent />
    </div>
  );
};

export default Content;
