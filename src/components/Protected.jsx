import React from "react";

const Protected = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">
          <h3>Protected Content</h3>
          <p>This is a protected page.</p>
        </h1>
      </div>
    </div>
  );
};

export default Protected;