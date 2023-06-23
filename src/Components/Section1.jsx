import React, { useState } from "react";
import {images} from "../images/images"

function Section1() {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = ["Payroll", "Expenses", "Vat-returns", "Reporting"];

  return (
    <section className="h-full w-screen  mt-20 lg:p-10 p-6 overflow-x-hidden  text-white  bg-gradient-to-r from-cyan-500  to-blue-600">
      <div className="mb-12 p-10 flex flex-col gap-4 ">
        <h1 className="text-5xl">Lorem ipsum dolor sit amet ipsum dolor </h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ad animi
          quaerat magnam!
        </h3>
      </div>
      <div className="lg:w-max flex lg:flex-row flex-col items-center ">
        <div className=" lg:w-auto w-3/4 lg:p-0 p-4 flex lg:flex-col flex-row justify-between">
          {tabs.map((tab, index) => {
            return (
              <div
                className={`lg:p-6 p-2 px-2 lg:h-32 lg:flex lg:flex-col justify-center items-start gap-4 text-white cursor-pointer rounded-lg ${
                  tabIndex === index &&
                  " bg-white/20 border border-gray-300 border-r-0"
                }`}
                key={index}
                onClick={() => setTabIndex(index)}
              >
                <button>{tab}</button>
                <p className="lg:block hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            );
          })}
        </div>
        <div>
          <img className="rounded-2xl" src={images[tabIndex]} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Section1;
