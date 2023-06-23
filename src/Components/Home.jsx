import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import GetStartedSection from "./GetStartedSection";
import { homeImages } from "../images/images";
import { Link } from "react-router-dom";

function Home() {
 
  return (
   <>
    <main>
      <div className="mt-40 ">
        <h1 className="font-medium text-7xl ">
          Accounting <span className="text-[#2563EB]">made simple</span> <br />
          for small businesses
        </h1>
        <h3 className="m-auto mt-8 p-4 max-w-[33rem] text-gray-700">
          Most bookkeeping software is accurate, but hard to use. We make the
          opposite trade-off, and hope you don't get audited.
        </h3>
        <div className="m-auto p-4 w-max flex flex-row justify-center gap-6">
          <Link to='/login'>
          <button className=" p-2 rounded-3xl bg-black text-white">
            Get 6 months free
          </button></Link>
          <button className="p-2 flex flex-row items-center  rounded-3xl border">
            <img
              className="h-6"
              src="https://img.icons8.com/?size=1x&id=15162&format=png"
              alt=""
            />
            Watch video{" "}
          </button>
        </div>
      </div>
      <div className="mt-[10rem]">
        <h4>Trusted by these companies so far</h4>
        <div className="m-auto mt-6 flex flex-row flex-wrap gap-12 justify-center">
            {homeImages.map((image,index)=>{
                return (
                    <img key={index} src={image} alt="index" />
                )
            })}
        </div>
      </div>
    </main>
   <Section1/>
   <Section2/>
   <GetStartedSection/>
   </>
  );
}

export default Home;
