import React from 'react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

// --- CUSTOM GITHUB ICON ---
const GithubIcon = ({ size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const Work = () => {
  return (
    <section id="work" className="w-full border-t border-gray-100 bg-gray-50/50">
      <div className="max-w-325 mx-auto px-6 md:px-12 py-24 font-sans">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-2">02 — My Projects</h2>
          <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4">
            Selected Work
          </h3>
          <p className="text-gray-500 font-medium max-w-2xl text-[15px]">
            A collection of projects I've built, ranging from full-stack web applications to interactive mobile apps.
          </p>
        </div>

        {/* Featured Project (Large Card) - WeatherWear */}
        <div className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6 hover:shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Project Image / Visual */}
            <div className="bg-[#0a0a0a] h-56 lg:h-auto relative overflow-hidden flex items-center justify-center p-6">
               <div className="absolute inset-0 bg-linear-to-tr from-gray-800 to-gray-900 opacity-50"></div>
               <div className="w-40 h-80 bg-white rounded-4xl border-[6px] border-gray-800 shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500 overflow-hidden flex flex-col items-center justify-center">
                  <span className="text-5xl mb-2">⛅</span>
                  <span className="font-bold text-gray-800 text-lg">WeatherWear</span>
                  <span className="text-[10px] text-gray-500 mt-1">Outfit Recommender</span>
               </div>
            </div>

            {/* Project Details */}
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold tracking-widest uppercase text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                  Featured Project
                </span>
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-black mb-3">WeatherWear</h4>
              <p className="text-gray-500 text-sm font-medium leading-relaxed mb-5">
                A full-stack mobile app that suggests what to wear based on live weather data. Built for Expo SDK 54 (React-Native) and FastAPI (Python) with ML recommendations for 94% accuracy.
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['React Native', 'Expo', 'FastAPI', 'Python', 'XGBoost', 'Firebase'].map(tech => (
                  <span key={tech} className="text-[10px] font-bold tracking-widest uppercase text-gray-600 border border-gray-200 px-2.5 py-1 rounded-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                <a href="https://github.com/bibek997/WeatherWear-" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-black text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-gray-800 transition-colors">
                  View Source <GithubIcon size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Project Card 1 - BaristaArabica */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col hover:shadow-xl transition-all duration-300 group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-amber-50 rounded-lg border border-amber-100 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white text-amber-600 transition-colors duration-300">
                <span className="font-bold text-lg">☕</span>
              </div>
              <div className="flex gap-2">
                <a href="https://github.com/bibek997/BaristaArabica" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black transition-colors"><GithubIcon size={18} /></a>
                <a href="https://arabicabrewcoffee.com.np/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black transition-colors"><ExternalLink size={18} /></a>
              </div>
            </div>
            <h4 className="text-lg font-bold text-black mb-2">BaristaArabica</h4>
            <p className="text-gray-500 text-sm font-medium mb-4 grow">
              A modern e-commerce web application for a coffee brand. Features product listings, a smooth checkout experience, and a clean, responsive design.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {['HTML', 'CSS', 'E-Commerce'].map(tech => (
                <span key={tech} className="text-[9px] font-bold tracking-widest uppercase text-gray-400 border border-gray-100 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Card 2 - Heart Guessing Game */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col hover:shadow-xl transition-all duration-300 group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-red-50 rounded-lg border border-red-100 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white text-red-500 transition-colors duration-300">
                <span className="font-bold text-lg">❤️</span>
              </div>
              <div className="flex gap-2">
                <a href="https://github.com/bibek997/Heart-Game" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black transition-colors"><GithubIcon size={18} /></a>
              </div>
            </div>
            <h4 className="text-lg font-bold text-black mb-2">Heart-Guessing Game</h4>
            <p className="text-gray-500 text-sm font-medium mb-4 grow">
              A full-stack web app featuring React, Node.js/Express, and Firebase for auth and database storage. Includes JWT management and interactive gameplay.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {['React', 'Node.js', 'Express', 'Firebase'].map(tech => (
                <span key={tech} className="text-[9px] font-bold tracking-widest uppercase text-gray-400 border border-gray-100 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Card 3 - GigHire Chat App */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col hover:shadow-xl transition-all duration-300 group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-lg border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white text-blue-600 transition-colors duration-300">
                <span className="font-bold text-lg">💬</span>
              </div>
              <div className="flex gap-2">
                <a href="https://github.com/bibek997/MyGigHireChatApp" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black transition-colors"><GithubIcon size={18} /></a>
              </div>
            </div>
            <h4 className="text-lg font-bold text-black mb-2">GigHire Chat App</h4>
            <p className="text-gray-500 text-sm font-medium mb-4 grow">
              A real-time chat application built for gig workers and hirers. Features instant messaging, user authentication, and a clean, responsive interface.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {['React', 'Real-time DB', 'Auth'].map(tech => (
                <span key={tech} className="text-[9px] font-bold tracking-widest uppercase text-gray-400 border border-gray-100 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Card 4 - LMS Frontend */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col hover:shadow-xl transition-all duration-300 group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-purple-50 rounded-lg border border-purple-100 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white text-purple-600 transition-colors duration-300">
                <span className="font-bold text-lg">📚</span>
              </div>
              <div className="flex gap-2">
                <a href="https://github.com/bibek997/LMS-Frontend" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black transition-colors"><GithubIcon size={18} /></a>
              </div>
            </div>
            <h4 className="text-lg font-bold text-black mb-2">Library Management System</h4>
            <p className="text-gray-500 text-sm font-medium mb-4 grow">
              A modern frontend interface for a Library Management System. Designed to handle course listings, student dashboards, and educational content delivery.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {['React', 'Tailwind', 'Frontend'].map(tech => (
                <span key={tech} className="text-[9px] font-bold tracking-widest uppercase text-gray-400 border border-gray-100 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Card 5 - Explore More (Fills the 5th slot) */}
          <div className="bg-gray-50 border border-gray-200 border-dashed p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-all duration-300 group cursor-pointer md:col-span-2 lg:col-span-2">
             <a href="https://github.com/bibek997" target="_blank" rel="noreferrer" className="flex flex-col items-center">
                <div className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="text-gray-400 group-hover:text-black" size={20} />
                </div>
                <h4 className="text-lg font-bold text-black mb-1">Explore More</h4>
                <p className="text-gray-500 text-xs max-w-xs">Check out my GitHub repository for more open-source projects.</p>
             </a>
          </div>

        </div>

        {/* Bottom Action Button */}
        <div className="mt-12 flex justify-center">
          <a 
            href="https://github.com/bibek997" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 hover:-translate-y-0.5 transition-all shadow-md"
          >
            Explore Other Projects
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Work