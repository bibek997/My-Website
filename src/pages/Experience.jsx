import React from 'react'
import { Plus, Pencil } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      role: "Graphic Designer",
      company: "PCPS College",
      date: "2025",
      duration: "",
      location: "Lalitpur District, Nepal",
      description: "Designed promotional materials, social media graphics, and event posters for college campaigns. Collaborated with the marketing team to maintain brand consistency across digital platforms.",
      logo: "src/assets/pcpsollegelogo.png", 
    },
    {
      role: "Administrative Intern",
      company: "PCPS College",
      date: "Jun 2025 - Aug 2025",
      duration: "3 mos",
      location: "On-site",
      description: "Assisted in daily administrative operations, managed student records, and supported the coordination of academic events and schedules.",
      logo: "src/assets/pcpsollegelogo.png",
    },
    {
      role: "Junior Software Developer",
      company: "PCPS College",
      date: "May 2024 - Aug 2024",
      duration: "4 mos",
      location: "On-site",
      description: "Developed and maintained responsive web interfaces using React.js. Collaborated with the design team to implement UI/UX improvements and optimized component rendering.",
      logo: "src/assets/pcpsollegelogo.png",
    },
    {
      role: "Secondary Level Computer Teacher",
      company: "High School",
      date: "2082 - 2083-11-01",
      duration: "1 yr",
      location: "On-site",
      description: "Instructed secondary level students in computer science fundamentals, covering basic programming logic, web development, and essential software applications.",
      logo: "src/assets/schoollogo.png",
    },
  ]

  return (
    <section id="experience" className="w-full border-t border-gray-100 bg-white">
      <div className="max-w-325 mx-auto px-6 md:px-12 py-24 font-sans">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
          <h2 className="text-4xl font-bold text-black">Experience</h2>
          <div className="flex items-center gap-3 text-gray-500">
            <button className="p-1.5 hover:bg-gray-100 rounded-md transition-colors">
              <Plus size={20} />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded-md transition-colors">
              <Pencil size={18} />
            </button>
          </div>
        </div>

        {/* Experience List Container */}
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="flex gap-4 py-6 border-b border-gray-100 last:border-0 hover:bg-gray-50/80 transition-all duration-200 px-4 -mx-4 rounded-xl"
            >
              
              {/* Logo / Icon */}
              <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-white border border-gray-200 rounded overflow-hidden shadow-sm">
                {exp.logo ? (
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain p-1" />
                ) : (
                  <span className="text-lg font-bold text-gray-400">{exp.company.charAt(0)}</span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col w-full">
                <h3 className="text-lg font-bold text-black leading-tight">
                  {exp.role}
                </h3>
                <p className="text-[15px] font-medium text-gray-800 mt-0.5">
                  {exp.company}
                </p>
                <p className="text-[13px] text-gray-500 mt-0.5">
                  {exp.date} {exp.duration && `· ${exp.duration}`}
                </p>
                <p className="text-[13px] text-gray-500 mt-0.5 mb-2">
                  {exp.location}
                </p>
                
                <p className="text-[14px] text-gray-600 leading-relaxed mt-1">
                  {exp.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience