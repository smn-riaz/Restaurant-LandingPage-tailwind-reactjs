import React from "react";
import ReadMoreBtn from "../Components/ReadMoreBtn";
import SectionHeader from "../Components/SectionHeader";

const ExclusiveItems = () => {
  const exclusives = [
    {
      image: "https://i.ibb.co/6R4C7zs/fooditem1.png",
      headline: "Mutton Burger",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      image: "https://i.ibb.co/ZzbFh50/fooditem2.png",
      headline: "Special Dish",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      image: "https://i.ibb.co/Nn4z4Py/fooditem3.png",
      headline: "Tasty Cake",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  ];
  return (
    <main className="px-4 ss:px-6 md:px-16 xl:px-40 py-6 md:py-16" id="">
      <SectionHeader text1="Poupular Dishes" text2="Our Exclusive Items" />
      <section className="sm:px-12">
        <div className="grid md:grid-cols-3 grid-cols-1 xs:grid-cols-2">
          {exclusives.map((exclusive) => (
            <div className="m-5 rounded-3xl transition duration-150 ease-in-out border-gray-100 border-2 hover:shadow-xl">
              <div className="overflow-hidden w-full">
                <img src={exclusive.image} alt="" className="w-full hover:scale-110 duration-500" />
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <h2 className="font-semibold text-xl lg:text-2xl xl:text-3xl">
                    {exclusive.headline}
                  </h2>
                </div>
                <div>
                  <p className="text-md text-gray-500 lg:text-lg xl:text-2xl">{exclusive.details}</p>
                </div>
                <div>
                  <ReadMoreBtn />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ExclusiveItems;
