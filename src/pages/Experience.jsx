import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="w-full border-t border-gray-100 bg-white">
      <div className="max-w-325 mx-auto px-6 md:px-12 py-24 font-sans">
        <h2 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-8">03 — Experience</h2>
        <div className="flex flex-col gap-8 border-l-2 border-gray-100 pl-6 relative max-w-2xl">
          <div className="relative">
            <div className="absolute w-3 h-3 bg-black rounded-full -left-7.75 top-2 border-4 border-white"></div>
            <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">2023 — Present</span>
            <h4 className="text-xl font-bold text-black mt-1">Frontend Developer</h4>
            <p className="text-gray-500 font-medium mt-1">Tech Solutions Inc. • Kathmandu</p>
          </div>
          <div className="relative">
            <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-7.75 top-2 border-4 border-white"></div>
            <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">2022 — 2023</span>
            <h4 className="text-xl font-bold text-black mt-1">Junior Web Developer</h4>
            <p className="text-gray-500 font-medium mt-1">Creative Agency • Remote</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience