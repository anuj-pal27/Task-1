import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-white dark:bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent h-32"></div>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-base text-purple-600 dark:text-purple-400 font-semibold tracking-wide uppercase">Contact</h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">
            Get in touch
          </p>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            We'd love to hear from you
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center p-8 bg-green-50 dark:bg-green-900/20 rounded-2xl">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">
              Thank you!
            </h3>
            <p className="text-green-600 dark:text-green-300">
              Your message has been sent successfully. We'll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`block w-full px-4 py-3 rounded-lg ${
                  errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`block w-full px-4 py-3 rounded-lg ${
                  errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`block w-full px-4 py-3 rounded-lg ${
                  errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200`}
                placeholder="Your message here..."
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg text-white font-medium text-lg
                ${isSubmitting 
                  ? 'bg-purple-400 cursor-not-allowed' 
                  : 'bg-purple-600 hover:bg-purple-700'} 
                transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Send Message
                  <Send size={20} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;