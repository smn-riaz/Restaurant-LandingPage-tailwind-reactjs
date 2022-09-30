import React from "react";
import { useState } from "react";
import a from "../Assets/food1.png";
import b from "../Assets/food2.png";
import c from "../Assets/food3.png";
import d from "../Assets/food4.png";
import e from "../Assets/food5.png";
import f from "../Assets/food6.png";
import SectionHeader from "../Components/SectionHeader";

const PopularMenu = () => {
  const menus = [
    {
      dish: "ABCD",
      details: "They're wherein heaven seed hath nothing",
      price: 40,
      image: a,
    },
    {
      dish: "EFGH",
      details: "They're wherein heaven seed hath nothing",
      price: 42,
      image: b,
    },
    {
      dish: "IJKL",
      details: "They're wherein heaven seed hath nothing",
      price: 41,
      image: c,
    },
    {
      dish: "MNOP",
      details: "They're wherein heaven seed hath nothing",
      price: 50,
      image: d,
    },
    {
      dish: "QRST",
      details: "They're wherein heaven seed hath nothing",
      price: 30,
      image: e,
    },
    {
      dish: "UVWX",
      details: "They're wherein heaven seed hath nothing",
      price: 40,
      image: f,
    },
  ];
  const [menu, setMenu] = useState("special");
  return (
    <main className="bg-slate-300" id="menu">
      <section className="sm:flex sm:flex-row sm:p-8">
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
        <div className="sm:grid sm:grid-cols-2 sm:gap-14 sm:px-10 px-4">
          {menus.map((menu) => (
            <div className="md:flex flex-row m-6 bg-white w-11/12">
              <div className="basis-1/3">
                <img src={menu.image} className="md:h-full w-full" alt="" />
              </div>
              <div className="basis-2/3 p-6 space-y-4">
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
