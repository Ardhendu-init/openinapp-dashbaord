"use client";
import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import serverAxios from "@/utils/http";

const ActivitesChart = () => {
  const [selectedOption, setSelectedOption] = useState("April");
  const [lineChartData, setlineChartData] = useState([]);

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  const getVisitorData = async () => {
    try {
      const response = await serverAxios.get<any>("/visitors");
      const filterData = await response.data.filter(
        (res: any) => res.month === selectedOption
      );
      await setlineChartData(filterData[0].weeklyVisits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVisitorData();
  }, [selectedOption]);

  return (
    <div className="flex flex-col w-full h-[50vh] bg-white md:px-10 px-3 py-7 font-mont rounded-xl pb-5">
      <h1 className="text-lg font-bold p-0 ml-1 ">Activities</h1>
      <div className="mt-1 mb-7 text-sm flex justify-between mr-14">
        <div>
          {" "}
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleOptionChange}
            className="bg-transparent  border-none focus:outline-none "
          >
            {" "}
            <option value="April">March - April 2023</option>
            <option value="May">April - May 2023</option>
            <option value="June">May - June 2023</option>
            <option value="July">June - July 2023</option>
            <option value="August">July - Aug 2023</option>
          </select>
        </div>
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
        <Chart data={lineChartData} />
      </div>
    </div>
  );
};

export default ActivitesChart;
