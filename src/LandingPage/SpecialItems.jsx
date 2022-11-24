import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionHeader from "../Components/SectionHeader";

const SpecialItems = () => {
  const specialFoods = [
    {
      image: "https://i.ibb.co/f97dmXv/plate1.png",
      name: "Plate 1",
      type: "Fish",
    },
    {
      image: "https://i.ibb.co/f2065dy/plate2.png",
      name: "Plate 2",
      type: "Vegetable",
    },
    {
      image: "https://i.ibb.co/BLXPTpH/plate3.png",
      name: "Plate 3",
      type: "Vegetable",
    },
    {
      image: "https://i.ibb.co/S33WQxF/plate4.png",
      name: "Plate 4",
      type: "Beef",
    },
    {
      image: "https://i.ibb.co/DpX6FmP/plate5.png",
      name: "Plate 5",
      type: "Chicken",
    },
    {
      image: "https://i.ibb.co/Drkt8HX/plate6.png",
      name: "Plate 6",
      type: "Fish",
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
        breakpoint: 2200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1424,
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
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <main className="section-layout1 bg-[#33303005]" id="">
      <SectionHeader text1="Vegetable & Fish" text2="Our Special Items" />
      <section className="sm:px-2">
        <div className="p-2">
          <Slider {...settings}>
            {specialFoods.map((food) => (
              <div className="relative p-2 w-fit">
                <div className="h-[170px]"></div>
                <div className="flex justify-end md:items-center py-2 items-end h-[180px] rounded-3xl border-[0.1px] border-[#e2854279] bg-[#fffffff3]">
                  <div className="mr-10">
                    <h2 className="px-1 text-2xl font-bold uppercase">{food.name}</h2>
                    <h3 className="px-1 text-xl text-primary font-medium">{food.type}</h3>
                    <p className="px-1 text-md font-semibold text-gray-600">$35.00</p>
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
      </section>
    </main>
  );
};

export default SpecialItems;
