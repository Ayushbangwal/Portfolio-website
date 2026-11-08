
import React from 'react';

const LoadingScreen = () => {
  return (
    <div
      className="fixed inset-0 bg-gray-900
      flex items-center justify-center z-50"
    >
      <div className="text-center">

        {/* Loading Spinner */}
        <div
          className="w-12 h-12 mx-auto mb-6
          rounded-full border-4 border-white/10
          border-t-blue-500 animate-spin"
          role="status"
          aria-label="Loading"
        />

        {/* Name */}
        <h1 className="text-2xl font-semibold
        text-white mb-2">
          Ayush Bangwal
        </h1>

        {/* Loading Text */}
        <p className="text-sm text-gray-400">
          Loading portfolio...
        </p>

      </div>
    </div>
  );
};

export default LoadingScreen;
