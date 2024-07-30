import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import ThemeToggle from './components/ThemeToggle';
import Footer from "./Components/Footer";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
          <div className="container mx-auto p-4">
            <div className="flex justify-end mb-4">
              <ThemeToggle />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
        <Footer></Footer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
