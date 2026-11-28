import React from 'react'
import pcpslogo from '../assets/logo/pcpsollegelogo.png'
import tlfesLogo from '../assets/logo/tlfeslogo.png'

// 1. Import all college images based on your actual folder structure
import img1 from '../assets/college/image1.jpg'
import img2 from '../assets/college/image2.jpg'
import img3 from '../assets/college/image3.jpg'
import img4 from '../assets/college/image4.jpg'
import img5 from '../assets/college/image5.jpg'
import img6 from '../assets/college/image6.jpg'
import img7 from '../assets/college/image7.jpg'
import img8 from '../assets/college/image8.jpg'
import img9 from '../assets/college/image9.jpg'
import img10 from '../assets/college/image10.jpg'
import img11 from '../assets/college/image11.jpg'
import img12 from '../assets/college/image12.jpg'
import img13 from '../assets/college/image13.jpg'
import img14 from '../assets/college/image14.jpg'
import img15 from '../assets/college/image15.jpg'
import img16 from '../assets/college/image16.jpg'
import img17 from '../assets/college/image17.jpg'
import img18 from '../assets/college/image18.jpg'
import img19 from '../assets/college/image19.jpg'
import img20 from '../assets/college/image20.jpg'


const Experience = () => {
  // 1. Professional Experience Data
  const professionalExperiences = [
    {
      role: "Graphic Designer",
      company: "PCPS College",
      date: "2025",
      duration: "",
      location: "Lalitpur District, Nepal",
      description: "Designed promotional materials, social media graphics, and event posters for college campaigns. Collaborated with the marketing team to maintain brand consistency across digital platforms.",
      logo: pcpslogo, 
    },
    {
      role: "Administrative Intern",
      company: "PCPS College",
      date: "Jun 2025 - Aug 2025",
      duration: "3 mos",
      location: "On-site",
      description: "Assisted in daily administrative operations, managed student records, and supported the coordination of academic events and schedules.",
      logo: pcpslogo,
    },
    {
      role: "Junior Software Developer",
      company: "PCPS College",
      date: "May 2024 - Aug 2024",
      duration: "4 mos",
      location: "On-site",
      description: "Developed and maintained responsive web interfaces using React.js. Collaborated with the design team to implement UI/UX improvements and optimized component rendering.",
      logo: pcpslogo,
    },
    {
      role: "Secondary Level Computer Teacher",
      company: "Triyiga Little Flower English School",
      date: "2082 - 2083-11-01",
      duration: "1 yr",
      location: "On-site",
      description: "Instructed secondary level students in computer science fundamentals, covering basic programming logic, web development, and essential software applications.",
      logo: tlfesLogo,
    },
  ]

  // 2. Leadership & Activities Data
  const leadershipRoles = [
    {
      role: "Music & Art Club Manager",
      company: "PCPS College",
      date: "2024-2025",
      duration: "",
      location: "Lalitpur District, Nepal",
      description: "Led the club's creative team, organized major college events (including ClockMakers with 50+ participants), and managed music and art activities across the campus.",
      logo: pcpslogo,
    },
  ]

  // 3. Image Array for Gallery - Updated to use the imported variables
  const collegeMoments = [
    img1, img2, img3, img4, 
    img5, img6, img7, img8, 
    img9, img10, img11, img12, 
    img13, img14, img15, img16,
    img17, img18, img19, img20
  ]

  // Reusable component for rendering the list
  const ExperienceList = ({ items }) => (
    <div className="flex flex-col gap-2">
      {items.map((exp, index) => (
        <div 
          key={index} 
          className="flex gap-5 py-8 border-b border-gray-100 last:border-0 hover:bg-gray-50/80 transition-all duration-200 px-6 -mx-6 rounded-xl"
        >
          {/* Logo */}
          <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            {exp.logo ? (
              <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain p-1.5" />
            ) : (
              <span className="text-lg font-bold text-gray-400">{exp.company.charAt(0)}</span>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col w-full">
            <h3 className="text-xl font-bold text-black leading-tight">{exp.role}</h3>
            <p className="text-[15px] font-medium text-gray-800 mt-1">{exp.company}</p>
            <p className="text-[13px] text-gray-500 mt-1">
              {exp.date} {exp.duration && `· ${exp.duration}`}
            </p>
            <p className="text-[13px] text-gray-500 mt-0.5 mb-3">{exp.location}</p>
            <p className="text-[14px] text-gray-600 leading-relaxed">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section id="experience" className="w-full border-t border-gray-100 bg-white overflow-hidden">
      <div className="max-w-325 mx-auto px-6 md:px-12 py-24 font-sans">
        
        {/* PROFESSIONAL EXPERIENCE SECTION */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">Experience</h2>
          </div>
          <ExperienceList items={professionalExperiences} />
        </div>

        {/* LEADERSHIP & ACTIVITIES SECTION */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">Leadership & Activities</h2>
          </div>
          <ExperienceList items={leadershipRoles} />
        </div>

      </div>

      {/* INFINITE SCROLLING COLLEGE MOMENTS GALLERY */}
      <div className="w-full bg-gray-50 py-20 border-t border-gray-200 mt-8">
        <div className="max-w-325 mx-auto px-6 md:px-12 mb-10">
          <h3 className="text-2xl font-black uppercase tracking-tight text-black">College Life & Activities</h3>
          <p className="text-gray-500 text-sm mt-2">Behind the scenes, event coordination, and campus memories.</p>
        </div>

        <div className="relative flex overflow-hidden group">
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-24 md:w-32 h-full bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 md:w-32 h-full bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* First Set */}
          <div className="flex animate-scroll-left whitespace-nowrap gap-4 md:gap-6 px-2 group-hover:[animation-play-state:paused]">
            {collegeMoments.map((src, i) => (
              <div key={i} className="w-112.5 h-80 md:w-150 md:h-100 shrink-0 rounded-xl overflow-hidden border border-gray-200 bg-gray-200">
                <img 
                  src={src} 
                  alt={`College Moment ${i + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            ))}
          </div>

          {/* Duplicated Set for Infinite Loop */}
          <div className="flex animate-scroll-left whitespace-nowrap gap-4 md:gap-6 px-2 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {collegeMoments.map((src, i) => (
              <div key={`dup-${i}`} className="w-112.5 h-80 md:w-150 md:h-100 shrink-0 rounded-xl overflow-hidden border border-gray-200 bg-gray-200">
                <img 
                  src={src} 
                  alt={`College Moment Duplicate ${i + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience