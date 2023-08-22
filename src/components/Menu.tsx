"use client";
import React, { useState, MouseEvent } from "react";
import Image from "next/image";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavItem } from "@/types";

const navItems: NavItem[] = [
  { title: "Dashboard", iconLoc: "/dashboard_icon.svg" },
  { title: "Transactions", iconLoc: "/transaction_icon.svg" },
  { title: "Schedule", iconLoc: "/schedule_icon.svg" },
  { title: "Users", iconLoc: "/user_icon.svg" },
  { title: "Setting", iconLoc: "/setting_icon.svg" },
];

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = (event: MouseEvent) => {
    event.stopPropagation();
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <HiMenuAlt1 size={25} />
      </button>

      {open && (
        <div
          className="bg-black text-white absolute right-0 w-full top-0 h-[60vh] flex flex-col gap-8 py-10  pl-10  z-10"
          onClick={handleClose}
        >
          <div
            className="absolute right-2 top-3 cursor-pointer"
            onClick={handleClose}
          >
            <AiOutlineCloseCircle size={30} />
          </div>
          <ul>
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:font-bold  pb-5 cursor-pointer flex items-center"
                onClick={handleClose}
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
          <div className="absolute bottom-12">
            <ul className="space-y-4 cursor-pointer">
              <li className="flex items-center hover:font-semibold">Help</li>
              <li className="flex items-center hover:font-semibold">
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
