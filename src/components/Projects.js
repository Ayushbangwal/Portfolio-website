import React, { useState } from 'react';
import { Database, Globe, Github, ExternalLink } from 'lucide-react';
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Champion Records',
      description: 'Sports analytics platform to track performance, records, and real-time insights.',
      problem: 'Manual tracking of player stats was inefficient and error-prone.',
      solution: 'Developed a full-stack system to track, manage and visualize sports data.',
      impact: 'Reduced manual effort and improved accuracy.',
      yourRole: 'Designed frontend UI, developed backend APIs, and integrated database for real-time stats.',
      techStack: [
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' }
],
      
      githubUrl: "https://github.com/Ayushbangwal/Champion-Records",
      liveUrl: "https://champion-records.vercel.app/",
      icon: Database
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Modern personal portfolio with animations.',
      problem: 'No platform to showcase projects.',
      solution: 'Built responsive portfolio.',
      impact: 'Improved visibility.',
      yourRole: 'Designed UI/UX, implemented animations, and deployed on Vercel.',
      techStack: [
      { name: 'React', icon: FaReact, color: 'text-cyan-400' },
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-sky-400' }
],
      githubUrl: 'https://github.com/Ayushbangwal/Portfolio-website',
      liveUrl: 'https://portfolio-website-peach-sigma-81.vercel.app/',
      icon: Globe
    }
  ];

  return (
      <section id="projects" className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div key={project.id} className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl 
              shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                <div className="h-40 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4 relative">
  <Icon size={50} className="text-white opacity-80" />

  <span className="absolute top-3 right-3 text-xs bg-yellow-400 text-black px-2 py-1 rounded-full font-semibold">
    Featured
  </span>
</div>

               <h3 className="text-xl font-bold mb-2 text-white"> {project.title}</h3>

                <p className="text-gray-300 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
 {project.techStack.map((tech, index) => {
  const Icon = tech.icon;

  return (
    <div
      key={index}
      className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-gray-300 hover:scale-105 transition"
    >
      <Icon className={`${tech.color} text-sm`} />
      <span className="text-xs">{tech.name}</span>
    </div>
  );
})}
</div>
                  <div className="bg-white/10 p-3 rounded-lg mb-3 border border-white/20 hover:border-blue-500 transition">
                  <p>
                    <span className="text-blue-500 font-semibold">Problem:</span> {project.problem}
                  </p>

                  {expandedId === project.id && (
                    
                      <div className="mt-3 border-t border-white/10 pt-3 bg-gradient-to-r 
                      from-green-500/10 to-purple-500/10 p-3 rounded-lg">
                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
  Case Study
</p>
                     <p className="mb-2">
  <span className="text-green-500 font-semibold">Solution:</span> {project.solution}
</p>

<p
 className="mt-2 mb-2">
  <span className="text-yellow-400 font-semibold tracking-wide">Role:</span> 
  <span className="text-gray-300"> {project.yourRole}</span>
  
</p>

<p className="mt-2 mb-2">
  <span className="text-purple-500 font-semibold">Impact:</span> {project.impact}
</p>
                    </div>
                  )}
                </div>

                <button
                  onClick={() =>
                    setExpandedId(expandedId === project.id ? null : project.id)
                  }
                  className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4 transition"
                >
                  {expandedId === project.id ? "Show Less" : "Read More"}
                </button>

                <div className="flex gap-3 mt-4">
                  <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/10 
                  hover:bg-white/20 text-gray-300 transition-all duration-300 hover:scale-105">
                    <Github size={16} />
                    code
                  </a>
                  <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg 
                  bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Projects;