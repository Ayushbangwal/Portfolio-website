
import React from 'react';
import {
  GraduationCap,
  Code2,
  Monitor,
  Database
} from 'lucide-react';

const stats = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech CSE',
    description: 'Computer Science and Engineering'
  },
  {
    icon: Code2,
    label: 'Primary Focus',
    value: 'Web Development',
    description: 'Building practical web applications'
  },
  {
    icon: Monitor,
    label: 'Frontend',
    value: 'React & JavaScript',
    description: 'Creating responsive user interfaces'
  },
  {
    icon: Database,
    label: 'Backend & Database',
    value: 'Node.js & Supabase',
    description: 'Working with backend technologies'
  }
];

const Stats = () => {
  return (
    <section
      id="stats"
      className="py-20 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <p className="text-sm font-medium tracking-widest
          uppercase text-blue-400 mb-3">
            A Quick Overview
          </p>

          <h2 className="text-3xl sm:text-4xl
          font-bold text-white mb-4">
            At a Glance
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto
          leading-7">
            A snapshot of my education, development interests
            and the technologies I currently work with.
          </p>

        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-4 gap-5">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="bg-gray-800/40
                border border-white/10 rounded-lg
                p-6 text-left"
              >

                <Icon
                  size={25}
                  strokeWidth={1.7}
                  className="text-blue-400 mb-6"
                />

                <p className="text-sm text-gray-400 mb-2">
                  {stat.label}
                </p>

                <h3 className="text-xl font-semibold
                text-white mb-2">
                  {stat.value}
                </h3>

                <p className="text-sm text-gray-400
                leading-6">
                  {stat.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Contact Section */}
        <div className="mt-12 border-t border-white/10
        pt-10 text-center">

          <h3 className="text-2xl font-semibold
          text-white mb-3">
            Let's Connect
          </h3>

          <p className="text-gray-400 max-w-xl
          mx-auto mb-6 leading-7">
            I'm open to learning opportunities,
            collaborations and connecting with people
            working in technology.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center
            justify-center px-6 py-3 rounded-md
            bg-blue-600 text-white font-medium
            hover:bg-blue-700 transition-colors duration-200"
          >
            Get in Touch
          </a>

        </div>

      </div>
    </section>
  );
};

export default Stats;
