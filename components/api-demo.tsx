'use client';
import Box from '@/components/result-box';
import ApiButtons from '@/components/api-buttons';
import { useState } from 'react';

const ApiDemo = () => {
  const [loading, setLoading] = useState(false);
  const [apiResult, setApiResult] = useState('Click one of the buttons to call the API.');

  return (
    <div className="flex items-center justify-center min-h-screen min-w-full">
      <Box />
      <ApiButtons />
    </div>
  );
};

export default ApiDemo;