import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

export default function SingIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center flex-col h-[100dvh] gap-3">
        <h1 className="text-gray-500 text-2xl">Login </h1>
        <div className="border border-gray-200 p-9 w-1/2 flex flex-col gap-3">
          <div className="flex justify-start  flex-col">
            <label
              htmlFor="username"
              className="text-start text-neutral-500 text-sm"
            >
              username
            </label>
            <input
              placeholder="username"
              type="text"
              id="username"
              className="w-full border border-gray-300 h-12 p-3 rounded mt-1"
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-start  flex-col ">
            <label
              htmlFor="password"
              className="text-start text-neutral-500 text-sm"
            >
              password
            </label>
            <input
              placeholder="must have at leaast 6 characters"
              type="text"
              id="password"
              className="w-full border border-gray-300 h-12 p-3 rounded mt-1"
              onChange={handleChange}
            />
          </div>
          {error && <p className="text-red-500 mt-5">{error}</p>}
          <div className="mt-3">
            <button
              disabled={loading}
              className="bg-blue-700 w-full rounded p-3 text-white hover:bg-blue-500"
            >
              {loading ? "loading" : "LOGIN"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
