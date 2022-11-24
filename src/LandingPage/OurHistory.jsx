import React from "react";
import ReadMoreBtn from "../Components/ReadMoreBtn";
import SectionHeader from "../Components/SectionHeader";

const OurHistory = () => {
  return (
    <main className="px-4 ss:px-6 md:px-16 xl:px-40 py-6 md:py-16" id="popular">
    <SectionHeader text1="Poupular Dishes" text2="Our Exclusive Items" />
    <section className="sm:px-12">
      <div className="md:flex flex-row py-8 space-x-4 space-y-4">
        <div className="basis-3/5 my-auto">
          <img src="https://i.ibb.co/64wH6dd/pizza2.png" alt="" className="w-full h-full"/>
        </div>
        <div className="basis-2/5 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl text-gray-600 xl:text-4xl">Our History</h2>
            <h1 className="text-4xl font-mono xl:text-6xl">
              Where The Food's As Good As The Root Beer.
            </h1>
          </div>
          <h3 className="text-2xl">
            Satisfying people hunger for simple pleasures
          </h3>
          <p className="text-lg xl:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
            porro. Dolorem quis commodi impedit odio, exercitationem repellendus
            cumque! Reiciendis aperiam exercitationem laborum minus quis, sit
            pariatur eos veritatis ratione doloremque!
          </p>

          <div><ReadMoreBtn /></div>
        </div>
      </div>
      </section>
    </main>
  );
};

export default OurHistory;
