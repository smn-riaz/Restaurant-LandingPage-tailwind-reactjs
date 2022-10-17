import React from "react";
import { useState } from "react";
import SectionHeader from "../Components/SectionHeader";

const PopularMenu = () => {
  const menus = [
    {
      dish: "ABCD",
      details: "They're wherein heaven seed hath nothing",
      price: 40,
      image: "https://i.ibb.co/F8GtSQT/food1.png",
    },
    {
      dish: "EFGH",
      details: "They're wherein heaven seed hath nothing",
      price: 42,
      image: "https://i.ibb.co/0C2wmMf/food2.png",
    },
    {
      dish: "IJKL",
      details: "They're wherein heaven seed hath nothing",
      price: 41,
      image: "https://i.ibb.co/FBSqZdb/food3.png",
    },
    {
      dish: "MNOP",
      details: "They're wherein heaven seed hath nothing",
      price: 50,
      image: "https://i.ibb.co/8xH14FW/food4.png",
    },
    {
      dish: "QRST",
      details: "They're wherein heaven seed hath nothing",
      price: 30,
      image: "https://i.ibb.co/Bq9L3f1/food5.png",
    },
    {
      dish: "UVWX",
      details: "They're wherein heaven seed hath nothing",
      price: 40,
      image: "https://i.ibb.co/Pz83jsb/food6.png",
    },
  ];
  const [menu, setMenu] = useState("special");
  return (
    <main className="bg-slate-300" id="menu">
      <section className="sm:flex sm:flex-row p-10 sm:p-8">
        <SectionHeader text1="Poupular Menus" text2="Our Popular Menus"/>
        <div className="sm:px-7 basis-1/2 flex flex-row my-auto font-semibold">
          <div className="basis-1/5 m-2">
            <button onClick={() => setMenu("special")}>Special</button>
          </div>
          <div className="basis-1/5 m-2">
            <button onClick={() => setMenu("breakfast")}>Breakfast</button>
          </div>
          <div className="basis-1/5 m-2">
            <button onClick={() => setMenu("launch")}>Launch</button>
          </div>
          <div className="basis-1/5 m-2">
            <button onClick={() => setMenu("dinner")}>Dinner</button>
          </div>
          <div className="basis-1/5 m-2">
            <button onClick={() => setMenu("sneaks")}>Sneaks</button>
          </div>
        </div>
      </section>

      <section className="sm:p-8">
        <div className="sm:grid sm:grid-cols-2 sm:gap-14 sm:px-10 px-4 m-auto">
          {menus.map((menu) => (
            <div className="md:flex flex-row m-8 bg-white w-11/12">
              <div className="sm:basis-1/3 h-1/2 md:h-full">
                <img src={menu.image} className=" md:h-full w-full" alt="" />
              </div>
              <div className="sm:basis-2/3 p-8 space-y-4 h-1/2 md:h-full">
                <div className="space-y-1">
                  <h2 className="text-2xl">{menu.dish}</h2>
                  <p>{menu.details}</p>
                </div>
                <h6 className="font-bold text-xl text-orange-600">${menu.price}</h6>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PopularMenu;
