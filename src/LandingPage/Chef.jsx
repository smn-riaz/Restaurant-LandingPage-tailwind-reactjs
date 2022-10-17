import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import SectionHeader from "../Components/SectionHeader";

const Chef = () => {
  const chefs = [
    {
      name: "Adam Smith",
      image: "https://i.ibb.co/0sk2xGy/chef1.png",
    },
    {
      name: "John Smith",
      image: "https://i.ibb.co/JvpjKhV/chef2.png",
    },
    {
      name: "Rohn Smith",
      image: "https://i.ibb.co/hMTQgf7/chef3.png",
    },
  ];

  const icons = [
    {
      name: faFacebookF,
      link: 'https://fb.com/'
    },
    {
      name: faTwitter,
      link: 'https://twitter.com/'
    },
    {
      name: faInstagram,
      link: 'https://instagram.com/'
    },
    {
      name: faSkype,
      link: 'https://skype.com/'
    },
  ]
  return (
    <main className="py-4" id="chefs">
      <SectionHeader text1="Popular Dishes" text2="Our Chefs"/>
      <section className="sm:p-7">
        <div className="sm:flex sm:flex-row">
          {
            chefs.map(chef =>  <div className="md:basis-1/3 sm:basis-1/2 basis-0 space-y-3 m-12 sm:m-6 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-[100px] border-gray-100 transition duration-150 ease-in-out border-2 hover:shadow-lg hover:shadow-orange-600/20">
            <div>
              <img src={chef.image} alt="" className="w-full" />
            </div>
            <div className="sm:p-5 space-y-3 text-center">
              <div>
                <h2 className="text-2xl">{chef.name}</h2>
              </div>
              <div>
                <p>Chef Master</p>
              </div>
              <div className="grid grid-cols-4 w-3/4 sm:gap-5 py-4">

                {
                  icons.map(icon =>  <div>
                    <button className="hover:bg-orange-500 ease-in-out duration-700 hover:text-white text-center border-2 text-md text-gray-400 rounded-full h-[30px] w-[30px]"><a href={icon.link}><FontAwesomeIcon  icon={icon.name} /></a></button>
                  </div>)
                }
               
              </div>
            </div>
          </div>)
          }
        </div>
      </section>
      <hr className="w-1/2 text-orange-500"/>
    </main>
  );
};

export default Chef;
