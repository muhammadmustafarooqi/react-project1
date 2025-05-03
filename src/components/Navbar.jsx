import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/Theme'; // Named import

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { themeMode, darkMode, lightMode } = useTheme(); // get the theme state from context
  
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'Todo', path: '/todo' },
    { label: 'User', path: '/user' }
  ];

  const navigateFnc = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center py-6 px-10 bg-white dark:bg-gray-900">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          MY APP <span className="w-2 h-2 bg-[#c586a5] rounded-full inline-block ml-1"></span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-600 dark:text-white">
          {menuItems.map((item) => (
            <li
              key={item.label}
              onClick={() => navigateFnc(item.path)}
              className={`cursor-pointer hover:text-[#c586a5] transition duration-300 ${
                location.pathname === item.path ? 'text-[#c586a5] underline underline-offset-4' : ''
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={themeMode === "dark" ? lightMode : darkMode} // Use context functions to toggle the theme
          className="hidden md:inline-block ml-4 text-sm px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        >
          {themeMode === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={themeMode === "dark" ? lightMode : darkMode} // Use context functions to toggle the theme
            className="text-sm px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            {themeMode === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white dark:bg-gray-900 shadow-sm">
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-600 dark:text-white">
            {menuItems.map((item) => (
              <li
                key={item.label}
                onClick={() => navigateFnc(item.path)}
                className={`cursor-pointer hover:text-[#c586a5] transition duration-300 ${
                  location.pathname === item.path ? 'text-[#c586a5] underline underline-offset-4' : ''
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
