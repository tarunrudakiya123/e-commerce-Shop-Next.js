"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Header = () => {
  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              className="h-5 w-5 rounded-full"
              src="/Img/Frame.png"
              alt="User"
              width={30}
              height={30}
            />

            <Image
              className=" w-10 mt-1 "
              src="/Img/Logo.png"
              alt="User"
              width={32}
              height={32}
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex sm:space-x-4">
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium  text-teal-500 hover:text-teal-500"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-500"
            >
              Categories <KeyboardArrowDownOutlinedIcon />
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-500"
            >
              Explore
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-500"
            >
              About
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-500"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-500"
            >
              Contact
            </Link>

            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-2 rounded-lg">
                <SearchOutlinedIcon style={{ color: "#64748B" }} />
              </div>

              <div className="bg-gray-100 p-2 rounded-lg">
                <AccountCircleOutlinedIcon style={{ color: "#64748B" }} />
              </div>

              <div className="relative">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <ShoppingCartOutlinedIcon style={{ color: "#64748B" }} />
                </div>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 bg-red-500 text-white text-xs font-bold rounded-full transform translate-x-1/2 -translate-y-1/2">
                  2
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-teal-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="#"
            className="block rounded-md bg-teal-500 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Home
          </Link>
          <Link
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-500 hover:text-white"
          >
            Categories
          </Link>
          <Link
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-500 hover:text-white"
          >
            Explore
          </Link>
          <Link
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-500 hover:text-white"
          >
            About
          </Link>
          <Link
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-500 hover:text-white"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-500 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
