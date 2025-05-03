import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c586a5] via-[#6a9bfa] to-[#f39c12] dark:from-[#2c3e50] dark:via-[#34495e] dark:to-[#8e44ad] text-white flex flex-col items-center justify-center">
      <div className="text-center px-6 md:px-12 py-6 md:py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Welcome to MY APP!
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Discover amazing features that can help you get organized and stay productive.
        </p>
        
        {/* Link to Todo Page */}
        <Link
          to="/todo"
          className="px-6 py-3 bg-[#f39c12] text-gray-800 text-lg font-semibold rounded-full hover:bg-[#e67e22] transition duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
        >
          Go to Todo Page
        </Link>
      </div>
    </div>
  );
};

export default Home;
