
import React from 'react';
import {
  Database,
  Globe,
  MapPin,
  GraduationCap,
  Briefcase,
  Wrench
} from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend Development',
    icon: Globe,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']
  },
  {
    title: 'Backend & Database',
    icon: Database,
    skills: ['Node.js', 'Supabase']
  },
  {
    title: 'Programming & Tools',
    icon: Wrench,
    skills: ['Python', 'Git', 'GitHub']
  }
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-sm font-medium tracking-wide text-blue-400 mb-3">
            GET TO KNOW ME
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>

          <p className="text-gray-400 max-w-2xl leading-relaxed">
            A little about my background, interests and the
            technologies I work with.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* About Information */}
          <div className="lg:col-span-3 bg-[#1c2535] border border-white/10 rounded-xl p-6 md:p-8">

            <h3 className="text-xl font-semibold text-white mb-5">
              Who I Am
            </h3>

            <p className="text-gray-300 leading-7 text-[15px] mb-6">
              I'm Ayush Bangwal, a third-year B.Tech Computer
              Science and Engineering student at the Institute
              of Technology Gopeshwar, affiliated with
              Uttarakhand Technical University.
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">
              What I Work On
            </h3>

            <p className="text-gray-300 leading-7 text-[15px] mb-6">
              My primary interest is web development, particularly
              building interactive applications using React and
              JavaScript. I also work with backend technologies
              and databases while developing practical projects.
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">
              Currently Focused On
            </h3>

            <p className="text-gray-300 leading-7 text-[15px]">
              I'm focused on strengthening my programming
              fundamentals, improving my development skills,
              and building useful applications through hands-on
              project experience.
            </p>

            {/* Personal Information */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-4">

              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <MapPin size={17} className="text-blue-400 shrink-0" />
                <span>Srinagar, Uttarakhand</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <GraduationCap size={17} className="text-blue-400 shrink-0" />
                <span>B.Tech, Computer Science and Engineering</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Briefcase size={17} className="text-blue-400 shrink-0" />
                <span>Open to Opportunities</span>
              </div>

            </div>
          </div>

          {/* Technical Skills */}
          <div className="lg:col-span-2 bg-[#1c2535] border border-white/10 rounded-xl p-6 md:p-8">

            <h3 className="text-xl font-semibold text-white mb-7">
              Technologies I Work With
            </h3>

            <div className="space-y-7">

              {skillGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <div key={group.title}>

                    <div className="flex items-center gap-2 mb-4">
                      <Icon
                        size={18}
                        className="text-blue-400"
                      />

                      <h4 className="text-sm font-semibold text-white">
                        {group.title}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-3">
                      {group.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                          {skill}
                        </div>
                      ))}
                    </div>

                  </div>
                );
              })}

            </div>

            <div className="mt-8 pt-5 border-t border-white/10">
              <p className="text-sm text-gray-400 leading-relaxed">
                Always learning, experimenting and improving
                through practical development.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
