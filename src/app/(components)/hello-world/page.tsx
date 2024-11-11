"use client";

import React, { useState, useEffect } from 'react';

const HelloWorld: React.FC = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [isReturned, setIsReturned] = useState(false);

  // First animation: Slide text to the right and reveal the image
  useEffect(() => {
    const slideTimer = setTimeout(() => setIsMoved(true), 100);
    const returnTimer = setTimeout(() => setIsReturned(true), 1000); // Trigger return animation after a delay

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(returnTimer);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-500 overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${isMoved ? 'opacity-100' : 'opacity-0'
          }`}
        style={{
          backgroundImage:"url('/images/background.jpg')", // Replace with your image URL
        }}
      ></div>

      {/* "Hello World" Text for Slide Out */}
      <h1
        className={`text-7xl font-bold text-white absolute transition-all duration-1000 ease-in-out transform ${isMoved ? 'translate-x-[500px] opacity-0' : 'opacity-100'
          }`}
      >
        Hello World!
      </h1>

      {/* "Hello World" Text for Return from Bottom */}
      {isReturned && (
        <h1
          className={`text-9xl font-bold  text-white absolute bottom-[-100px] transition-all duration-1000 ease-in-out transform ${isReturned ? 'bottom-[40%] opacity-100' : 'opacity-0'
            }`}
        >
          Hello World!
        </h1>
      )}
    </div>
  );
};

export default HelloWorld;
