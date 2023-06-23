import React from "react";

function Testimonials() {
  return (
    <div className="h-screen p-10 flex flex-col items-center gap-16">
      <div className="max-w-[24rem]">
        <h1 className="text-4xl">Lorem ipsum dolor sit amet consectetur.</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        </p>
      </div>
      <div className="p-4 flex flex-row max-md:flex-col justify-center gap-4 flex-wrap">
        {new Array(6).fill("").map((item, index) => {
          return (
            <div key={index} className="max-w-[23rem] p-1 border rounded-md">
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                itaque doloremque quasi amet quibusdam!
              </p>

              <hr />
              <div className="p-3 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span>Peter Renolds</span>
                  <span className="text-xs text-gray-500">CEO at ABC LLC</span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=60&q=60"
                  alt="comment owner"
                  className="rounded-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
