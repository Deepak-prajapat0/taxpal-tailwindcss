import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function PriceList() {
  const priceList = [
    {
      cost: "9",
      type: "Starter",
    },
    {
      cost: "15",
      type: "Small Business",
    },
    {
      cost: "39",
      type: "Enterprise",
    },
  ];
  return (
    <div className="p-6 py-20 bg-[#030b36] text-white">
      <h1 className="text-5xl">Simple pricing for everyone</h1>
      <p className=" mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        consequuntur, quisquam totam minus suscipit temporibus?
      </p>
    <div className=" pt-24 flex lg:flex-row flex-col sm:flex-wrap justify-around items-center gap-6 ">
        {priceList.map((item,index)=>{
            return (
                <div key={item.cost} className={`p-10 lg:w-[24rem] sm:w-96 h-[30rem] flex flex-col text-left gap-3 ${index === 1 && "bg-blue-600" } rounded-2xl`}>
                    <span className="text-4xl">$ {item.cost}</span>
                    <h6>{item.type}</h6>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
                    <button className={` mt-3 w-full p-2 border ${index ===1 && "bg-white text-black"} rounded-3xl`}>Get started</button>

                    <ul className="pt-6 text-sm">
                      <li><IoIosCheckmarkCircleOutline className="inline m-2 text-lg"/>Lorem ipsum dolor sit </li>
                      <li><IoIosCheckmarkCircleOutline className="inline m-2 text-lg"/>Lorem ipsum adipisicing</li>
                      <li><IoIosCheckmarkCircleOutline className="inline m-2 text-lg"/>Lorem ipsum dolor elit.</li>
                      <li><IoIosCheckmarkCircleOutline className="inline m-2 text-lg"/>Lorem ipsum dolor sit </li>
                      <li><IoIosCheckmarkCircleOutline className="inline m-2 text-lg"/>Lorem adipisicing elit.</li>
                    </ul>
                </div>
            )
        })}
    </div>
    </div>
  );
}

export default PriceList;
