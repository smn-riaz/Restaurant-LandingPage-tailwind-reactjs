import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Navbar from "../Components/Navbar";
import bg from '../Assets/bg.jpg'
import { HashLink } from "react-router-hash-link";

const TopBanner = () => {
  return (
    <main className="">
      <section className=""><Navbar /></section>
      <section className="sm:flex md:flex-row flex-row-reverse sm:p-20 p-12 my-10 overflow-hidden">
        <div className="md:basis-1/2 z-10">
          <div className="py-6">
            <h5 className="text-3xl text-orange-500 font-medium">
              Quality Taste Food
            </h5>
          </div>
          <div>
            <h2 className="text-5xl">
              <span>Deliciousness jumping</span> <br />
              <span>into the mouth</span>
            </h2>
          </div>
          <div className="py-12">
            <p className="text-lg">
              Together creeping heaven upon third dominion be upon won't
              darkness rule land behold it created good saw after she'd Our set
              living. Signs midst dominion creepeth morning
            </p>
          </div>
          <div className="flex flex-row py-2">
            <div className="basis-1/3">
                <button className="border-2 hover:bg-orange-500 hover:text-white transition duration-700 hover:ring-2 hover:ring-offset-2 py-2 px-6 text-lg font-medium border-orange-400 hover:text-or"><HashLink smooth to="/#contact">Reservation</HashLink></button>
            </div>
            <div className="basis-2/3">
                <button className="hover:border-b-2 hover:translate-x-3 hover:border-t-2 border-t-2 border-b-2 border-r-2 border-white hover:border-r-2 duration-500 p-2 text-lg font-medium hover:border-orange-400 hover:text-orange-500"> <span className="border-orange-600 rounded-full px-3 py-2 hover:bg-slate-300"><FontAwesomeIcon className="text-orange-500 text-lg" icon={faPlay}/></span> Watch Our Story</button>
            </div>
          </div>
        </div>

        <div className="basis-1/2 -rotate-45 scale-125 translate-x-60 z-10">
            <div className=""><img src={bg} alt="" className="rounded-[60px]"/></div>
        </div>
      </section>
    </main>
  );
};

export default TopBanner;
