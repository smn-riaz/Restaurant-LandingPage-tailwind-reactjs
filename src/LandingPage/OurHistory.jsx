import React from "react";
import about from "../Assets/about.png";
import ReadMoreBtn from "../Components/ReadMoreBtn";

const OurHistory = () => {
  return (
    <main id="about">
      <div className="sm:flex sm:flex-row">
        <div className="basis-1/2 my-auto">
          <img src={about} alt="" className=""/>
        </div>
        <div className="basis-1/2 my-auto space-y-5 p-5">
          <div>
            <h2 className="text-xl font-bold text-gray-400">Our History</h2>
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
