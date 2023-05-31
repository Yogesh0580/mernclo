import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { categoriesData } from '../../static/data';

 const categoriesData = [
    {
      id: 1,
      title: "Men T-shirt",
      image_Url: require('../../assets/rao/feature_1.jpg'),
    },
    {
      id: 2,
      title: "Men Jacket",
      image_Url: require('../../assets/rao/feature_2.jpg'),
    },
    {
      id: 3,
      title: "Men Bags",
      subTitle: "",
      image_Url: require('../../assets/rao/feature_1.jpg'),
    },
    {
        id: 1,
        title: "Men T-shirt",
        image_Url: require('../../assets/rao/feature_1.jpg'),
      },
      {
        id: 2,
        title: "Men Jacket",
        image_Url: require('../../assets/rao/feature_2.jpg'),
      },
      {
        id: 3,
        title: "Men Bags",
        subTitle: "",
        image_Url: require('../../assets/rao/feature_1.jpg'),
      },
      {
        id: 1,
        title: "Men T-shirt",
        image_Url: require('../../assets/rao/feature_1.jpg'),
      },
      {
        id: 2,
        title: "Men Jacket",
        image_Url: require('../../assets/rao/feature_2.jpg'),
      },
      {
        id: 3,
        title: "Men Bags",
        subTitle: "",
        image_Url: require('../../assets/rao/feature_1.jpg'),
      },
      {
        id: 1,
        title: "Men T-shirt",
        image_Url: require('../../assets/rao/feature_1.jpg'),
      },
      {
        id: 2,
        title: "Men Jacket",
        image_Url: require('../../assets/rao/feature_2.jpg'),
      },
      {
        id: 3,
        title: "Men Bags",
        subTitle: "",
        image_Url: require('../../assets/rao/feature_1.jpg'),
      },
      {
        id: 3,
        title: "Men Bags",
        subTitle: "",
        image_Url: require('../../assets/rao/feature_1.jpg'),
      },
      {
        id: 3,
        title: "Men Bags",
        subTitle: "",
        image_Url: require('../../assets/rao/feature_1.jpg'),
      }, {
        id: 3,
        title: "Men Bags",
        subTitle: "",
        image_Url: require('../../assets/rao/feature_1.jpg'),
      },
    
  ];

  const arrowStyles = {
    position: 'absolute',
    top: '45%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    background: '#453c5c',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s',
  };
  
  const nextArrowStyles = {
    ...arrowStyles,
    right: '0',
  };
  
  const prevArrowStyles = {
    ...arrowStyles,
    left: '0',
  };

const Categories = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 11,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 430, // adjust the breakpoint as needed
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 530, // adjust the breakpoint as needed
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 740, // adjust the breakpoint as needed
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 850, // adjust the breakpoint as needed
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1000, // adjust the breakpoint as needed
        settings: {
          slidesToShow: 8,
        },
      },
      
    ],
  };

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={`${className} next-arrow`}
        style={{ ...style, ...nextArrowStyles }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={`${className} prev-arrow`}
        style={{ ...style, ...prevArrowStyles }}
        onClick={onClick}
      />
    );
  }
  

  return (
    <>
      <div className="frature-heading flex justify-center items-center mb-10">
        <h2 className="text-[1.5rem] text-[#1b1919] leading-[1px] uppercase font-[600] mt-[20px] py-[18px] px-[30px] border border-solid border-[#e0e0e0]">
          Featured Categories
        </h2>
      </div>
      <div className="w-11/12 mx-auto  mb-96 ">
        <Slider {...settings}>
        {categoriesData.map((category, index) => (
            <div key={index} className="feature-box ">
              <div className="w-[80px] h-[80px] my-0 mx-auto rounded-[10px] overflow-hidden bg-primary-color ">
                <Link to={category.link}>
                  <img src={category.image_Url} alt={category.title} className="w-[100%] h-[100%] object-cover object-center" />
                </Link>
              </div>
              <div className='mx-auto w-max'>
              <span className="text-[1rem] min-w-full font-[600] text-[#444444] ">
                {category.title}
              </span>

              </div>
            </div>
          ))}
          
        </Slider>
      </div>
    </>
  );
};

export default Categories;
