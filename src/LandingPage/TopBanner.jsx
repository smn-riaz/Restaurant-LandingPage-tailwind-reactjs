import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Navbar from "../Components/Navbar";
import party from "../Assets/fireworks.png";
import { HashLink } from "react-router-hash-link";

const TopBanner = () => {
  return (
    <main className="">
      <section className="">
        <Navbar />
      </section>

      <section className="ss:flex justify-center items-center  px-3 ss:px-6 md:px-16 xl:px-40 bg-[#F0EED4]">
        <div className="ss:bg-inherit space-y-6 md:space-y-8 basis-1/2">
          <div className="pt-8">
            <h5 className="text-3xl text-orange-500 font-medium md:text-4xl xl:text-6xl">
              Quality Taste Food
            </h5>
          </div>
          <div>
            <h2 className="text-3xl font-serif md:text-4xl xl:text-6xl">
              <span>Deliciousness jumping</span> <br />
              <span>into the mouth</span>
            </h2>
          </div>
          <div className="">
            <p className="text-lg md:text-xl xl:text-3xl text-gray-600">
              Together creeping heaven upon third dominion be upon won't
              darkness rule land behold it created good saw after she'd Our set
              living. Signs midst dominion creepeth morning
            </p>
          </div>
          <div className="flex flex-col ss:flex-row ss:space-x-4 space-y-4 ss:space-y-0 ss:items-center items-start">
            <div className="">
              <button className="border-2 hover:bg-orange-500 hover:text-white transition duration-700 hover:ring-2 hover:ring-offset-2 py-2 px-6 text-lg font-medium border-orange-400 hover:text-orange md:text-xl md:py-3 xl:text-2xl">
                <HashLink ssooth to="/#contact">
                  Reservation
                </HashLink>
              </button>
            </div>
            <div className="">
              <button className="hover:border-b-2 hover:translate-x-3 hover:border-t-2 border-t-2 border-b-2 border-l-2 ss:border-l-0 border-r-2 border-gray-300 hover:border-r-2 duration-500 p-2 text-lg font-medium hover:border-orange-400 hover:text-orange-500 md:text-xl md:py-3 xl:text-2xl">
                <span className="border-orange-600 rounded-full px-3 py-2 hover:bg-slate-300">
                  <FontAwesomeIcon
                    className="text-orange-500 text-lg"
                    icon={faPlay}
                  />
                </span><span>Reviews</span>
              </button>
            </div>
          </div>
        </div>

        <div className="basis-1/2 ">
          <img src="https://i.ibb.co/9GFv3NM/pizza.png" alt="" className="md:w-[90%]" />
          <div className="flex justify-end">
            <div className="shadow-gray-300 rounded-lg animate-bounce bg-[#ebe8e7e0] shadow-xl p-2 md:p-4">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-xl md:text-2xl text-orange-600">7%</h2>
                <h2>
                  <img src={party} alt="" className="h-5 md:h-8" />
                </h2>
              </div>
              <p className="text-xs md:text-lg">
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
