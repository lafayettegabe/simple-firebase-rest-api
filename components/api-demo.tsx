'use client';
import Box from '@/components/result-box';
import ApiButtons from '@/components/api-buttons';
import { useState } from 'react';

const ApiDemo = () => {
  const [loading, setLoading] = useState(false);
  const [apiResult, setApiResult] = useState('Click one of the buttons to call the API.');

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Box loading={loading} apiResult={apiResult} />
      <ApiButtons setLoading={setLoading} setApiResult={setApiResult} />
    </div>
  );
};

export default ApiDemo;