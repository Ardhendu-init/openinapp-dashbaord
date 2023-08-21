import React from "react";
import Select from "./Select";
import PieChartComponent from "./PieChartComponent";
import { title } from "process";

const product = [
  {
    id: 1,
    title: "Basic Tees",
    color: "#98D89E",
    percentage: "55%",
  },
  {
    id: 2,
    title: "Custom Short Pants",
    color: "#EE8484",
    percentage: "31%",
  },
  {
    id: 3,
    title: "Super Hoodies",
    color: "#F7DC7D",
    percentage: "14%",
  },
];

const TopProductCard = () => {
  return (
    <div className="flex flex-col md:px-10 px-4 py-8 bg-white rounded-xl w-full lg:w-1/2 font-mont space-y-3 ">
      <div className="flex justify-between ">
        <h1 className="text-lg font-bold p-0 ml-1 ">Activities</h1>
        <Select />
      </div>
      <div className="flex items-center flex-col sm:flex-row ">
        <PieChartComponent />
        <div className="space-y-3">
          {product.map((item) => (
            <div key={item.id} className="flex  flex-col space-y-1 ">
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <p className=" font-bold">{item.title}</p>
              </div>

              <p className="ml-6 font-lato text-[#858585]">{item.percentage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProductCard;
