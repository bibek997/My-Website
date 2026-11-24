import React from 'react'

const Education = () => {
  const educationData = [
    {
      id: "01",
      year: "2022 — 2026",
      status: "COMPLETED", // Changed to match your actual status
      degree: "BSc (Hons) Computer Science & Software Engineering",
      institution: "PCPS College, Kupondole, Lalitpur",
      affiliation: "Affiliated to University of Bedfordshire",
      description: "Completed my Bachelor's degree focusing on software engineering principles, advanced web technologies, database management, and modern system architecture. Built multiple full-stack applications as part of the curriculum.",
      tags: ["Software Engineering", "Data Structures", "DBMS & SQL", "Web Development","UI/UX", "Graphic design",]
    },
    {
      id: "02",
      year: "2020 — 2022",
      status: "COMPLETED",
      degree: "Higher Secondary Education (+2)",
      institution: "Morgan International College, Basundhara, Kathmandu",
      affiliation: null,
      description: "Completed my +2 in Science with Computer Science. This is where I built my foundation in programming, mathematics, and problem-solving, with hands-on experience in C/C++.",
      tags: ["Computer Science", "Mathematics", "C/C++", "Programming Fundamentals"]
    },
    {
      id: "03",
      year: "2019",
      status: "COMPLETED",
      degree: "Secondary Education Examination (SEE)",
      institution: "Triyuga Secondary School, Gaighat, Udayapur",
      affiliation: null,
      description: "Completed my secondary education with a strong focus on science and mathematics, laying the groundwork for my future studies in computer science.",
      tags: ["Science", "Mathematics", "Foundation"]
    }
  ]

  return (
    <section id="education" className="w-full bg-[#fafafa] border-t border-gray-200">
      <div className="max-w-325 mx-auto px-6 md:px-12 py-24 font-sans">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-2">05 — Education</h2>
          <h3 className="text-3xl font-black uppercase tracking-tight text-black">Academic Background</h3>
        </div>

        {/* Education Cards Container */}
        <div className="flex flex-col gap-6">
          {educationData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-gray-200 rounded-lg p-8 md:p-10 transition-shadow duration-300 hover:shadow-md"
            >
              
              {/* Top Row: ID, Year, Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black text-black">{item.id}</span>
                  <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase mt-1">
                    {item.year}
                  </span>
                </div>
                
                {/* Status Badge */}
                <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm border w-fit ${
                  item.status === 'IN PROGRESS' 
                    ? 'border-gray-800 text-gray-800 bg-white' 
                    : 'border-gray-300 text-gray-600 bg-gray-50'
                }`}>
                  {item.status}
                </span>
              </div>

              {/* Middle Row: Degree & Institution */}
              <div className="mb-4">
                <h4 className="text-xl md:text-2xl font-bold text-black underline decoration-2 underline-offset-4 mb-2">
                  {item.degree}
                </h4>
                <p className="text-gray-800 font-medium text-sm md:text-base">
                  {item.institution}
                </p>
                {item.affiliation && (
                  <p className="text-gray-500 text-sm mt-1">
                    {item.affiliation}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-4xl">
                {item.description}
              </p>

              {/* Bottom Row: Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-[11px] font-medium text-gray-700 bg-white border border-gray-200 px-3 py-1.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Education