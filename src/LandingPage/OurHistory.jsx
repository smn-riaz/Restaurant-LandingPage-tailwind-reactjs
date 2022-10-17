import React from "react";
import ReadMoreBtn from "../Components/ReadMoreBtn";

const OurHistory = () => {
  return (
    <main id="about">
      <div className="sm:flex sm:flex-row px-10 py-14 space-x-4">
        <div className="basis-3/5 my-auto">
          <img src="https://i.ibb.co/64wH6dd/pizza2.png" alt="" className=""/>
        </div>
        <div className="basis-2/5 my-auto space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-400 py-2">Our History</h2>
            <h1 className="text-5xl">
              Where The Food's As Good As The Root Beer.
            </h1>
          </div>
          <h3 className="text-2xl">
            Satisfying people hunger for simple pleasures
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
            porro. Dolorem quis commodi impedit odio, exercitationem repellendus
            cumque! Reiciendis aperiam exercitationem laborum minus quis, sit
            pariatur eos veritatis ratione doloremque!
          </p>

          <div><ReadMoreBtn /></div>
        </div>
      </div>
    </main>
  );
};

export default OurHistory;
