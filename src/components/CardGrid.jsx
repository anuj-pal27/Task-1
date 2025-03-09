import React from 'react';
import { Code, Zap, Shield, Globe, Palette, Clock } from 'lucide-react';

const cards = [
  {
    title: 'Modern Development',
    description: 'Build with the latest technologies and frameworks for optimal performance.',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Lightning Fast',
    description: 'Optimized for speed with next-generation performance features.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Enterprise Security',
    description: 'Advanced security measures to protect your data and users.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Global Scale',
    description: 'Deploy worldwide with our distributed infrastructure network.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Beautiful Design',
    description: 'Stunning interfaces that engage and delight your users.',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Always Available',
    description: '24/7 support and monitoring to ensure maximum uptime.',
    icon: Clock,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  }
];

const CardGrid = () => {
  return (
    <section id="features" className="py-32 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-base text-purple-600 dark:text-purple-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">
            Everything you need
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Powerful features to help you build the future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 card-zoom"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="relative z-20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                      <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;