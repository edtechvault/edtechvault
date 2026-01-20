'use client';

import React from 'react';
import { BackgroundEllipses } from '../ui/BackgroundEllipses';

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  icon: string;
  description: string;
  achievements?: string[];
}

interface SkillItem {
  name: string;
  icon: string;
  category: string;
}

interface LanguageItem {
  flag: string;
  name: string;
  level: string;
}

interface CredentialsGridProps {
  education: EducationItem[];
  skills: {
    design: SkillItem[];
    ai: SkillItem[];
    creative: SkillItem[];
  };
  languages: LanguageItem[];
}

export const CredentialsGrid: React.FC<CredentialsGridProps> = ({
  education,
  skills,
  languages,
}) => {
  return (
    <section className="relative bg-[var(--background)] py-16 md:py-24 lg:py-32">
      <BackgroundEllipses sections={['credentials']} />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Education Section */}
        <div className="mb-16">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[var(--text-primary)] mb-8 text-center">
            Education
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((item) => (
              <div
                key={item.id}
                className="bg-[var(--secondary)] rounded-2xl p-6 md:p-8 border-2 border-transparent hover:border-[var(--primary)] transition-all duration-300 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-xl md:text-2xl text-[var(--text-primary)]">
                      {item.degree}
                    </h3>
                    <p className="text-[var(--text-secondary)] font-medium">
                      {item.institution}
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-sm text-[var(--text-secondary)]">
                      <span>{item.location}</span>
                      <span>•</span>
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] mb-4">
                  {item.description}
                </p>
                {item.achievements && item.achievements.length > 0 && (
                  <div className="border-t border-[var(--border)] pt-4">
                    <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                          <span className="text-[var(--primary)] mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[var(--text-primary)] mb-8 text-center">
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Design Skills */}
            <div className="bg-[var(--secondary)] rounded-2xl p-6 md:p-8">
              <h3 className="font-heading font-semibold text-xl md:text-2xl text-[var(--text-primary)] mb-4">
                Design & Development
              </h3>
              <div className="space-y-3">
                {skills.design.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-white/50 rounded-xl"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-medium text-[var(--text-primary)]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Skills */}
            <div className="bg-[var(--secondary)] rounded-2xl p-6 md:p-8">
              <h3 className="font-heading font-semibold text-xl md:text-2xl text-[var(--text-primary)] mb-4">
                AI & Automation
              </h3>
              <div className="space-y-3">
                {skills.ai.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-white/50 rounded-xl"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-medium text-[var(--text-primary)]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Creative Skills */}
            <div className="bg-[var(--secondary)] rounded-2xl p-6 md:p-8">
              <h3 className="font-heading font-semibold text-xl md:text-2xl text-[var(--text-primary)] mb-4">
                Creative Tools
              </h3>
              <div className="space-y-3">
                {skills.creative.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-white/50 rounded-xl"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-medium text-[var(--text-primary)]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[var(--text-primary)] mb-8 text-center">
            Languages
          </h2>
          <div className="max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-6">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--secondary)] rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-[var(--shadow-soft)]"
                >
                  <div className="text-4xl mb-3">{lang.flag}</div>
                  <h3 className="font-heading font-semibold text-xl text-[var(--text-primary)] mb-2">
                    {lang.name}
                  </h3>
                  <div className="inline-block px-4 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium">
                    {lang.level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-[var(--secondary)] rounded-2xl p-8 md:p-10 shadow-[var(--shadow-medium)]">
            <p className="text-[var(--text-secondary)] text-lg mb-4">
              Need a website that showcases your expertise?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-white rounded-xl font-semibold text-lg hover:bg-[var(--accent-dark)] transition-all duration-200 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] hover:-translate-y-0.5"
            >
              Let&#39;s Talk About Your Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsGrid;
