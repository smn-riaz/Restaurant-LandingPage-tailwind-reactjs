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
      type:"Asian Food"
    },
    {
      name: "John Smith",
      image: "https://i.ibb.co/JvpjKhV/chef2.png",
      type:"Chinese Food"
    },
    {
      name: "Rohn Smith",
      image: "https://i.ibb.co/hMTQgf7/chef3.png",
      type:"Thai Food"
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
    
    <main className="section-layout1" id="chef">
      <SectionHeader text1="Cooking Speciality" text2="Our Expert Chefs" />
      <section className="sm:px-12">
        <div className="grid md:grid-cols-3 grid-cols-1 xs:grid-cols-2">
          {chefs.map((chef) => (
            <div className="m-5 rounded-3xl transition duration-150 ease-in-out border-gray-100 border-2 hover:shadow-xl rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-[100px]">
              <div className="w-full">
                <img src={chef.image} alt="" className="w-full" />
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <h2 className="font-semibold text-xl lg:text-2xl xl:text-4xl">
                    {chef.name}
                  </h2>
                </div>
                <div>
                <p className="text-lg font-semibold text-primary xl:text-2xl">#{chef.type}</p>
              </div>
              <div className="grid grid-cols-4 w-3/4 sm:gap-5 py-4">

                {
                  icons.map(icon =>  <div>
                    <button className="hover:bg-orange-500 ease-in-out duration-700 hover:text-white text-center border-2 text-md text-gray-400 rounded-full h-[30px] w-[30px] xl:h-[50px] xl:w-[50px]"><a href={icon.link}><FontAwesomeIcon  icon={icon.name} /></a></button>
                  </div>)
                }
               
              </div>
                <div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Chef;
