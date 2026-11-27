import React, { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Copy, Download, ExternalLink } from 'lucide-react'

// 1. Import all images at the top so Vite processes them correctly
import image1 from '../assets/captures/image1.jpg'
import image2 from '../assets/captures/image2.jpg'
import image3 from '../assets/captures/image3.jpg'
import image4 from '../assets/captures/image4.jpg'
import image5 from '../assets/captures/image5.jpg'
import image6 from '../assets/captures/image6.jpg'
import image7 from '../assets/captures/image7.jpg'
import image8 from '../assets/captures/image8.jpg'
import image9 from '../assets/captures/image9.jpg'
import image10 from '../assets/captures/image10.jpg'
import image11 from '../assets/captures/image11.jpg'
import image12 from '../assets/captures/image12.jpg'
import image13 from '../assets/captures/image13.jpg'
import image14 from '../assets/captures/image14.jpg'
import image15 from '../assets/captures/image15.jpg'
import image16 from '../assets/captures/image16.jpg'
import image17 from '../assets/captures/image17.jpg'
import image18 from '../assets/captures/image18.jpg'
import image19 from '../assets/captures/image19.jpg'
import image20 from '../assets/captures/image20.jpg'

const Captures = () => {
  // 2. Use the imported variables in your images array
  const images = [
    { src: image1, alt: "image 1" },
    { src: image2, alt: "image 2" },
    { src: image3, alt: "image 3" },
    { src: image4, alt: "image 4" },
    { src: image5, alt: "image 5" },
    { src: image6, alt: "image 6" },
    { src: image7, alt: "image 7" },
    { src: image8, alt: "image 8" },
    { src: image9, alt: "image 9" },
    { src: image10, alt: "image 10" },
    { src: image11, alt: "image 11" },
    { src: image12, alt: "image 12" },
    { src: image13, alt: "image 13" },
    { src: image14, alt: "image 14" },
    { src: image15, alt: "image 15" },
    { src: image16, alt: "image 16" },
    { src: image17, alt: "image 17" },
    { src: image18, alt: "image 18" },
    { src: image19, alt: "image 19" },
    { src: image20, alt: "image 20" },
  ]

  // 3. State for the Lightbox
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [copySuccess, setCopySuccess] = useState(false)

  // 4. Keyboard Navigation (Left/Right arrows, Escape to close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex])

  // 5. Navigation Functions
  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  // 6. Copy URL Function
  const handleCopyUrl = () => {
    const currentImageUrl = images[selectedIndex].src
    navigator.clipboard.writeText(currentImageUrl)
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 2000)
  }

  return (
    <section id="captures" className="w-full border-t border-gray-100 bg-gray-50/50">
      <div className="max-w-325 mx-auto px-6 md:px-12 py-24 font-sans">
        <h2 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-2">06 — Captures</h2>
        <h3 className="text-4xl font-black uppercase tracking-tight text-black mb-12">Life outside code.</h3>
        
        {/* Grid of Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div 
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              {/* Optional: Add a subtle dark overlay on hover to indicate it's clickable */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200">
          
          {/* Close Button (Clicking backdrop also closes) */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSelectedIndex(null)}></div>

          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 sm:left-12 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/20"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className="absolute right-4 sm:right-12 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/20"
          >
            <ChevronRight size={24} />
          </button>

          {/* Main Image Container */}
          <div className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col animate-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-900 text-sm">Captured Moment</h3>
              <div className="flex items-center gap-4 text-gray-400">
                <a href={images[selectedIndex].src} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
                  <ExternalLink size={18} />
                </a>
                <button onClick={() => setSelectedIndex(null)} className="hover:text-black transition-colors">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="bg-gray-50 p-4 sm:p-8 flex items-center justify-center max-h-[70vh] overflow-hidden">
              <img 
                src={images[selectedIndex].src} 
                alt={images[selectedIndex].alt} 
                className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-sm"
              />
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-gray-100 gap-4">
              <span className="text-sm font-bold text-gray-400">
                {selectedIndex + 1} / {images.length}
              </span>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button 
                  onClick={handleCopyUrl}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors"
                >
                  <Copy size={16} />
                  {copySuccess ? 'Copied!' : 'Copy URL'}
                </button>
                
                <a 
                  href={images[selectedIndex].src} 
                  download 
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Captures