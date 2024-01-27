import React from "react";

export default function SignUp() {
  return (
    <div className="flex justify-center items-center flex-col h-[100dvh] gap-3">
       <h3 className="text-gray-500">Welcome! Pls SignUp</h3>
      <div className="border border-gray-200 p-6">
       
        <div className="flex justify-start  flex-col">
          <label htmlFor="input1" className="text-start text-neutral-500">
            name
          </label>
          <input
            type="text"
            id="input1"
            className=" w-40 border border-gray-300 h-9"
          />
        </div>
        <div className="flex justify-start  flex-col mt-3">
          <label htmlFor="input1" className="text-start text-neutral-500">
            password
          </label>
          <input
            type="text"
            id="input1"
            className=" w-40 border border-gray-300 h-9"
          />
        </div>
      </div>
    </div>
  );
}
