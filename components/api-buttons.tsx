"use client";
import React from "react";
import { useAppDispatch } from "@/redux/store";
import { setLoading, setApiResult } from "../redux/features/boxSlice";

const ApiButtons = () => {
  const dispatch = useAppDispatch();

  const handleApiCall = async (method: string) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch("/api/documents", {
        method: method.toUpperCase(),
      });
      const data = await response.json();
      dispatch(setApiResult(JSON.stringify(data, null, 2)));
    } catch (error) {
      console.error("Error calling the API:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="fixed bottom-0 right-0 m-8">
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => handleApiCall("get")}
          className="text-white font-bold py-3 px-6 rounded-lg shadow-md bg-green-600 hover:bg-green-700"
        >
          GET
        </button>
        <button
          onClick={() => handleApiCall("post")}
          className="text-white font-bold py-3 px-6 rounded-lg shadow-md bg-blue-600 hover:bg-blue-700"
        >
          POST
        </button>
        <button
          onClick={() => handleApiCall("delete")}
          className="text-white font-bold py-3 px-6 rounded-lg shadow-md bg-red-600 hover:bg-red-700"
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default ApiButtons;

