import React from "react";
import Image from "next/image";

const infoItems = [
  {
    id: 1,
    iconLocation: "/revenue_icon.svg",
    title: "Total Revenues",
    bgcolor: "#DDEFE0",
    quantity: "$2,129,430",
  },
  {
    id: 2,
    iconLocation: "/total_transactions_icon.svg",
    title: "Total Transactions",
    bgcolor: "#F4ECDD",
    quantity: "1,520",
  },
  {
    id: 3,
    iconLocation: "/like_icon.svg",
    title: "Total Likes",
    bgcolor: "#EFDADA",
    quantity: "9,721",
  },
  {
    id: 4,
    iconLocation: "/users_icon.svg",
    title: "Total Users",
    bgcolor: "#DEE0EF",
    quantity: "892",
  },
];

const InfoSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {infoItems.map((item) => (
        <div
          key={item.id}
          className={`bg-white p-4 rounded-xl shadow-md `}
          style={{ backgroundColor: item.bgcolor }}
        >
          <div className="h-8 mb-2 flex w-full justify-end relative">
            <Image
              src={item.iconLocation}
              alt={item.title}
              width={24}
              height={24}
            />
          </div>
          <h3 className="text-sm font-lato">{item.title}</h3>
          <p className="text-2xl font-bold mt-2 font-openSans">
            {item.quantity}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
