import React from 'react'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="w-full max-w-325 mx-auto px-6 md:px-12 py-24 lg:py-32 font-sans border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span className="text-[11px] font-bold tracking-widest uppercase text-gray-500">Get in touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-black mb-6 leading-[1.1]">
            Let's build <br /> something great.
          </h2>
          <p className="text-gray-600 text-[17px] leading-relaxed max-w-md mb-10 font-medium">
            Currently available for freelance work and open to full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex flex-col gap-6">
            <a href="mailto:hello@example.com" className="group flex items-center gap-4 text-gray-800 hover:text-black transition-colors">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                <Mail size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">Email</span>
                <span className="font-semibold text-[15px]">hello@hitendra.com.np</span>
              </div>
            </a>
            <div className="group flex items-center gap-4 text-gray-800">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">Location</span>
                <span className="font-semibold text-[15px]">Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 sm:p-10 rounded-2xl border border-gray-100">
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold tracking-widest uppercase text-gray-500">Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold tracking-widest uppercase text-gray-500">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold tracking-widest uppercase text-gray-500">Subject</label>
              <input type="text" placeholder="Project Inquiry" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold tracking-widest uppercase text-gray-500">Message</label>
              <textarea rows="5" placeholder="Tell me about your project..." className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm resize-none"></textarea>
            </div>
            <button type="submit" className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-4 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors">
              Send Message <ArrowUpRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact