import React from "react";
import tableData from "./TableData";

const TableContent = () => {
  return (
    <div className="h-[370px] w-[1223px] ">
      <table className="font-myfont ">
        <thead className="h-[56px]  w-full bg-[#F5F5F5]">
          <tr className="*:text-[18px] *:text-[700] *:font-[600] *:px-2">
            <td className="w-[200px] text-left">Date</td>
            <td className="w-[110px] text-right">Credit</td>
            <td className="w-[150px] text-right">A/c Balance</td>
            <td className="w-[190px] text-right">UTR/RRN</td>
            <td className="w-[230px] text-right">A/c No /UPI</td>
            <td className="w-[400px] text-right"></td>
          </tr>
        </thead>
        <tbody className="">
          {tableData.map((r, index) => {
            return (
              <tr className="border-b-2 h-[52px] *:font-[500] *:text-[16px] *:px-2 ">
                <td className=" text-left">{r.date}</td>
                <td className="text-right text-[#219653]">₹ {r.credit}</td>
                <td className=" text-right">₹ {r.balance}</td>
                <td className=" text-right">{r.utr}</td>
                <td className="text-right">{r.upi}</td>
                <td className=" text-right"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
