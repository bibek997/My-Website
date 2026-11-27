import React from 'react'
import { ArrowRight, FileText } from 'lucide-react'

import About from './About' 
import Work from './Work'
import Experience from './Experience'
import Expertise from './Expertise'
import Education from './Education'
import Captures from './Captures'
import Contact from './Contact'
import MusicPlayer from '../components/MusicPlayer'

// 1. Import your images and PDF files at the top
import profileImage from '../assets/bibek.webp'
import myCv from '../assets/cv/Hitendraburjamagarcv.pdf'

const Home = () => {
  // Smooth scroll function for the "View My Work" button
  const scrollToWork = () => {
    const element = document.getElementById('work')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* 1. HERO SECTION */}
      <section id="home" className="max-w-325 mx-auto px-6 md:px-12 py-12 lg:py-10 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* TEXT CONTAINER: Added 'order-2' to keep it below the image on mobile */}
          <div className="flex flex-col order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-black">Available for work</span>
              </div>
              <span className="text-gray-300 font-light text-sm">/</span>
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-gray-400">Kathmandu, Nepal</span>
            </div>

            <h1 className="text-[55px] leading-[1.05] sm:text-[75px] lg:text-[85px] font-black tracking-tight text-black uppercase mb-6">
              I BUILD THINGS FOR THE WEB<span className="text-gray-300">.</span>
            </h1>

            <p className="text-base sm:text-[17px] text-gray-600 leading-relaxed max-w-135 mb-5 font-medium">
              I'm a frontend developer who enjoys building reliable and practical web applications. I mainly work with React, JavaScript, and modern web technologies, focusing on writing clean code and creating systems that work well.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-5">
              {/* View My Work Button - Added scroll onClick */}
              <button 
                onClick={scrollToWork}
                className="flex items-center gap-2 px-6 py-3.5 bg-black text-white text-sm font-semibold rounded-sm hover:bg-gray-800 transition-colors cursor-pointer"
              >
                View My Work <ArrowRight size={16} />
              </button>
              
              {/* Download CV Button - Updated to use the imported variable */}
              <a 
                href={myCv} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 bg-white border border-black text-black text-sm font-semibold rounded-sm hover:bg-gray-50 transition-colors"
              >
                <FileText size={16} /> Download CV
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mr-2">Focus:</span>
              {['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Python'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 border border-gray-200 bg-white text-gray-800 text-[11px] font-bold rounded-sm">{tech}</span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-bold tracking-widest text-gray-500 uppercase">
              <a href="https://github.com/bibek997" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Github</a>
              <span className="text-gray-300">•</span>
              <a href="https://www.linkedin.com/in/hitendra-burja-magar-760240292/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
              <span className="text-gray-300">•</span>
              <a href="https://www.instagram.com/bibek__23/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Instagram</a>
              <span className="text-gray-300">•</span>
              <a href="https://www.facebook.com/bibek.burja.9/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Facebook</a>
            </div>
          </div>

          {/* IMAGE CONTAINER: Added 'order-1' to push it to the top on mobile */}
          <div className="relative w-full max-w-120 mx-auto lg:ml-auto flex flex-col justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="w-full aspect-4/5 relative rounded-xl overflow-hidden bg-gray-200">
              <img src={profileImage} alt="Hitendra Burja Magar" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-6 -right-4 sm:-right-6 bg-white p-5 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col justify-center z-10">
              <span className="text-[32px] font-black text-black leading-none mb-1">04+</span>
              <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">Projects Built</span>
            </div>
            <div className="absolute bottom-10 -left-4 sm:-left-6 bg-white p-5 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col justify-center z-10">
              <span className="text-[32px] font-black text-black leading-none mb-1">02+</span>
              <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OTHER SECTIONS */}
      <About />
      <Work />
      <Experience />
      <Expertise />
      <Education />
      <Captures />
      <Contact />
      <MusicPlayer />
    </>
  )
}

export default Home