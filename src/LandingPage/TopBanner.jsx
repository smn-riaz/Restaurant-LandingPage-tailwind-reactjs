import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Navbar from "../Components/Navbar";
import party from "../Assets/fireworks.png";
import { HashLink } from "react-router-hash-link";

const TopBanner = () => {
  return (
    <main className="min-h-screen">
      <section className="">
        <Navbar />
      </section>
      <section className="sm:flex justify-center items-center">
        <div className="bg-[#F0EED4] sm:bg-inherit md:basis-1/2 px-12 pb-4">
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
          <div className="flex flex-row space-x-2 justify-end items-center">
            <div className="basis-1/3">
              <button className="border-2 hover:bg-orange-500 hover:text-white transition duration-700 hover:ring-2 hover:ring-offset-2 py-2 px-6 text-lg font-medium border-orange-400 hover:text-or">
                <HashLink smooth to="/#contact">
                  Reservation
                </HashLink>
              </button>
            </div>
            <div className="basis-2/3">
              <button className="hover:border-b-2 hover:translate-x-3 hover:border-t-2 border-t-2 border-b-2 border-r-2 border-white hover:border-r-2 duration-500 p-2 text-lg font-medium hover:border-orange-400 hover:text-orange-500">
                <span className="border-orange-600 rounded-full px-3 py-2 hover:bg-slate-300">
                  <FontAwesomeIcon
                    className="text-orange-500 text-lg"
                    icon={faPlay}
                  />
                </span>
                Watch <span className="hidden sm:inline-block">Our Story</span>
              </button>
            </div>
          </div>
        </div>


        <div className="basis-1/2 mx-2 bg-[#F0EED4] sm:bg-inherit">
          <div className="relative">
            <img src="https://i.ibb.co/9GFv3NM/pizza.png" alt="" className="w-full h-full py-4" />
            <div className="shadow-gray-300 rounded-lg animate-bounce bg-[#ebe8e7e0] shadow-xl p-2 absolute bottom-0 right-0">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-xl text-orange-600">7%</h2>
                <h2>
                  <img src={party} alt="" className="h-5" />
                </h2>
              </div>
              <p className="text-xs">
                <span className="font-semibold font-serif">Discount</span> for 3
                orders
              </p>
            </div>
          </div>
        </div>

        
      </section>
    </main>
  );
};

export default TopBanner;
