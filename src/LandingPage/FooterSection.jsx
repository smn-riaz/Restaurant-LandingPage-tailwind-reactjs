import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="p-8">
      <section>
        <div className="sm:flex flex-row">
          <div className="basis-1/4 m-4 space-y-6">
            <h1 className="text-2xl my-2">About Us</h1>
            <div className="text-gray-500">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi illum assumenda excepturi nulla qui eius asperiores.
                Voluptate sequi aperiam ullam.
              </p>
            </div>
          </div>
          <div className="basis-1/4 m-4 space-y-6">
            <h1 className="text-2xl my-2">Important Link</h1>
            <div className="text-gray-500">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Foods</li>
              </ul>
            </div>
          </div>
          <div className="basis-1/4 m-4 space-y-6">
            <h1 className="text-2xl my-2">Contact Us</h1>
           <div className="text-gray-500">
           <p>Address: Lorem, ipsum dolor.</p>
            <p>Phone: 08898987889</p>
            <p>Email: restaurant@hotmail.com</p>
           </div>
          </div>
          <div className="basis-1/4 m-4 space-y-6">
            <h1 className="text-2xl my-2">Newsletter</h1>
            <div className="text-gray-500">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div className="flex flex-row bg-white py-1 ">
                <input type="text" placeholder="Enter Your Email" className="p-2 border-0 w-full focus:outline-none" /><button className="text-orange-500"><FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 py-2">
        <p className="text-gray-500 text-center">Developed by <a href="https://www.linkedin.com/in/shahman-riaz/" rel="noreferrer" target="_blank"><b><u>Shahman Riaz</u></b></a></p>
      </section>
    </footer>
  );
};

export default FooterSection;
