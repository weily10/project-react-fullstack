import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  return (
    <div className="text-black-700  p-3">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form action="" className="flex flex-col gap-3">
        <img
          src={currentUser.avatar}
          alt=""
          className="object-cover h-24 w-24 mx-auto"
        />
        <input
          type="text"
          className="border p-3"
          id="username"
          placeholder="username"
        />
        <input
          type="text"
          className="border p-3"
          id="email"
          placeholder="email"
        />
        <input
          type="text"
          className="border p-3"
          id="password"
          placeholder="password"
        />
        <button className="bg-slate-700 p-3 text-white rounded-lg">
          {" "}
          update
        </button>
      </form>
      <div className="flex justify-between mt-3">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">SignOut</span>
      </div>
    </div>
  );
}
