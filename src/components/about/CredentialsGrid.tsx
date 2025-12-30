'use client';

import React from 'react';

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  icon: string;
}

interface Skills {
  design: string[];
  ai: string[];
  creative: string[];
  languages: Array<{ flag: string; name: string; level: string }>;
}

interface CredentialsGridProps {
  education: Education[];
  skills: Skills;
}

export const CredentialsGrid: React.FC<CredentialsGridProps> = ({
  education,
  skills,
}) => {
  return (
    <section className="bg-[var(--secondary)] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="font-heading font-semibold text-2xl text-[var(--text-primary)] mb-8">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-[var(--background-white)] rounded-xl p-6 shadow-[var(--shadow-soft)] border border-[var(--border)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{edu.icon}</span>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)]">{edu.degree}</h3>
                      <p className="text-[var(--text-secondary)] text-sm">{edu.institution}</p>
                      <p className="text-[var(--text-secondary)] text-sm mt-1">
                        {edu.location} • {edu.period}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills */}
          <div>
            <h2 className="font-heading font-semibold text-2xl text-[var(--text-primary)] mb-8">
              Skills & Tools
            </h2>
            <div className="space-y-6">
              {/* Design Tools */}
              <div className="bg-[var(--background-white)] rounded-xl p-6 shadow-[var(--shadow-soft)] border border-[var(--border)]">
                <h3 className="font-semibold text-sm text-[var(--accent)] uppercase tracking-wider mb-3">
                  Design
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.design.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[var(--secondary)] rounded-full text-sm text-[var(--text-secondary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* AI Tools */}
              <div className="bg-[var(--background-white)] rounded-xl p-6 shadow-[var(--shadow-soft)] border border-[var(--border)]">
                <h3 className="font-semibold text-sm text-[var(--accent)] uppercase tracking-wider mb-3">
                  AI & Automation
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.ai.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[var(--secondary)] rounded-full text-sm text-[var(--text-secondary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Creative Tools */}
              <div className="bg-[var(--background-white)] rounded-xl p-6 shadow-[var(--shadow-soft)] border border-[var(--border)]">
                <h3 className="font-semibold text-sm text-[var(--accent)] uppercase tracking-wider mb-3">
                  Creative
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.creative.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[var(--secondary)] rounded-full text-sm text-[var(--text-secondary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Languages */}
              <div className="bg-[var(--background-white)] rounded-xl p-6 shadow-[var(--shadow-soft)] border border-[var(--border)]">
                <h3 className="font-semibold text-sm text-[var(--accent)] uppercase tracking-wider mb-3">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-4">
                  {skills.languages.map((lang) => (
                    <div key={lang.name} className="flex items-center gap-2">
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-[var(--text-secondary)]">
                        {lang.name} <span className="text-sm text-[var(--muted)]">({lang.level})</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsGrid;
