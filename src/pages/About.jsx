import React from 'react'
import { Download, MapPin, GraduationCap, Briefcase, Code2, Layers, ShieldCheck, Zap } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="w-full border-t border-gray-100 bg-white">
      <div className="max-w-325 mx-auto px-6 md:px-12 py-24 font-sans">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Photo & Quick Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Main Image Container */}
            <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden bg-gray-200 border border-gray-200">
              <img 
                src="src/assets/Untitled.png" 
                alt="Hitendra Burja Magar" 
                className="w-full h-full object-cover"
              />
              
              {/* Top Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-gray-100">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-800">Available for Work</span>
              </div>

              {/* Bottom Origin Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-md p-4 text-white">
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">Origin</p>
                <p className="text-sm font-bold">Gaighat, Udayapur, Nepal</p>
                <p className="text-xs text-gray-300 mt-0.5">Based in Kathmandu, Nepal</p>
              </div>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">Location</p>
                <p className="text-sm font-bold text-gray-900">Kathmandu, Nepal</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">Degree</p>
                <p className="text-sm font-bold text-gray-900">BSc CS & Software Eng.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">Experience</p>
                <p className="text-sm font-bold text-gray-900">2+ Years</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">Specialty</p>
                <p className="text-sm font-bold text-gray-900">Frontend & Design</p>
              </div>
            </div>

            {/* Download Resume Button */}
            <a 
              href="src/assets/cv/Hitendraburjamagarcv.pdf" // Add your resume PDF link here
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 border-2 border-black text-black font-bold text-sm rounded-lg hover:bg-black hover:text-white transition-colors duration-300"
            >
              <Download size={18} />
              Download Full Resume (PDF)
            </a>

          </div>

          {/* RIGHT COLUMN: Bio & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            
            {/* Quote Block */}
            <div className="border-l-4 border-black pl-6 mb-10">
              <p className="text-lg md:text-xl font-medium italic text-gray-800 leading-snug">
                Driven by curiosity. Whether I'm traveling to new places, capturing moments through a lens, or writing clean frontend code, I'm always looking to understand how things work and how to make them better.
              </p>
            </div>

            {/* Bio Text (Updated) */}
            <div className="flex flex-col gap-6 text-gray-600 text-[16px] leading-relaxed font-medium">
              <p>
                Hi, I'm Hitendra Burja Magar (<span className="font-bold text-black">हितेन्द्र बुर्जा मगर</span>), a Frontend Developer and Graphic Designer from Gaighat, Udayapur, Nepal, currently based in Kathmandu.
              </p>
              <p>
                I love bridging the gap between clean code and intuitive design. My technical expertise lies in React and modern JavaScript, where I build responsive, user-centric web applications. Beyond development, my background in graphic design (Figma, Canva) allows me to craft visually engaging digital experiences from scratch.
              </p>
              <p>
                Whether I'm building a full-stack mobile app like <span className="font-bold text-black">WeatherWear</span> or designing branding for a campus event like the <span className="font-bold text-black">ClockMakers Hackathon</span>, I focus on creating work that is both functional and visually compelling.
              </p>
              <p>
                I have recently completed my Bachelor's degree in Computer Science and Software Engineering from PCPS College (affiliated with the University of Bedfordshire).
              </p>
              <p>
                I'm always learning and improving my skills through personal projects, practice, and continuous self-study. I enjoy solving problems and building digital experiences that are simple, reliable, and useful.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 my-8 border-y border-gray-100">
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-black mb-1">02+</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-black mb-1">05+</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Featured Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-black mb-1">03</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Jobs / Internships</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-black mb-1">1000+</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Hours Self-Study</span>
              </div>
            </div>

            {/* Engineering Principles / Core Focus */}
            <div className="mt-2">
              <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-6">Core Focus</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                    <Layers size={14} className="text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-1">Clean Architecture</h4>
                    <p className="text-[12px] text-gray-500 leading-relaxed">Building scalable, component-based systems with readable code.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                    <Zap size={14} className="text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-1">Performance First</h4>
                    <p className="text-[12px] text-gray-500 leading-relaxed">Optimizing for speed, responsiveness, and smooth user experiences.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                    <Code2 size={14} className="text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-1">Frontend Craft</h4>
                    <p className="text-[12px] text-gray-500 leading-relaxed">Bridging the gap between design and code with modern frameworks.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                    <ShieldCheck size={14} className="text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-1">Accessibility</h4>
                    <p className="text-[12px] text-gray-500 leading-relaxed">Designing inclusive interfaces that work for everyone.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About