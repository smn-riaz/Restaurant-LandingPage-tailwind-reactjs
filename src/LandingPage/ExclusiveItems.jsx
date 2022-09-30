import React from "react";
import fooditem1 from "../Assets/fooditem1.png";
import fooditem2 from "../Assets/fooditem2.png";
import fooditem3 from "../Assets/fooditem3.png";
import ReadMoreBtn from "../Components/ReadMoreBtn";
import SectionHeader from "../Components/SectionHeader";

const ExclusiveItems = () => {
  const exclusives = [
    {
      image: fooditem1,
      headline:"Mutton Burger",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
      image: fooditem2,
      headline:"Special Dish",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
      image: fooditem3,
      headline:"Tasty Cake",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
  ]
  return (
    <main className="" id="popular">
      <SectionHeader text1="Poupular Dishes" text2="Our Exclusive Items"/>
      <section className="p-7">
        <div className="grid md:grid-cols-3 justify-items-center sm:grid-cols-2 ">


        {
          exclusives.map(exclusive => <div className="space-y-3 m-5 rounded-3xl transition duration-150 ease-in-out border-gray-100 border-2 hover:shadow-lg hover:shadow-orange-600/20">
          <div>
            <img src={exclusive.image} alt="" className="w-full" />
          </div>
          <div className="p-5 space-y-3">
            <div>
              <h2 className="font-semibold text-xl">{exclusive.headline}</h2>
            </div>
            <div>
              <p>
                {exclusive.details}
              </p>
            </div>
            <div>
              <ReadMoreBtn />
            </div>
          </div>
        </div>
)
        }

          
        </div>
      </section>
      <hr className="w-1/2 text-right"/>
    </main>
  );
};

export default ExclusiveItems;
