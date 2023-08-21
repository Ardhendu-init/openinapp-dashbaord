import React from "react";
import Image from "next/image";

const navItems = [
  { title: "Dashboard", iconLoc: "/dashboard_icon.svg" },
  { title: "Transactions", iconLoc: "/transaction_icon.svg" },
  { title: "Schedule", iconLoc: "/schedule_icon.svg" },
  { title: "Users", iconLoc: "/user_icon.svg" },
  { title: "Setting", iconLoc: "/setting_icon.svg" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-black text-[#fff] h-full  rounded-[2.5rem] font-mont pl-[50px] w-[350px] py-[60px] relative text-lg font-normal">
      <h1 className="text-4xl font-bold ">Board.</h1>

      <nav className="mt-[60px] ">
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:font-bold  pb-5 cursor-pointer flex items-center"
            >
              <Image
                src={item.iconLoc}
                alt={item.title}
                width={18}
                height={18}
                className="mr-5"
              />
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute bottom-12">
        <ul className="space-y-4 cursor-pointer">
          <li className="flex items-center hover:font-semibold">Help</li>
          <li className="flex items-center hover:font-semibold">Contact Us</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
