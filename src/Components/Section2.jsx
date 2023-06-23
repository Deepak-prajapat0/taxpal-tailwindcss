import React, { useState } from "react";
// import images from "../images/image";
import { BiBarChartSquare } from "react-icons/bi";
import { MdContacts } from "react-icons/md";
import { IoFileTrayStackedOutline } from "react-icons/io5";
const flexDiv =[
    {icon:<BiBarChartSquare/>,title:"Reporting"},
    {icon:<IoFileTrayStackedOutline/>,title:"Inventory"},
    {icon:<MdContacts/>,title:"Contacts"}
]

function Section2() {
    const [hoverIndex,setHoverIndex]=useState(-1);
  return (
    <section id="crousal-section" className="p-10 pt-20">
      <div>
        <div id="heading" className="max-w-[50rem] m-auto">
          <h1 className="p-6 text-5xl">Simplify everyday bussiness tasks</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            consectetur temporibus neque ut accusantium suscipit, architecto a
            velit.
          </p>
        </div>
        <div id="flex-section" className="pt-16 flex lg:flex-row flex-col gap-16 text-start">
        {flexDiv.map((item,index)=>{
            return(
                <div key={index} className="flex flex-col gap-4" onMouseEnter={()=>setHoverIndex(index)} onMouseLeave={()=>setHoverIndex(-1)}>
                    <span className={`text-4xl ${hoverIndex === index && "text-[#215ad4]"}`}>{item.icon}</span>
                    <span className={`${hoverIndex === index && "text-[#215ad4]"}`}>{item.title}</span>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, reiciendis.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem adipisci quam sint excepturi sit necessitatibus nobis tempore quis.</p>
                </div>
            )
        })}
        </div>
      </div>
      <div id="imagesSection"></div>
    </section>
  );
}

export default Section2;
