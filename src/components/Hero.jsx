import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const handleCTA = () => {
    alert('Thank you for visiting!');
  };

  return (
    <div className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-900 dark:to-pink-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 animate-float">
          <Sparkles size={16} className="text-yellow-300" />
          Welcome to the future of web design
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Transform Your Digital
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">
            Experience
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover a world of possibilities with our cutting-edge platform designed to elevate your digital presence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleCTA}
            className="group flex items-center gap-2 bg-white px-8 py-4 rounded-full font-semibold text-lg text-purple-600 hover:bg-purple-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </button>
          <a
            href="#features"
            className="text-white/90 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </div>
  );
};

export default Hero;