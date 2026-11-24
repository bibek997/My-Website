import { useState, useEffect } from 'react'
import { FileText, ArrowRight, Menu, X } from 'lucide-react'

// --- CUSTOM INSTAGRAM ICON ---
const InstagramIcon = ({ size = 14, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0) // State for the top black line

  const navItems = [
    { id: '01', name: 'Home', path: 'home' },
    { id: '02', name: 'About', path: 'about' },
    { id: '03', name: 'Work', path: 'work' },
    { id: '04', name: 'Experience', path: 'experience' },
    { id: '05', name: 'Expertise', path: 'expertise' },
    { id: '06', name: 'Education', path: 'education' },
    { id: '07', name: 'Captures', path: 'captures', icon: <InstagramIcon /> },
    { id: '08', name: 'Contact', path: 'contact' },
  ]

  // --- SCROLL LOGIC (Only for the top progress bar now) ---
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Run once on load
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false)
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* SCROLL PROGRESS LINE */}
      <div className="fixed top-0 left-0 w-full h-0.75 bg-transparent z-100">
        <div 
          className="h-full bg-black transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md py-3 px-4 sm:px-8 lg:px-12 font-sans border-b border-gray-100">
        <div className="max-w-350 mx-auto flex items-center justify-between">
          
          <div onClick={() => scrollToSection('home')} className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-black text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-[15px] tracking-wider transition-transform group-hover:scale-105">
              HBM
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-[15px] tracking-wide text-gray-900 leading-tight">
                HITENDRA BURJA MAGAR
              </h1>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-400"></span>
                </span>
                <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">
                  Available for work
                </span>
              </div>
            </div>
          </div>

          {/* DESKTOP NAV (No active section highlighting) */}
          <div className="hidden lg:flex items-center bg-gray-50 rounded-full px-1.5 py-1.5 border border-gray-100">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.path)}
                className="px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 flex items-center gap-1.5 text-gray-600 hover:text-black hover:bg-gray-200/50"
              >
                {item.icon && item.icon}
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 font-semibold text-[13px] hover:bg-gray-50 transition-colors">
              <FileText size={14} strokeWidth={2.5} />
              Resume
            </button>
            <button onClick={() => scrollToSection('contact')} className="flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white font-semibold text-[13px] hover:bg-gray-800 transition-colors">
              Let's Talk
              <ArrowRight size={14} strokeWidth={2.5} />
            </button>
          </div>

          <button className="lg:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE NAV OVERLAY (No active section highlighting) */}
      <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-60 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      
      <div className={`fixed inset-y-0 left-0 w-full sm:w-95 bg-white z-70 transform transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="px-5 py-5 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-black text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-[15px] tracking-wider">HBM</div>
            <div className="flex flex-col">
              <h1 className="font-bold text-[14px] tracking-wide text-gray-900 leading-tight">HITENDRA BURJA MAGAR</h1>
              <span className="text-[11px] text-gray-500 font-medium">Navigation Menu</span>
            </div>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors"><X size={20} /></button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 px-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button 
              key={item.name} 
              onClick={() => scrollToSection(item.path)} 
              className="flex items-center gap-5 px-5 py-3.5 rounded-xl transition-all duration-300 w-full text-left text-gray-800 hover:bg-gray-50"
            >
              <span className="text-[11px] font-bold text-gray-400">
                {item.id}
              </span>
              <span className="text-[15px] font-bold">{item.name}</span>
            </button>
          ))}
        </div>
        
        <div className="p-5 border-t border-gray-100 flex flex-col gap-5 bg-gray-50/50">
          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-gray-300 bg-white text-gray-900 font-semibold text-[13px] hover:bg-gray-50 transition-colors">
              <FileText size={14} /> Resume
            </button>
            <button onClick={() => scrollToSection('contact')} className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-black text-white font-semibold text-[13px] hover:bg-gray-800 transition-colors">
              Let's Talk <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar