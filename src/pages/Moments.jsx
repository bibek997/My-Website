import React from 'react'

const Moments = () => {
  return (
    <section id="moments" className="w-full border-t border-gray-100 bg-gray-50/50">
      <div className="max-w-325 mx-auto px-6 md:px-12 py-24 font-sans">
        <h2 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-2">06 — Moments</h2>
        <h3 className="text-4xl font-black uppercase tracking-tight text-black mb-12">Life outside code.</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square rounded-xl overflow-hidden bg-gray-200 group relative">
            <img src="https://images.unsplash.com/photo-1506744626753-1fa4a309f31d?q=80&w=600&auto=format&fit=crop" alt="Moment 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden bg-gray-200 group relative">
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop" alt="Moment 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden bg-gray-200 group relative">
            <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=600&auto=format&fit=crop" alt="Moment 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden bg-gray-200 group relative">
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop" alt="Moment 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Moments