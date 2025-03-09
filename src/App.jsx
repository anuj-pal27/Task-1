import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';
import ContactForm from './components/ContactForm';
import { useEffect } from 'react';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = storedTheme === "dark" || (!storedTheme && prefersDark);
  
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      document.documentElement.classList.toggle("dark", newTheme);
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      console.log("Dark Mode:", newTheme);
      return newTheme;})
  };

  return (
    <div className={"min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200"}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <main>
          <Hero />
          <CardGrid />
          <ContactForm />
        </main>
        <footer className="bg-gray-50 dark:bg-gray-800 py-8 text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;