// import React from 'react'

// const Captures = () => {
//   return (
//     <section id="captures" className="w-full border-t border-gray-100 bg-gray-50/50">
//       <div className="max-w-325 mx-auto px-6 md:px-12 py-24 font-sans">
//         <h2 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-2">06 — Captures</h2>
//         <h3 className="text-4xl font-black uppercase tracking-tight text-black mb-12">Life outside code.</h3>
        
//         {/* Changed grid layout slightly to accommodate landscape images better */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/cloud.JPG" 
//               alt="Cloud" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>

//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/moon.JPG" 
//               alt="Moon" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>
//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/nightsky.JPG" 
//               alt="Night Sky" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>
//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/hand.JPG" 
//               alt="Hand" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>
//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/dharaha.JPG" 
//               alt="Dharaha" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>

//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/boudha.JPG" 
//               alt="Boudhanath Stupa" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>

//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/gaight.JPG" 
//               alt="Ghaight" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>

//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/pool.JPG" 
//               alt="Swimming Pool" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>

//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/dog.JPG" 
//               alt="Dog" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>
//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/date.jpg" 
//               alt="Date" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>
//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/night.JPG" 
//               alt="Night" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>
          
//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/plane.JPG" 
//               alt="Plane" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>
//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/khusiban.JPG" 
//               alt="Khusiban" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>
//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/IMG_8439.JPG" 
//               alt="campusnight" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>
//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/me.JPG" 
//               alt="me" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>
//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/flower.JPG" 
//               alt="Flower" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>
          
//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/travel.JPG" 
//               alt="Travel" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>
//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/graduation.JPG" 
//               alt="Graduation" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>
//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/thekiss.JPG" 
//               alt="The Kiss" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>
//           <div className="aspect-5/4 rounded-xl overflow-hidden bg-gray-200 group relative">
//             <img 
//               src="src/assets/cat.JPG" 
//               alt="The Cat" 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Captures


import React, { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Copy, Download, ExternalLink } from 'lucide-react'

const Captures = () => {
  // 1. Define your images array here
  const images = [
    { src: "src/assets/cloud.JPG", alt: "Cloud" },
    { src: "src/assets/moon.JPG", alt: "Moon" },
    { src: "src/assets/nightsky.JPG", alt: "Night Sky" },
    { src: "src/assets/hand.JPG", alt: "Hand" },
    { src: "src/assets/dharaha.JPG", alt: "Dharaha" },
    { src: "src/assets/boudha.JPG", alt: "Boudhanath Stupa" },
    { src: "src/assets/gaight.JPG", alt: "Ghaight" },
    { src: "src/assets/pool.JPG", alt: "Swimming Pool" },
    { src: "src/assets/dog.JPG", alt: "Dog" },
    { src: "src/assets/date.jpg", alt: "Date" },
    { src: "src/assets/night.JPG", alt: "Night" },
    { src: "src/assets/plane.JPG", alt: "Plane" },
    { src: "src/assets/khusiban.JPG", alt: "Khusiban" },
    { src: "src/assets/IMG_8439.JPG", alt: "Campus Night" },
    { src: "src/assets/me.JPG", alt: "Me" },
    { src: "src/assets/flower.JPG", alt: "Flower" },
    { src: "src/assets/travel.JPG", alt: "Travel" },
    { src: "src/assets/graduation.JPG", alt: "Graduation" },
    { src: "src/assets/thekiss.JPG", alt: "The Kiss" },
    { src: "src/assets/cat.JPG", alt: "The Cat" },
  ]

  // 2. State for the Lightbox
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [copySuccess, setCopySuccess] = useState(false)

  // 3. Keyboard Navigation (Left/Right arrows, Escape to close)
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

  // 4. Navigation Functions
  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  // 5. Copy URL Function
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