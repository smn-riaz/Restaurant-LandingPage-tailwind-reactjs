import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionHeader from "../Components/SectionHeader";

const SpecialItems = () => {
  const specialFoods = [
    {
      image: "https://i.ibb.co/f97dmXv/plate1.png",
      name:"Plate1",
      type:"Fish"
    },
    {
      image:"https://i.ibb.co/f2065dy/plate2.png",
      name:"Plate2",
      type:"Vegetable"
    },
    {
      image: "https://i.ibb.co/BLXPTpH/plate3.png",
      name:"Plate3",
      type:"Vegetable"
    },
    {
      image: "https://i.ibb.co/S33WQxF/plate4.png",
      name:"Plate4",
      type:"Beef"
    },
    {
      image: "https://i.ibb.co/DpX6FmP/plate5.png",
      name:"Plate5",
      type:"Chicken"
    },
    {
      image: "https://i.ibb.co/Drkt8HX/plate6.png",
      name:"Plate6",
      type:"Fish"
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <main className="py-8 overflow-x-hidden px-6 bg-[#e4e0dfa9]">
        <SectionHeader text1="Vegetable & Fish" text2="Our special items" />
      <div className="p-2">
      <Slider {...settings}>
        {specialFoods.map((food) => (
          <div className="relative p-2">
            <div className="h-[150px]"></div>
            <div className="p-6 flex justify-end items-end h-[200px] rounded-3xl bg-[#fffffff3]">
              <div className="">
                <h2 className="px-8 font-bold">{food.name}</h2>
                <h3 className="px-8">{food.type}</h3>
                <p className="px-8 font-semibold">$35.00</p>
              </div>
            </div>
            <img
              src={food.image}
              alt=""
              className="absolute inset-0 flex justify-center items-center w-64"
            />
          </div>
        ))}
      </Slider>
      </div>
    </main>
  );
};

export default SpecialItems;
