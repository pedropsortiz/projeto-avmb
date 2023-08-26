import "./HomeScreen.css"

import React from 'react';

export default function HomeScreen() {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <div className="flex justify-center">
        <img src="/path/to/image" alt="Logo" className="w-48 h-48" />
      </div>
      <div className="w-full max-w-xs mt-8">
        <form className="px-8 py-6 bg-white shadow-md rounded-xl">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-700">Password</label>
            <input type="password" id="password" className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <button type="submit" className="w-full px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Login</button>
        </form>
      </div>
    </div>
  );
}