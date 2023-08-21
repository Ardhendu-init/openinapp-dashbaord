"use client";
import React, { useState } from "react";
import Chart from "./Chart";
import Select from "./Select";

const ActivitesChart = () => {
  return (
    <div className="flex flex-col w-full h-[50vh] bg-white md:px-10 px-3 py-7 font-mont rounded-xl pb-5">
      <h1 className="text-lg font-bold p-0 ml-1 ">Activities</h1>
      <div className="mt-1 mb-7 text-sm flex justify-between mr-14">
        <Select />
        <div className="flex md:gap-8 gap-4 font-lato text-sm">
          <div className=" flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#E9A0A0]"></div>
            <p>Guest</p>
          </div>
          <div className=" flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#9BDD7C]"></div>
            <p>Users</p>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <Chart />
      </div>
    </div>
  );
};

export default ActivitesChart;
