import React from 'react'
import { FileCode2, Database, Flame, PenTool, Layers, Smartphone, LayoutTemplate, Server } from 'lucide-react'

const Expertise = () => {
  // Custom SVG for Python
  const PythonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.25.18c-1.74 0-3.15.11-4.29.32-1.13.21-2.05.55-2.75.99-.7.44-1.2.99-1.5 1.66-.3.67-.45 1.43-.45 2.3v2.25h8.63v.9H4.25c-.95 0-1.75.2-2.4.58-.66.39-1.16.93-1.5 1.63-.34.7-.51 1.51-.51 2.45v4.65c0 .94.17 1.75.51 2.45.34.7.84 1.24 1.5 1.63.65.38 1.45.58 2.4.58h2.25v-3.8c0-.95.2-1.75.58-2.4.39-.66.93-1.16 1.63-1.5.7-.34 1.51-.51 2.45-.51h4.65c.94 0 1.75-.17 2.45-.51.7-.34 1.24-.84 1.63-1.5.38-.65.58-1.45.58-2.4V5.4c0-.95-.2-1.75-.58-2.4-.39-.66-.93-1.16-1.63-1.5-.7-.34-1.51-.51-2.45-.51h-2.25v3.8c0 .95-.2 1.75-.58 2.4-.39.66-.93 1.16-1.63 1.5-.7.34-1.51.51-2.45.51H9.6c-.94 0-1.75.17-2.45.51-.7.34-1.24.84-1.63 1.5-.38.65-.58 1.45-.58 2.4v2.25h4.65c.94 0 1.75-.17 2.45-.51.7-.34 1.24-.84 1.63-1.5.38-.65.58-1.45.58-2.4V9.6c0-.95-.2-1.75-.58-2.4-.39-.66-.93-1.16-1.63-1.5-.7-.34-1.51-.51-2.45-.51h-2.25v3.8c0 .95.2 1.75.58 2.4.39.66.93 1.16 1.63 1.5.7.34 1.51.51 2.45.51H14.25Z" />
    </svg>
  )

  // 1. Core Competencies Data
  const competencies = [
    { 
      title: 'Frontend Development', 
      desc: 'Building responsive, accessible, and high-performance user interfaces using modern frameworks.',
      icon: <LayoutTemplate size={24} />
    },
    { 
      title: 'Backend Development', 
      desc: 'Developing robust server-side logic, RESTful APIs, and microservices.',
      icon: <Server size={24} />
    },
    { 
      title: 'Database Development', 
      desc: 'Designing schemas, writing complex queries, and managing both relational and NoSQL databases.',
      icon: <Database size={24} />
    },
    { 
      title: 'Full Stack Development', 
      desc: 'Connecting frontend and backend seamlessly to build complete end-to-end web applications.',
      icon: <Layers size={24} />
    },
    { 
      title: 'Mobile App Development', 
      desc: 'Creating cross-platform mobile applications with native-like performance.',
      icon: <Smartphone size={24} />
    },
  ]

  return (
    <section id="expertise" className="w-full border-t border-gray-100 bg-white">
      <div className="max-w-325 mx-auto px-6 md:px-12 py-24 font-sans">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-2">04 — Expertise</h2>
          <h3 className="text-3xl font-black uppercase tracking-tight text-black">What I Do</h3>
        </div>

        {/* 1. Core Competencies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {competencies.map((item, i) => (
            <div 
              key={i} 
              className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-6 text-gray-600 group-hover:text-black transition-colors">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-black mb-3">{item.title}</h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 2. Tech Stack Section */}
        <div className="mb-10">
          <h4 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-6">Tools & Technologies</h4>
          
          <div className="flex flex-wrap gap-3">
            
            {/* HTML5 */}
            <div className="flex items-center gap-2 bg-[#E44D26] text-white px-4 py-2.5 rounded text-sm font-bold tracking-wide shadow-sm hover:scale-105 transition-transform cursor-default">
              <FileCode2 size={18} />
              HTML5
            </div>

            {/* Python */}
            <div className="flex items-center gap-2 bg-[#3776AB] text-white px-4 py-2.5 rounded text-sm font-bold tracking-wide shadow-sm hover:scale-105 transition-transform cursor-default">
              <PythonIcon />
              PYTHON
            </div>

            {/* JavaScript */}
            <div className="flex items-center gap-2 bg-[#323330] text-white px-4 py-2.5 rounded text-sm font-bold tracking-wide shadow-sm hover:scale-105 transition-transform cursor-default">
              <span className="w-[18px] h-[18px] bg-[#F7DF1E] text-black flex items-center justify-center text-[10px] rounded-sm font-black">JS</span>
              JAVASCRIPT
            </div>

            {/* React */}
            <div className="flex items-center gap-2 bg-[#20232A] text-white px-4 py-2.5 rounded text-sm font-bold tracking-wide shadow-sm hover:scale-105 transition-transform cursor-default">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="#61DAFB" strokeWidth="1">
                <circle cx="0" cy="0" r="2.05" fill="#61DAFB" stroke="none"/>
                <ellipse rx="11" ry="4.2" stroke="#61DAFB"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)" stroke="#61DAFB"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)" stroke="#61DAFB"/>
              </svg>
              REACT
            </div>

            {/* React Native */}
            <div className="flex items-center gap-2 bg-[#20232A] text-white px-4 py-2.5 rounded text-sm font-bold tracking-wide shadow-sm hover:scale-105 transition-transform cursor-default">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="#61DAFB" strokeWidth="1">
                <circle cx="0" cy="0" r="2.05" fill="#61DAFB" stroke="none"/>
                <ellipse rx="11" ry="4.2" stroke="#61DAFB"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)" stroke="#61DAFB"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)" stroke="#61DAFB"/>
              </svg>
              REACT NATIVE
            </div>

            {/* MySQL */}
            <div className="flex items-center gap-2 bg-[#00758F] text-white px-4 py-2.5 rounded text-sm font-bold tracking-wide shadow-sm hover:scale-105 transition-transform cursor-default">
              <Database size={18} className="text-[#F29111]" />
              MYSQL
            </div>

            {/* Firebase */}
            <div className="flex items-center gap-2 bg-[#FFCA28] text-black px-4 py-2.5 rounded text-sm font-bold tracking-wide shadow-sm hover:scale-105 transition-transform cursor-default">
              <Flame size={18} className="text-[#FF8F00]" />
              FIREBASE
            </div>

            {/* Canva */}
            <div className="flex items-center gap-2 bg-[#00C4CC] text-white px-4 py-2.5 rounded text-sm font-bold tracking-wide shadow-sm hover:scale-105 transition-transform cursor-default">
              <PenTool size={18} />
              CANVA
            </div>

            {/* Figma */}
            <div className="flex items-center gap-2 bg-[#F24E1E] text-white px-4 py-2.5 rounded text-sm font-bold tracking-wide shadow-sm hover:scale-105 transition-transform cursor-default">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2H8.5a3.5 3.5 0 0 0 0 7H12V2Z"/>
                <path d="M12 9H8.5a3.5 3.5 0 0 0 0 7H12V9Z"/>
                <path d="M12 16H8.5a3.5 3.5 0 1 0 3.5 3.5V16Z"/>
                <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2Z"/>
                <path d="M12 9h3.5a3.5 3.5 0 1 1 0 7H12V9Z"/>
              </svg>
              FIGMA
            </div>

            {/* --- ADDED EXTRA TECH STACK --- */}
            
            {/* Tailwind CSS */}
            <div className="flex items-center gap-2 bg-[#0F172A] text-white px-4 py-2.5 rounded text-sm font-bold tracking-wide shadow-sm hover:scale-105 transition-transform cursor-default">
              <span className="w-[18px] h-[18px] text-[#38BDF8] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>
              </span>
              TAILWIND CSS
            </div>

            {/* Node.js */}
            <div className="flex items-center gap-2 bg-[#339933] text-white px-4 py-2.5 rounded text-sm font-bold tracking-wide shadow-sm hover:scale-105 transition-transform cursor-default">
              <Server size={18} />
              NODE.JS
            </div>

            {/* MongoDB */}
            <div className="flex items-center gap-2 bg-[#47A248] text-white px-4 py-2.5 rounded text-sm font-bold tracking-wide shadow-sm hover:scale-105 transition-transform cursor-default">
              <Database size={18} />
              MONGODB
            </div>

            {/* Git */}
            <div className="flex items-center gap-2 bg-[#F05032] text-white px-4 py-2.5 rounded text-sm font-bold tracking-wide shadow-sm hover:scale-105 transition-transform cursor-default">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M6 9v12"/>
              </svg>
              GIT
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Expertise