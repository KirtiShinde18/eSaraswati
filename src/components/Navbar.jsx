
"use client";

import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import AppLogo from "../assets/AppLogo.png"
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");


  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Features", href: "/featuress" },
    // { name: "Features", href: "/features" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-white">
          <img src={AppLogo} width={50} alt="" />
          e-Saraswati
        </div>

        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `relative px-1 cursor-pointer group ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-green-500 to-indigo-500 transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>


        {/* Desktop Button */}
        <div className="hidden md:flex gap-3">
          <button className="bg-gradient-to-r from-green-500 to-indigo-500 px-4 py-2 rounded-lg text-white cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu starr */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur border-t border-white/10 px-6 pb-6 flex flex-col gap-4 text-gray-300">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setOpen(false)}   // 👈 menu close karega
              className={({ isActive }) =>
                "relative inline-block w-fit cursor-pointer " +
                (isActive ? "text-white" : "")
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 bg-gradient-to-r from-green-500 to-indigo-500 transition-all duration-300
                    ${isActive ? "w-full" : "w-0"}`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      )}

      {/* Mobile Menu end */}
    </nav>
  );
}

