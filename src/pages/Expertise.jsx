import React from 'react'

const Expertise = () => {
  return (
    <section id="expertise" className="w-full border-t border-gray-100 bg-white">
      <div className="max-w-325 mx-auto px-6 md:px-12 py-24 font-sans">
        <h2 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-8">04 — Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Frontend', desc: 'Building responsive, high-performance UIs with React and Tailwind.' },
            { title: 'Backend', desc: 'Creating RESTful APIs and handling databases with Node.js.' },
            { title: 'UI/UX Design', desc: 'Designing clean, user-centric interfaces with Figma.' },
            { title: 'Deployment', desc: 'Managing servers and deploying apps via Vercel and AWS.' }
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-sm">{i + 1}</span>
              </div>
              <h4 className="text-lg font-bold text-black mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise