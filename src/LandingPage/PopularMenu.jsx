import React from "react";
import { useState } from "react";
import a from "../Assets/food1.png";
import b from "../Assets/food2.png";
import c from "../Assets/food3.png";
import d from "../Assets/food4.png";
import e from "../Assets/food5.png";
import f from "../Assets/food6.png";

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
      <section className="sm:flex sm:flex-row p-8">
        <div className="p-7 space-y-2 basis-1/2">
          <h4 className="text-xl text-gray-400">Poupular Dishes</h4>
          <h1 className="text-5xl">Our Exclusive Items</h1>
        </div>
        <div className="px-7 basis-1/2 flex flex-row my-auto font-semibold">
          <div className="basis-1/5">
            <button onClick={() => setMenu("special")}>Special</button>
          </div>
          <div className="basis-1/5">
            <button onClick={() => setMenu("breakfast")}>Breakfast</button>
          </div>
          <div className="basis-1/5">
            <button onClick={() => setMenu("launch")}>Launch</button>
          </div>
          <div className="basis-1/5">
            <button onClick={() => setMenu("dinner")}>Dinner</button>
          </div>
          <div className="basis-1/5">
            <button onClick={() => setMenu("sneaks")}>Sneaks</button>
          </div>
        </div>
      </section>

      <section className="p-8">
        <div className="sm:grid sm:grid-cols-2 gap-14 px-10">
          {menus.map((menu) => (
            <div className="grid grid-cols-2 m-2 bg-white w-11/12">
              <div className="">
                <img src={menu.image} alt="" />
              </div>
              <div className="space-y-3 p-4">
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
