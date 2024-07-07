"use client";
import { productTypesSidebar } from "@/utils/constants-data";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCategory = ({ setCategory }: any) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const settings = {
    speed: 5000,
    autoplay: false,
    autoplaySpeed: 0,
    // centerMode: true,
    // cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    // variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: true,
    // buttons: false,
    focusOnSelect: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div>
        <Slider {...settings}>
          {productTypesSidebar.map((item: any, index: any) => (
            <div key={index}>
              <div
                className={`flex items-center border-2 gap-2 w-[95%] mx-auto py-2 px-6  rounded-2xl ${
                  selectedOption === index
                    ? "bg-red text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => {
                  setSelectedOption(index);
                  setCategory(item.name);
                }}
              >
                <div className=" h-fit w-fit border-2 border-white rounded-full bg-white p-3">
                  <Image
                    className="h-8 w-8 "
                    src={item.img}
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
                <div className="text-xl  font-black">{item.name}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCategory;
