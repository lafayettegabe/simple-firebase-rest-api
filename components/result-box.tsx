'use client';
import React, { useEffect, useState } from 'react';

const Box = ({ loading, apiResult }: { loading: boolean, apiResult: string }) => {
  const defaultApiResult = 'Click one of the buttons to call the API.';
  const [result, setResult] = useState(defaultApiResult);

  useEffect(() => {
    if (!loading) {
      setResult(apiResult);
    } else {
      setResult('Loading...');
    }
  }, [loading, apiResult]);

  const resetResult = () => {
    setResult(defaultApiResult);
  };

  return (
    <div className="m-8 p-8 bg-gray-800 rounded-lg shadow-md absolute top-0 left-0 w-full max-w-lg overflow-y-auto h-full">
      <button
        onClick={resetResult}
        className="absolute top-0 right-0 p-2 text-2xl text-white hover:background-red-500"
      >
        ❌
      </button>
      <pre className="overflow-x-auto text-white">{result}</pre>
    </div>
  );
};

export default Box;