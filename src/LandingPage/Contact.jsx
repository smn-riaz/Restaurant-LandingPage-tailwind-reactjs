import React from "react";
import contactbg from "../Assets/contactbg.jpg";

const Contact = () => {
  return (
    <main id="contact"
      className="min-h-screen"
      style={{
        backgroundImage: `url(${contactbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section className="p-7 space-y-2">
        <h4 className="text-xl px-5 text-white">Reservation</h4>
        <h1 className="text-5xl text-orange-500">Book A Table</h1>
      </section>
      <section className="p-10">
        <div className="sm:flex sm:flex-row">
          <div className="basis-3/5 p-8 space-y-12">
            <div className="flex flex-row space-x-12">
              <div className="basis-1/2 space-y-12">
                <div>
                  <input
                    type="text"
                    className="w-full border-l-0 border-r-0 border-t-0 bg-slate-300"
                    placeholder="Name *"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full border-l-0 border-r-0 border-t-0 bg-slate-300"
                    placeholder="Persons *"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full border-l-0 border-r-0 border-t-0 bg-slate-300"
                    placeholder="Date *"
                  />
                </div>
              </div>
              <div className="basis-1/2 space-y-12">
                <div>
                  <input
                    type="text"
                    className="w-full border-l-0 border-r-0 border-t-0 bg-slate-300"
                    placeholder="Email *"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full border-l-0 border-r-0 border-t-0 bg-slate-300"
                    placeholder="Phone Number *"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full border-l-0 border-r-0 border-t-0 bg-slate-300"
                    placeholder="Time *"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <textarea
                type="text"
                className="w-full border-l-0 border-r-0 border-t-0 bg-slate-300"
                placeholder="Comment *"
              />
            </div>
            <div>
              <button
                type="button"
                class="transition duration-700 ease-in-out hover:bg-orange-600  bg-orange-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-md px-6  py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
