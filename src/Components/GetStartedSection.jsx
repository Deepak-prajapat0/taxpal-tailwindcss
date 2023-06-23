import React from "react";
import { Link } from "react-router-dom";

function GetStartedSection() {
  return (
    <section className="lg:p-40 mt-12 p-10 bg-[#215ad4] text-white">
      <div className=" m-auto lg:w-1/2 w-[80%] flex flex-col gap-3 items-center">
        <h1 className="text-5xl">Get started today</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          necessitatibus dicta sed, inventore aliquam, exercitationem iure
          repudiandae, architecto maiores non pariatur quam?
        </p>
        <Link to='/login'>
        <button className="w-max mt-4 p-2 px-4 rounded-3xl bg-white text-black">Get 6 months free</button>
        </Link>
      </div>
    </section>
  );
}

export default GetStartedSection;
