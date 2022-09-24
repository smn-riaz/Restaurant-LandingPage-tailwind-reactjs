import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import chef1 from "../Assets/chef1.png";
import chef2 from "../Assets/chef2.png";
import chef3 from "../Assets/chef3.png";
import { Link } from "react-router-dom";

const Chef = () => {
  const chefs = [
    {
      name: "Adam Smith",
      image: chef1,
    },
    {
      name: "John Smith",
      image: chef2,
    },
    {
      name: "Rohn Smith",
      image: chef3,
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
    <main className="min-h-screen p-10" id="chefs">
      <section className="p-7 space-y-2">
        <h4 className="text-xl px-5 text-gray-400">Poupular Dishes</h4>
        <h1 className="text-5xl">Our Exclusive Items</h1>
      </section>
      <section className="p-7">
        <div className="sm:grid sm:grid-cols-3">
          {
            chefs.map(chef =>  <div className="space-y-3 m-5 rounded-3xl border-gray-100 transition duration-150 ease-in-out border-2 hover:shadow-lg hover:shadow-orange-600/20">
            <div>
              <img src={chef.image} alt="" className="w-full" />
            </div>
            <div className="p-5 space-y-3 text-center">
              <div>
                <h2 className="text-2xl">{chef.name}</h2>
              </div>
              <div>
                <p>Chef Master</p>
              </div>
              <div className="grid grid-cols-4 gap-5 ">

                {
                  icons.map(icon =>  <div>
                    <button className="hover:bg-orange-500 ease-in-out duration-700 hover:text-white border-2 text-md text-gray-400 rounded-full px-2 py-1 w-1/2"><a href={icon.link}><FontAwesomeIcon  icon={icon.name} /></a></button>
                  </div>)
                }
               
              </div>
            </div>
          </div>)
          }
        </div>
      </section>
    </main>
  );
};

export default Chef;
