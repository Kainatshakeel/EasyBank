"use client";

import { useState } from "react";
import Logo from "@/public/logo";
import { Button } from "./components/ui/button";
import HamburgerIcon from "@/public/menu";
import CloseIcon from "@/public/close";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Contact" },
    { name: "Blog" },
    { name: "Careers" },
  ];

  return (
    <div className="fixed w-full z-50 flex justify-between items-center bg-neutral-white shadow-sm px-6 py-5 md:px-20">
      <Logo />

      <div className="hidden md:flex items-center text-neutral-grayishBlue cursor-pointer gap-8">
  {navItems.map((item, index) => (
    <span
      key={index}
      className="relative hover:text-black transition group"
    >
      {item.name}
      <span
        className="absolute left-0 bottom-[-30px] w-0 h-[4px] bg-button-gradient transition-all duration-300 group-hover:w-full"
      ></span>
    </span>
  ))}
</div>


      <div className="hidden md:block">
        <Button />
      </div>

      <div
        className="block md:hidden text-neutral-lightGrayishBlue cursor-pointer"
        onClick={() => setMenuOpen(true)}
      >
       <HamburgerIcon/>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex flex-col items-center pt-20">
          <div
            className="absolute top-6 right-6 text-white cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
           <CloseIcon/>
          </div>

          
          <div className="flex flex-col gap-6 w-[85%] p-4 text-center text-black rounded-md bg-white text-lg font-bold">
            {navItems.map((item, index) => (
              <span key={index} className="hover:text-primary-limeGreen">
                {item.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
