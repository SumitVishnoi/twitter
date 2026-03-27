import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import {
  GoHomeFill,
} from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { VscBell } from "react-icons/vsc";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const navItems = [
  { name: "Home", icon: GoHomeFill, path: "/" },
  { name: "Explore", icon: CiSearch, path: "/explore" },
  { name: "Notify", icon: VscBell, path: "/notifications" },
  { name: "Follow", icon: FiUserPlus, path: "/follow" },
  { name: "Chat", icon: MdOutlineEmail, path: "/dashboard" },
];

const Navbar = () => {
  const navigate = useNavigate()


  return (
    <>
      {/* ================= MOBILE (BOTTOM NAV) ================= */}
      <div className="fixed bottom-0 left-0 w-full bg-black border-t border-zinc-800 flex justify-around items-center py-2 md:hidden z-50">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${
                  isActive ? "text-white" : "text-zinc-400"
                }`
              }
            >
              <Icon className="w-6 h-6" />
            </NavLink>
          );
        })}
      </div>

      {/* ================= SIDEBAR (TABLET + DESKTOP) ================= */}
      <aside className="hidden md:flex fixed h-screen w-2/9 flex-col justify-between px-3 lg:px-6 py-4">
        
        {/* Top */}
        <div className="flex flex-col gap-4">
          
          {/* Logo */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold">
            S
          </div>

          {/* Nav Items */}
          {navItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-3 py-2 rounded-full transition 
                  hover:bg-zinc-900 ${
                    isActive ? "text-white font-semibold" : "text-zinc-400"
                  }`
                }
              >
                <Icon className="w-6 h-6" />
                <span className="hidden lg:block text-lg">
                  {item.name}
                </span>
              </NavLink>
            );
          })}

          {/* Post Button */}
          <button className="bg-white text-black font-semibold rounded-full py-2 lg:py-3 mt-2 hover:bg-gray-200 transition">
            <span className="hidden lg:block">Post</span>
            <span className="lg:hidden">+</span>
          </button>
        </div>

        {/* Bottom Profile */}
        <div onClick={()=>navigate("/profile")} className="hidden lg:flex items-center gap-3 p-3 rounded-full hover:bg-zinc-900 cursor-pointer">
          <div className="w-10 h-10 bg-zinc-700 rounded-full"></div>
          <div>
            <p className="text-sm font-semibold">Sumit</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;