import React from "react";
import Select from "./Select";
import PieChartComponent from "./PieChartComponent";

const scheduleItems = [
  {
    id: 1,
    title: "Meeting with suppliers from Kuta Bali",
    timing: "14.00-15.00",
    location: "at Sunset Road, Kuta, Bali",
    color: "#9BDD7C",
  },
  {
    id: 2,
    title: "Check operation at Giga Factory 1",
    timing: "18.00-22.00",
    location: "at Central Jakarta",
    color: "#6972C3",
  },
];

const ScheduleCard = () => {
  return (
    <div className="flex flex-col px-10 py-8 bg-white rounded-xl w-full lg:w-1/2 font-mont space-y-3 ">
      <div className="flex justify-between ">
        <h1 className="text-lg font-bold p-0 ml-1 ">Today&apos;s schedule</h1>

        <p className="text-gray-600 font-lato">See All &gt;</p>
      </div>

      <div className="w-full space-y-3">
        {scheduleItems.map((item) => (
          <div
            key={item.id}
            className="flex p-4 border-l-4"
            style={{ borderLeftColor: item.color }}
          >
            <div>
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-gray-600 font-lato">{item.timing}</p>
              <p className="text-gray-600 font-lato ">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;
