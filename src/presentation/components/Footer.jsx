import React from 'react';
import { MessageCircle, Briefcase, Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-nav pt-16 pb-8 border-t border-black/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold tracking-tighter mb-4">
              NOV<span className="gradient-text">IQ</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Empowering businesses through cutting-edge AI, Enterprise architecture, and next-generation tech solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black transition-colors"><MessageCircle size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors"><Briefcase size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors"><Globe size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-black font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">News & Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-black font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">AI & Machine Learning</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Enterprise Systems</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Web & Mobile Apps</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Cloud Infrastructure</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-600 mb-4">Subscribe to our newsletter for the latest tech news.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-black/5 border border-black/10 rounded-l-md px-4 py-2 text-sm focus:outline-none focus:border-cyan-500 w-full text-black"
              />
              <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-r-md transition-colors flex items-center justify-center">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Noviq Inc. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-xs text-gray-500">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
