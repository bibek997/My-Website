import React from 'react'

const About = () => {
  return (
    <section id="about" className="w-full border-t border-gray-100 bg-white">
      <div className="max-w-325 mx-auto px-6 md:px-12 py-24 font-sans grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-2">01 — About</h2>
          <h3 className="text-4xl font-black uppercase tracking-tight text-black leading-tight">A bit about <br /> my journey.</h3>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-6 text-gray-600 text-lg font-medium leading-relaxed">
          <p>Hello! I'm Hitendra, a passionate frontend developer based in Kathmandu, Nepal. My journey into web development started back in 2022 when I decided to try customizing a simple HTML blog template.</p>
          <p>Fast forward to today, and I've had the privilege of building software for a variety of clients, from local startups to independent creators. My main focus these days is building accessible, inclusive products and digital experiences using modern React ecosystems.</p>
          <p>When I'm not at the computer, I'm usually out hiking, reading sci-fi novels, or experimenting with coffee brewing methods.</p>
        </div>
      </div>
    </section>
  )
}

export default About