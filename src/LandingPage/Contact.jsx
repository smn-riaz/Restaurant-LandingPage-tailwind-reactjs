import React from "react";
import contactbg from "../Assets/contactbg.jpg";
import SectionHeader from "../Components/SectionHeader";

const Contact = () => {
  return (
    <main className="section-layout1" id="contact"
    style={{
      backgroundImage: `url(${contactbg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
      <SectionHeader text1="Quick Contact" text2="Ready to Reply" />
      <section className="sm:px-12">
        <div className="sm:flex sm:flex-row">
          <div className="basis-3/5 p-8 space-y-12">
            <div className="flex flex-row space-x-12">
              <div className="basis-1/2 space-y-12">
                <div>
                  <input
                    type="text"
                    className="w-full border-l-0 border-r-0 border-t-0 bg-slate-300 p-2 focus:outline-none"
                    placeholder="Name *"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full border-l-0 border-r-0 border-t-0 bg-slate-300 p-2 focus:outline-none"
                    placeholder="Persons *"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full border-l-0 border-r-0 border-t-0 bg-slate-300 p-2 focus:outline-none"
                    placeholder="Date *"
                  />
                </div>
              </div>
              <div className="basis-1/2 space-y-12">
                <div>
                  <input
                    type="text"
                    className="w-full border-l-0 border-r-0 border-t-0 bg-slate-300 p-2 focus:outline-none"
                    placeholder="Email *"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full border-l-0 border-r-0 border-t-0 bg-slate-300 p-2 focus:outline-none"
                    placeholder="Phone Number *"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full border-l-0 border-r-0 border-t-0 bg-slate-300 p-2 focus:outline-none"
                    placeholder="Time *"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <textarea
                type="text"
                className="w-full border-l-0 border-r-0 border-t-0 bg-slate-300 p-2 focus:outline-none"
                placeholder="Comment *"
              />
            </div>
            <div>
              <button
                type="button"
                class="transition duration-700 ease-in-out hover:bg-orange-600  bg-orange-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-md px-6  py-3 text-center mr-3 md:mr-0 "
              >
                BOOK A TABLE
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
