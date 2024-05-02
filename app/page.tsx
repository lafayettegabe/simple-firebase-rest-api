import React from 'react';
import APIDemo from '@/components/api-demo';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold">🔥 Firebase & Next.js</h1>
        <p className="text-lg">Serverless and blazing-fast CRUD API</p>
      </div>
      
      <APIDemo />
    </main>
  );
};

export default Home;
