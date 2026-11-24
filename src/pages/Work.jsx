import React from 'react'
// Removed Github from the import to fix the error
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-2">02 — My Projects</h2>
            <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black">
              Selected Work
            </h3>
          </div>
          <p className="text-gray-500 font-medium max-w-md">
            A collection of projects I've built, ranging from full-stack web applications to interactive frontend interfaces.
          </p>
        </div>

        {/* Featured Project (Large Card) */}
        <div className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden mb-8 hover:shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Project Image / Visual */}
            <div className="bg-gray-100 h-64 lg:h-auto relative overflow-hidden flex items-center justify-center p-8">
               <div className="absolute inset-0 bg-linear-to-tr from-gray-200 to-gray-100 opacity-50"></div>
               <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                 alt="E-Commerce Dashboard" 
                 className="w-full h-full object-cover rounded-lg shadow-lg relative z-10 group-hover:scale-105 transition-transform duration-500"
               />
            </div>

            {/* Project Details */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                  Featured Project
                </span>
              </div>
              <h4 className="text-3xl font-black text-black mb-4">Nexus E-Commerce</h4>
              <p className="text-gray-500 font-medium leading-relaxed mb-6">
                A comprehensive full-stack admin dashboard for managing products, orders, users, and real-time analytics. Built with a focus on performance and a seamless user experience.
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'].map(tech => (
                  <span key={tech} className="text-[11px] font-bold tracking-widest uppercase text-gray-600 border border-gray-200 px-3 py-1.5 rounded-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a href="#" className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
                  Live Demo <ExternalLink size={16} />
                </a>
                <a href="#" className="flex items-center gap-2 border border-gray-200 text-gray-800 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                  <GithubIcon size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col hover:shadow-xl transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <span className="font-bold text-xl">&lt;/&gt;</span>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-gray-400 hover:text-black transition-colors"><GithubIcon size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors"><ArrowUpRight size={20} /></a>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-black mb-3">TaskFlow Kanban</h4>
            <p className="text-gray-500 font-medium mb-6 grow">
              A productivity web app featuring drag-and-drop task management, user authentication, and local storage persistence.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['React', 'Dnd-Kit', 'Zustand'].map(tech => (
                <span key={tech} className="text-[10px] font-bold tracking-widest uppercase text-gray-400 border border-gray-100 px-2.5 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col hover:shadow-xl transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <span className="font-bold text-xl">API</span>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-gray-400 hover:text-black transition-colors"><GithubIcon size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors"><ArrowUpRight size={20} /></a>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-black mb-3">Weather API Wrapper</h4>
            <p className="text-gray-500 font-medium mb-6 grow">
              A clean, minimalist weather application that fetches data from a third-party API and displays dynamic backgrounds based on conditions.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['JavaScript', 'HTML', 'CSS'].map(tech => (
                <span key={tech} className="text-[10px] font-bold tracking-widest uppercase text-gray-400 border border-gray-100 px-2.5 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col hover:shadow-xl transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <span className="font-bold text-xl">UX</span>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-gray-400 hover:text-black transition-colors"><ArrowUpRight size={20} /></a>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-black mb-3">Portfolio V1</h4>
            <p className="text-gray-500 font-medium mb-6 grow">
              The first iteration of my personal portfolio. A clean, typography-driven design focusing on micro-interactions and animations.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['React', 'Framer Motion', 'Tailwind'].map(tech => (
                <span key={tech} className="text-[10px] font-bold tracking-widest uppercase text-gray-400 border border-gray-100 px-2.5 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col hover:shadow-xl transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <span className="font-bold text-xl">📝</span>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-gray-400 hover:text-black transition-colors"><GithubIcon size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors"><ArrowUpRight size={20} /></a>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-black mb-3">Markdown Blog</h4>
            <p className="text-gray-500 font-medium mb-6 grow">
              A static site generator for a personal blog. Write posts in Markdown and have them automatically compiled into a fast, SEO-friendly website.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Next.js', 'MDX', 'Vercel'].map(tech => (
                <span key={tech} className="text-[10px] font-bold tracking-widest uppercase text-gray-400 border border-gray-100 px-2.5 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* View More Button */}
        <div className="mt-16 flex justify-center">
          <a href="https://github.com/bibek997" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 text-black rounded-full font-bold text-sm hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
            View Full Archive on GitHub
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Work