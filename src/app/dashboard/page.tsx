// pages/dashboard.tsx
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-semibold">Welcome to the Dashboard!</h2>
          <p>This is a basic dashboard page.</p>
        </div>
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-semibold">Dashboard Links</h2>
          <ul className="mt-2">
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
