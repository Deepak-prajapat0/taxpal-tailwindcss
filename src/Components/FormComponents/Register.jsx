import React from "react";
import { Link } from "react-router-dom";

function Register() {
    const inputs=[
        {name:"Name",type:"text",placeholder:"John Doe"},
        {name:"Phone",type:"tel",placeholder:"+9876543210"},
        {name:"Email",type:"email",placeholder:"johndoe@fmail.com"},
        {name:"Password",type:"password",placeholder:"* * * * * * * *"}
    ]
  return (
    <div className="w-screen h-[90vh] max-md:py-2 md:flex flex-row items-center justify-between">
      <div className="w-1/2 max-md:w-full">
      <form className=" p-4 w-[24rem] m-auto flex flex-col gap-5">
        <div className="text-start">
        <h1>Get started for free</h1>
        <h6 className="py-1 text-sm text-gray-600">Already registered? <Link to='/login' className="text-blue-800 underline">Sign in</Link> to your account.</h6>
        </div>
        {inputs.map((imput,index)=>{
           return(
            <label className="block" key={index}>
            <span className="p-1 float-left block text-sm font-medium text-slate-700">
                {imput.name}
            </span>
            <input
              type={imput.type}
              name={imput.name}
              autoComplete="off"
              autoFocus={imput.name==="Name"}
              className="mt-1 px-3 py-2 bg-gray-100/50  border shadow-sm border-slate-300 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1  "
              placeholder={imput.placeholder}
              pattern="/^[a-zA-Z]*$/"
            />
          </label>
           )
        })}
        <div className="pl-1 pb-1 flex gap-2">
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">I accept all terms and conditions</label>
        </div>
        <button className="p-2 border border-blue-700 rounded-3xl hover:bg-blue-700 hover:text-white transition-colors duration-750">Register</button>
       
      </form>
      </div>
      <div className="block max-md:hidden h-full w-1/2 bg-gradient-to-r from-blue-400 to-blue-700">

      </div>
    </div>
  );
}

export default Register;
