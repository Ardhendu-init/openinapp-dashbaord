"use client";
import React, { useEffect, useState } from "react";
import PieChartComponent from "./PieChartComponent";
import serverAxios from "@/utils/http";

interface Product {
  _id: string;
  name: string;
  salesPercentage: number;
  fill: string;
}

const TopProductCard: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("April");
  const [pieChartData, setPieChartData] = useState<any[]>([]);
  const [filterData, setFilterData] = useState<Product[]>([]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const getMonthlySales = async () => {
    try {
      const response = await serverAxios.get<any>("/monthly-sale");
      setPieChartData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMonthlySales();
  }, []);

  useEffect(() => {
    const filteredData = pieChartData.find(
      (data: any) => data.month === selectedOption
    );
    if (filteredData) {
      setFilterData(filteredData.products);
    }
  }, [selectedOption, pieChartData]);

  return (
    <div className="flex flex-col md:px-10 px-4 py-8 bg-white rounded-xl w-full lg:w-1/2 font-mont space-y-3">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold p-0 ml-1">Activities</h1>
        <div>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleOptionChange}
            className="bg-transparent border-none focus:outline-none"
          >
            <option value="April">March - April 2023</option>
            <option value="May">April - May 2023</option>
            <option value="June">May - June 2023</option>
          </select>
        </div>
      </div>
      <div className="flex items-center flex-col sm:flex-row">
        <PieChartComponent data={filterData} />
        <div className="space-y-3">
          {filterData.map((item: Product) => (
            <div key={item._id} className="flex flex-col space-y-1">
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: item.fill,
                  }}
                />
                <p className="font-bold">{item.name}</p>
              </div>
              <p className="ml-6 font-lato text-[#858585]">
                {item.salesPercentage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProductCard;
