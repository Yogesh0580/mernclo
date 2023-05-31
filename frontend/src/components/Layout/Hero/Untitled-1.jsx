import React from "react";
import logo from "../../../assets/images/banner-1.jpg";
import logo1 from "../../../assets/images/banner-2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="banner my-[15px] 1000px:mt-0 mx-0">
      <div className="container has-scrollbar  w-full mx-auto ">
        <div className="slider-container flex items-center rounded-md gap-[10px] overflow-x-auto overflow-y-hidden ">
          <div className="slider-item 1000px:h-[380px] 800px:h-[350px] relative min-w-[100%] h-[450px]  rounded-md overflow-hidden  ">
            <img
              src={logo1}
              alt=""
              className="w-[100%] 1200px:object-top  h-[100%] object-cover object-right"
            />
            <div className="banner-content 1000px:left-[75px] 1000px:w-max-[400px]  570px:bg-none 570px:bg-opacity-0 400px:top-[50%] 400px:right-[25px] 400px:bottom-auto 400px:transform 400px:translate-y-[-50%] 400px:w-max-[320px]  bg-white bg-opacity-80 py-[20px] px-[25px] rounded-md absolute bottom-[25px] left-[25px] right-[25px] 800px:w-max-[380px]">
              <p className="banner-subtitle text-[0.875rem] 400px:text-[1rem]  1000px:text-[1.625rem] 800px:text-[1.25rem]  text-[#f99fa0] font-[500] capitalize tracking-[2px]  mb-[10px]  ">
                Trending Items
              </p>
              <h2 className="banner-title 1000px:text-[1.5rem] text-[#222222] text-[1.563rem] uppercase leading-1 mb-[10px]">
                Women's Latest fashion Sale
              </h2>
              <h3 className=" text-[15px] bg-[#222222] font-[600] uppercase text-white w-max  py-[4px] px-[10px] rounded-md  mb-1  mt-5 ">
                CouponCode: Rao
              </h3>
              <p className="text-[#787878] mb-1  text-sm">
                On Order Above $3000
              </p>
              <p className="banner-text 400px:text-[0.875rem] 1000px:text-[1.375rem] 800px:text-[1.125rem] 400px:block 400px:text-[#787878] 400px:font-[500] 400px:mb-[10px] hidden ">
                Starting at $ <b>20</b>.00
              </p>
              <Link
                to=""
                className="bg-[#f99fa0] 1000px:text-[.875rem] 800px:text-[.75rem] 400px:py-[7px] 400px:px-[20px] text-[.625rem]  text-white w-max font-[600] uppercase py-[4px] px-[10px] rounded-md hover:bg-[#222222]"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="slider-item 1000px:h-[380px] 800px:h-[350px] relative min-w-[100%] h-[450px]  rounded-md overflow-hidden  ">
            <img
              src={logo1}
              alt=""
              className="w-[100%] 1200px:object-top  h-[100%] object-cover object-right"
            />
            <div className="banner-content 1000px:left-[75px] 1000px:w-max-[400px]  570px:bg-none 570px:bg-opacity-0 400px:top-[50%] 400px:right-[25px] 400px:bottom-auto 400px:transform 400px:translate-y-[-50%] 400px:w-max-[320px]  bg-white bg-opacity-80 py-[20px] px-[25px] rounded-md absolute bottom-[25px] left-[25px] right-[25px] 800px:w-max-[380px]">
              <p className="banner-subtitle text-[0.875rem] 400px:text-[1rem]  1000px:text-[1.625rem] 800px:text-[1.25rem]  text-[#f99fa0] font-[500] capitalize tracking-[2px]  mb-[10px]  ">
                Trending Items
              </p>
              <h2 className="banner-title 1000px:text-[1.5rem] text-[#222222] text-[1.563rem] uppercase leading-1 mb-[10px]">
                Women's Latest fashion Sale
              </h2>
              <h3 className=" text-[15px] bg-[#222222] font-[600] uppercase text-white w-max  py-[4px] px-[10px] rounded-md  mb-1  mt-5 ">
                CouponCode: Rao
              </h3>
              <p className="text-[#787878] mb-1  text-sm">
                On Order Above $3000
              </p>
              <p className="banner-text 400px:text-[0.875rem] 1000px:text-[1.375rem] 800px:text-[1.125rem] 400px:block 400px:text-[#787878] 400px:font-[500] 400px:mb-[10px] hidden ">
                Starting at $ <b>20</b>.00
              </p>
              <Link
                to=""
                className="bg-[#f99fa0] 1000px:text-[.875rem] 800px:text-[.75rem] 400px:py-[7px] 400px:px-[20px] text-[.625rem]  text-white w-max font-[600] uppercase py-[4px] px-[10px] rounded-md hover:bg-[#222222]"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
