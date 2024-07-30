import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full"
    >
      {theme === 'light' ? <FaMoon className="text-yellow-500" /> : <FaSun className="text-yellow-300" />}
    </button>
  );
};

export default ThemeToggle;
