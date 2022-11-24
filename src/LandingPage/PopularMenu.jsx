import React from "react";
import { useState } from "react";
import SectionHeader from "../Components/SectionHeader";

const PopularMenu = () => {
  const [shuffledMenu, setShuffledMenu] = useState([
    {
      dish: "Sponge Cake",
      details: "They're wherein heaven seed hath nothing",
      price: 40,
      image: "https://i.ibb.co/F8GtSQT/food1.png",
    },
    {
      dish: "cheese",
      details: "They're wherein heaven seed hath nothing",
      price: 42,
      image: "https://i.ibb.co/0C2wmMf/food2.png",
    },
    {
      dish: "Curry",
      details: "They're wherein heaven seed hath nothing",
      price: 41,
      image: "https://i.ibb.co/FBSqZdb/food3.png",
    },
    {
      dish: "Fish",
      details: "They're wherein heaven seed hath nothing",
      price: 50,
      image: "https://i.ibb.co/8xH14FW/food4.png",
    },
    {
      dish: "Meat",
      details: "They're wherein heaven seed hath nothing",
      price: 30,
      image: "https://i.ibb.co/Bq9L3f1/food5.png",
    },
    {
      dish: "Salad",
      details: "They're wherein heaven seed hath nothing",
      price: 40,
      image: "https://i.ibb.co/Pz83jsb/food6.png",
    },
  ]);
  const menuName = ["special", "breakfast", "launch", "dinner", "sneaks"];
  const [selectedMenu, setSelectedMenu] = useState("special");

  const [shuffledOpacity, setShuffledOpacity] = useState(false)

  const handleSelectedMenu = (value) => {
    setSelectedMenu(value);
    let shuffled = shuffledMenu
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
      
    setTimeout(() => {
      setShuffledMenu(shuffled);
    }, 1500);
  };

  return (
    <main
      className="px-4 ss:px-6 md:px-16 xl:px-40 py-6 md:py-16 bg-[#33303005]"
      id="popular"
    >
      <SectionHeader text1="Vegetable & Fish" text2="Our Special Items" />
      <section className="px-6 flex justify-center items-center overflow-x-auto">
        {menuName.map((menu) => (
          <div className="m-2">
            <button
              className={
                menu === selectedMenu
                  ? `capitalize font-medium rounded-3xl text-white bg-primary border-gray-700 border-[0.5px] hover:opacity-90 px-2 py-1 duration-300`
                  : `capitalize font-medium rounded-3xl border-primary border-[0.5px] hover:opacity-90 px-2 py-1 duration-300`
              }
              onClick={() => handleSelectedMenu(`${menu}`)}
            >
              {menu}
            </button>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {shuffledMenu.map((menu) => (
          <div className="flex flex-row justify-betwen items-center m-8 bg-white border-primary border-[0.1px]">
            <div className="w-full h-full basis-1/2">
              <img src={menu.image} className="h-[100%] w-[100%]" alt="" />
            </div>
            <div className="space-y-4 p-2 basis-1/2">
              <div className="space-y-1">
                <h2 className="text-xl text-primary font-medium uppercase ">
                  {menu.dish}
                </h2>
                <p className="text-sm">{menu.details}</p>
              </div>
              <h6 className="font-bold text-xl text-gray-500">${menu.price}</h6>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default PopularMenu;
