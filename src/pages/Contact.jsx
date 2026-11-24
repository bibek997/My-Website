import React from 'react'
import { Mail, MapPin, ArrowUpRight, Phone } from 'lucide-react'

const Contact = () => {
  return (
    // Changed background to pitch black to start the dark section
    <section id="contact" className="w-full bg-[#0a0a0a] border-t border-[#222]">
      <div className="max-w-325 mx-auto px-6 md:px-12 py-24 lg:py-32 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Text & Info */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="text-[11px] font-bold tracking-widest uppercase text-gray-400">Get in touch</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-[1.1]">
              Let's build <br /> something great.
            </h2>
            
            <p className="text-gray-400 text-[17px] leading-relaxed max-w-md mb-10 font-medium">
              Currently available for freelance work and open to full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-6">
              {/* Email */}
              <a href="mailto:hitendraburjamagar@gmail.com" className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-[#1a1a1a] border border-[#333] rounded-full flex items-center justify-center group-hover:bg-[#222] transition-colors">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase">Email</span>
                  <span className="font-semibold text-[15px]">hitendraburjamagar@gmail.com</span>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+9779849723178" className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-[#1a1a1a] border border-[#333] rounded-full flex items-center justify-center group-hover:bg-[#222] transition-colors">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase">Phone</span>
                  <span className="font-semibold text-[15px]">+977 9849723178</span>
                </div>
              </a>

              {/* Location */}
              <div className="group flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-[#1a1a1a] border border-[#333] rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase">Location</span>
                  <span className="font-semibold text-[15px]">Kathmandu, Nepal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-[#121212] p-8 sm:p-10 rounded-2xl border border-[#222]">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold tracking-widest uppercase text-gray-400">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3.5 bg-[#0a0a0a] border border-[#333] rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-sm text-white placeholder-gray-600" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold tracking-widest uppercase text-gray-400">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3.5 bg-[#0a0a0a] border border-[#333] rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-sm text-white placeholder-gray-600" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold tracking-widest uppercase text-gray-400">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry" 
                  className="w-full px-4 py-3.5 bg-[#0a0a0a] border border-[#333] rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-sm text-white placeholder-gray-600" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold tracking-widest uppercase text-gray-400">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="Tell me about your project..." 
                  className="w-full px-4 py-3.5 bg-[#0a0a0a] border border-[#333] rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-sm text-white placeholder-gray-600 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-black text-sm font-bold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Send Message <ArrowUpRight size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact