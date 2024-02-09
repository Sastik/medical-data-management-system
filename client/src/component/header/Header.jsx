import React from "react";
import { NavLink } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { RiMailAddLine } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaTelegramPlane } from "react-icons/fa";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from "../../assets/photos/logo.png";

export const Header =()=> {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="teal"
        className="p-2 text-lg font-normal hover:text-blue-700"
      >
        <a href="/#home" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="teal"
        className="p-2 text-lg font-normal hover:text-blue-700"
      >
        <a href="#about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="teal"
        className="p-2 text-lg font-normal hover:text-blue-700"
      >
        <a href="#service" className="flex items-center">
          Survices
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="teal"
        className="p-2 text-lg font-normal hover:text-blue-700"
      >
        <a href="#hospital" className="flex items-center">
          Hospitals
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="teal"
        className="p-2 text-lg font-normal hover:text-blue-700"
      >
        <a href="#contact" className="flex items-center">
          Contact us
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <header className="z-50 bg-gradient-to-tr from-teal-500 to-teal-300 text-white flex flex-row justify-around ">
        <div className="flex flex-row justify-start">
          <Typography
            as="li"
            className="pl-4 lg:pl-9 flex flex-row gap-2 py-3 text-sm"
          >
            <a href="tel:+91 3331110002" className="flex flex-row gap-2">
              <IoCallOutline className="rounded-full text-white cursor-pointer animate-bounce text-xl" />
              +91 3331110002
            </a>
          </Typography>
          <Typography as="li" className="pl-9 flex flex-row gap-2 py-3 text-sm">
            <a
              href="mailto:medicalsuport@gmail.com"
              className="flex flex-row gap-2"
            >
              <RiMailAddLine className="text-white cursor-pointer animate-bounce text-xl" />
              medicalsuport@gmail.com
            </a>
          </Typography>
        </div>
        <div className="lg:flex pr-5 align-middle justify-end items-center hidden flex-row gap-10">
          <AiOutlineTwitter className="cursor-pointer text-xl animate-pulse" />
          <FaFacebook className="cursor-pointer text-xl animate-pulse" />
          <FaTelegramPlane className="cursor-pointer text-xl animate-pulse" />
        </div>
      </header>
      <Navbar className="sticky border-none shadow-xl drop-shadow-xl top-0 h-max max-w-full bg-[#e2f4faee] rounded-none py-3 px-5 lg:px-8 z-50 ">
        <div className="flex items-center justify-between text-cyan-700 ">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer capitalize py-1 font-medium text-2xl font-polt gap-1 flex flex-row drop-shadow-md"
          >
            <img src={logo} alt="logo" className="h-9 cursor-pointer" />
            MEDISTORE
          </Typography>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block ">{navList}</div>
            <NavLink to="/login">
              <Button
                variant="gradient"
                color="teal"
                size="sm"
                className="hidden py-3 lg:inline-block "
              >
                <span>LogIn Now</span>
              </Button>
            </NavLink>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <NavLink to="/login">
            <Button
              variant="gradient"
              color="teal"
              size="sm"
              className="py-3 mb-2"
            >
              <span>LogIn Now</span>
            </Button>
          </NavLink>
        </Collapse>
      </Navbar>
    </>
  );
}
