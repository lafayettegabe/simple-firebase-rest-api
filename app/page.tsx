import React from 'react';
import GetCard from '@/components/get-card';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold">🔥 Firebase & Next.js</h1>
        <p className="text-lg">Serverless and blazing-fast CRUD API</p>
      </div>
      
      <GetCard />
    </main>
  );
};

export default Home;
