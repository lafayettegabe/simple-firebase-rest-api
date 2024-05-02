'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/redux/store';
import { setDefault, selectApiResult, selectLoading } from '@/redux/features/boxSlice';

const Box = () => {
  const dispatch = useAppDispatch();
  const result = useSelector((state: RootState) => selectApiResult(state));
  const loading = useSelector((state: RootState) => selectLoading(state));

  return (
    <div className="flex min-h-screen min-w-[50%] relative m-8 p-8 bg-gray-800 rounded-lg shadow-md">
      <button
        onClick={() => {!loading && dispatch(setDefault())}}
        className={`absolute top-0 right-0 p-2 text-2xl text-white hover:background-red-500 
          ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      >
        ❌ 
      </button>
      <pre className="text-white">{result}</pre>
    </div>
  );
};

export default Box;