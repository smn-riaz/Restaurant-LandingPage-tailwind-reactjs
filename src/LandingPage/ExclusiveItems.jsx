import React from "react";
import fooditem1 from "../Assets/fooditem1.png";
import fooditem2 from "../Assets/fooditem2.png";
import fooditem3 from "../Assets/fooditem3.png";
import ReadMoreBtn from "../Components/ReadMoreBtn";

const ExclusiveItems = () => {
  return (
    <main className="min-h-screen pt-10" id="popular">
      <section className="px-7 space-y-2">
        <h4 className="text-xl px-5 text-gray-400">Poupular Dishes</h4>
        <h1 className="text-5xl">Our Exclusive Items</h1>
      </section>
      <section className="p-7">
        <div className="sm:grid sm:grid-cols-3">
          <div className="space-y-3 m-5 rounded-3xl transition duration-150 ease-in-out border-gray-100 border-2 hover:shadow-lg hover:shadow-orange-600/20">
            <div>
              <img src={fooditem1} alt="" className="w-full" />
            </div>
            <div className="p-5 space-y-3">
              <div>
                <h2>Indian Burger</h2>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, officia!
                </p>
              </div>
              <div>
                <ReadMoreBtn />
              </div>
            </div>
          </div>

          <div className="space-y-3 m-5 rounded-3xl border-gray-100 border-2 transition duration-150 ease-in-out hover:shadow-lg hover:shadow-orange-600/20">
            <div>
              <img src={fooditem3} alt="" className="w-full" />
            </div>
            <div className="p-5 space-y-3">
              <div>
                <h2>Indian Burger</h2>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, officia!
                </p>
              </div>
              <div>
                <ReadMoreBtn />
              </div>
            </div>
          </div>

          <div className="space-y-3 m-5 rounded-3xl border-gray-100 transition duration-150 ease-in-out border-2 hover:shadow-lg hover:shadow-orange-600/20">
            <div>
              <img src={fooditem2} alt="" className="w-full" />
            </div>
            <div className="p-5 space-y-3">
              <div>
                <h2>Indian Burger</h2>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, officia!
                </p>
              </div>
              <div>
                <ReadMoreBtn />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExclusiveItems;
