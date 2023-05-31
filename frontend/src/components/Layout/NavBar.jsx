import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const NavBar = () => {
  return (
    <div className="navbar  h-[60px] border-b  ">
      <div className="wrapper py-[10px] font-[Rubik] px-[30px] flex items-center justify-between">
        <div className="left hidden  800px:flex items-center gap-[25px]">
          <div className="item flex items-center text-[18px]">
            <Link to="/" className="link">
              Home
            </Link>
          </div>
          <div className="item flex items-center text-[18px]">
            <Link to="/" className="link">
              About
            </Link>
          </div>
          <div className="item flex items-center text-[18px]">
            <Link to="/" className="link">
              Contact
            </Link>
          </div>
          <div className="item flex items-center text-[18px]">
            <Link to="/" className="link">
              Shop
            </Link>
          </div>
        </div>
        <div className="center  400px:text-[30px] text-[20px] tracking-[2px]">
          <Link to="/" className="link">
            YOGISTORE
          </Link>
        </div>
        <div className="right flex items-center gap-[25px]">
          <div className="icons  items-center flex 400px:gap-[15px] gap-[10px]  cursor-pointer">
            <SearchIcon />
            <Link to="/login">
              <PersonOutlineOutlinedIcon />
            </Link>
            <div className="wishIcon relative">
              <FavoriteBorderOutlinedIcon />
              <span className="absolute right-[-8px] top-[-10px] flex items-center justify-center text-[12px] w-[17px] h-[17px] rounded-[50%] bg-primary-color text-white">1</span>
            </div>
            <div className="cartIcon relative">
              <ShoppingCartOutlinedIcon />
              <span className="absolute right-[-10px] top-[-10px] flex items-center justify-center text-[12px] w-[17px] h-[17px] rounded-[50%] bg-primary-color text-white">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
