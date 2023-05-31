import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Sdata } from "../../../static/data"

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className='box d_flex top flex justify-between' key={index}>
                
                <div className='left'>
                  <h1 className="text-[45px] leading-[55px] mt-[50px] mr-0 mb-[20px] ml-0">{value.title}</h1>
                  <p className="my-[20px] mx-0">{value.desc}</p>
                  <button className='btn-primary bg-[#e94560] py-[13px] px-[40px] rounded-[5px] font-bold  text-[#fff]'>Visit Collections</button>
                </div>
                <div className='right h-[50%] w-[50%]'>
                  <img src={value.cover} alt='' className="h-[100%] w- object-cover " />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard