import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo-son.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navigate = useNavigate();

  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-10 py-2 bg-gradient-to-r from-black  to-gray-500   md:bg-gradient-to-r md:from-gray-500  md:to-black">
      <div className="flex justify-between items-center">
        <div className=" w-[15rem] flex md:gap-[5rem] items-center mb-3">
          <img
            onClick={() => navigate("/")}
            className="w-24 h-20 cursor-pointer "
            src={Logo}
            alt="logo"
          />
          <h1 className=" hidden md:block font-bold  font-['Rubik'] text-[#7FFF00] animate-bounce  text-xl md:text-3xl">
            Kütahya
          </h1>
        </div>

        <div>
          <GiHamburgerMenu
            onClick={() => setShowNavbar(!showNavbar)}
            className="md:hidden text-3xl text-white"
          />
        </div>
      </div>

      <div
        className={
          !showNavbar
            ? "hidden md:flex md:w-[55%] flex-wrap justify-evenly md:justify-between gap-1 md:gap-2 font-bold "
            : "flex font-bold flex-wrap gap-1 justify-evenly md:hidden"
        }
        // className="flex md:w-[55%]      flex-wrap justify-evenly md:justify-between gap-1 md:gap-2 font-bold"
      >
        <NavLink
          className="p-2 rounded-md   text-center w-[8rem] md:w-max "
          to="/"
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "black",
              backgroundColor: isActive ? "chartreuse" : "white",
            };
          }}
        >
          AnaSayfa
        </NavLink>
        <NavLink
          className=" p-2 rounded-md  text-center w-[8rem] md:w-max "
          to="/about"
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "black",
              backgroundColor: isActive ? "chartreuse" : "white",
            };
          }}
        >
          Hakkımızda
        </NavLink>
        <NavLink
          className="p-2 rounded-md   text-center w-[8rem] md:w-max"
          to="/koltuk"
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "black",
              backgroundColor: isActive ? "chartreuse" : "white",
            };
          }}
        >
          Koltuk Yıkama
        </NavLink>
        <NavLink
          className="p-2 rounded-md  text-center w-[8rem] md:w-max "
          to="/hali"
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "black",
              backgroundColor: isActive ? "chartreuse" : "white",
            };
          }}
        >
          Halı Yıkama
        </NavLink>
        <NavLink
          className="p-2 rounded-md  text-center w-[8rem] md:w-max "
          to="/yatak"
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "black",
              backgroundColor: isActive ? "chartreuse" : "white",
            };
          }}
        >
          Yatak Yıkama
        </NavLink>
        <NavLink
          className="p-2 rounded-md  text-center w-[8rem] md:w-max "
          to="/contact"
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "black",
              backgroundColor: isActive ? "chartreuse" : "white",
            };
          }}
        >
          İletişim
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
