import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SectionHeader from "../Components/SectionHeader";

const FooterSection = () => {
  return (
    <main className="px-4 ss:px-6 md:px-16 xl:px-40 py-6 md:pt-12" id="popular">
      <section className="sm:px-12">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 xl:text-xl">
          <div className="space-y-6">
            <h1 className="text-2xl xl:text-4xl my-2">About Us</h1>
            <div className="text-gray-500">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi illum assumenda.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-2xl xl:text-4xl my-2">Link</h1>
            <div className="text-gray-500">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Foods</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-2xl xl:text-4xl my-2">Contact</h1>
            <div className="text-gray-500">
              <p>Address: Lorem, ipsum dolor.</p>
              <p>Phone: 08898987889</p>
              <p>Email: restaurant@gmail.com</p>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-2xl xl:text-4xl my-2">Newsletter</h1>
            <div className="text-gray-500">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <div className="flex flex-row bg-white py-1 ">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="p-2 border-0 w-full focus:outline-none"
                />
                <button className="text-orange-500">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2">
        <p className="text-gray-500 text-center">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/shahman-riaz/"
            rel="noreferrer"
            target="_blank"
          >
            <b>
              <u>Shahman Riaz</u>
            </b>
          </a>
        </p>
      </section>
    </main>
  );
};

export default FooterSection;
