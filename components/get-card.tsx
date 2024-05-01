'use client';
import React, { useEffect, useState } from 'react';

const GetCard = () => {
  const defaultApiResult = 'Use the buttons above to call the API.';
  const [apiResult, setApiResult] = useState(defaultApiResult);
  const [loading, setLoading] = useState(false);

  const handleApiCall = async (apiEndpoint: string | URL | Request) => {
    try {
      setLoading(true);
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      setApiResult(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error calling the API:', error);
      setApiResult('Error calling the API. Check the console for more information.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      setApiResult('Loading...');
    }
  }, [loading]);

  const resetResult = () => {
    setApiResult(defaultApiResult);
    setLoading(false);
  };

  return (
    <>
      <div className="mt-8 flex space-x-8">
        <button
          onClick={() => handleApiCall('/api')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md"
        >
          /api
        </button>
        <button
          onClick={() => handleApiCall('/api/firebase')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md"
        >
          /api/firebase
        </button>
      </div>

      <div className="m-8 p-8 bg-gray-800 rounded-lg shadow-md absolute top-0 left-0 w-full max-w-lg overflow-y-auto h-full">
        <button
          onClick={resetResult}
          className="absolute top-0 right-0 p-2 text-2xl text-white hover:background-red-500"
        >
          ❌
        </button>
        <pre className="overflow-x-auto text-white">{apiResult}</pre>
      </div>
    </>
  );
};

export default GetCard;
