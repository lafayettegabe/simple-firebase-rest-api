'use client';
import React, { useState } from 'react';

const ApiButtons = ({ setLoading, setApiResult }: { setLoading: Function, setApiResult: Function }) => {

  const handleApiCall = async (method: string) => {
    try {
      setLoading(true);
      const response = await fetch('/api/firebase', {
        method: method.toUpperCase(),
      });
      const data = await response.json();
      setApiResult(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error calling the API:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='relative w-full h-full items-center justify-center flex flex-col'>
      <div className="mt-8 flex space-x-8">
        <button
          onClick={() => handleApiCall('get')}
          className="text-white font-bold py-3 px-6 rounded-lg shadow-md bg-green-600 hover:bg-green-700"
        >
          GET
        </button>
        <button
          onClick={() => handleApiCall('post')}
          className="text-white font-bold py-3 px-6 rounded-lg shadow-md bg-blue-600 hover:bg-blue-700"
        >
          POST
        </button>
        <button
          onClick={() => handleApiCall('delete')}
          className="text-white font-bold py-3 px-6 rounded-lg shadow-md bg-red-600 hover:bg-red-700"
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default ApiButtons;