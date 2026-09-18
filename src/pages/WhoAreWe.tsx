import React from 'react';
import teamAssemblyImg from '../assets/images/4.jpg';
import { Globe, Compass, Check, ArrowRight } from 'lucide-react';

export const WhoAreWe: React.FC = () => {
  // Exact data from WAFERs governance and research roster
  const trustees = [
    {
      name: 'Professor Adewale Adebajo',
      role: 'Consultant Physician in Rheumatology',
      institution: 'University of Sheffield',
    },
    {
      name: 'Dr Joseph Monehin',
      role: 'Public Health expert and Medical Consultant',
      institution: 'Senior Child Health Advisor USAID',
    },
    {
      name: 'Mr Ademola Ojo',
      role: 'Director',
      institution: 'Super soft rolls subsidiary of BMG ventures Nigeria',
    },
    {
      name: 'Dr Opeyemi Babatunde',
      role: 'Physiotherapist, Researcher',
      institution: 'Evidence Synthesis and Applied Health Research',
    },
  ];

  const researchers = [
    {
      name: 'Dr Ibidunni Alonge',
      role: 'Research Fellow',
      institution: 'WAFERs Research Hub',
    },
    {
      name: 'Mrs Bolade Adesokan',
      role: 'Research Director',
      institution: 'WAFERs Research Hub',
    },
    {
      name: 'Ebunoluwa Ayinmode',
      role: 'Project Officer and Research Fellow',
      institution: 'WAFERs Research Hub',
    },
    {
      name: 'Mojisola Adeyemi',
      role: 'Knowledge Broker',
      institution: 'WAFERs Research Hub',
    },
  ];

  const advisors = [
    {
      name: 'Professor Celia Gregson',
      role: 'Professor of Clinical Epidemiology',
      institution: 'Bristol University',
    },
    {
      name: 'Professor Krysia Dziedzic',
      role: 'Director, Impact Accelerator Unit',
      institution: 'Keele University',
    },
    {
      name: 'Professor Athula Sumathipala',
      role: 'Hon. Director',
      institution: 'Institute for Research and Development, Sri Lanka',
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* 1. HERO SECTION - Classic Full-Bleed Editorial */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center">
        {/* Full-bleed background image */}
        <img
          src={teamAssemblyImg}
          alt="WAFERs Research Consortium & Assembly"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%]"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        {/* Foreground Content - Pure Typography */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-12 pt-24 pb-16 flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
          <div className="inline-flex items-center gap-2 text-sky-300 text-[10px] font-mono uppercase tracking-widest border border-sky-300/30 px-4 py-1.5 rounded-full">
            Institutional Consortium & Governance
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-[6.5rem] font-medium tracking-tight text-white leading-[0.9] -ml-1">
            Who <span className="text-sky-400 italic">We Are</span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-slate-200 max-w-3xl leading-relaxed font-light mt-4">
            At WAFERs, we are dedicated to addressing public health challenges in low-and middle-income countries through innovative health research. Our multidisciplinary approach encompasses clinical studies, epidemiological investigations, and health systems research. By leveraging research training, capacity building, and international collaborations, we strive to enhance the health and well being of individuals in underdeveloped economies.
          </p>
        </div>
      </section>

      {/* 2. OUR APPROACH - Elegant Split Layout */}
      <section className="w-full bg-slate-50 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left: Section Title */}
            <div className="lg:col-span-4 space-y-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-sky-600 font-bold block">
                Methodology & Principles
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 tracking-tight">
                Our <span className="italic">Approach</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-light">
                We are centred around conducting high-quality research that addresses health priorities throughout the life course and has a tangible impact on policy and practice.
              </p>
            </div>

            {/* Right: Key Principles Content */}
            <div className="lg:col-span-8 space-y-12">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-sky-700 border border-slate-100">
                  <Compass className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-sans text-xl font-bold text-slate-900 mb-3">Deep Understanding of Local Context</h3>
                  <p className="text-base text-slate-600 leading-relaxed font-light">
                    We demonstrate respect for and gain insight into the local context by carefully considering the socio-economic and cultural determinants of health. This includes identifying local health priorities and comprehending the unique challenges faced by health systems in the settings where we operate.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-slate-200" />

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-sky-700 border border-slate-100">
                  <Globe className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-sans text-xl font-bold text-slate-900 mb-3">Global Networking & Knowledge Translation</h3>
                  <p className="text-base text-slate-600 leading-relaxed font-light">
                    WAFERs actively collaborates with leading research institutions worldwide, regional networks, and social enterprises. Through these partnerships, we aim to foster global networking and facilitate the translation of scientific evidence into actionable policy and practice, transforming knowledge into tangible socio-economic benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR COMPETENCIES - Clean List Layout */}
      <section className="w-full bg-white py-24 sm:py-32 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center space-y-8">
          <div className="space-y-4">
             <span className="text-[11px] font-mono uppercase tracking-widest text-sky-600 font-bold block">
              Institutional Capability
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 tracking-tight">
              Our <span className="italic">Competencies</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
              WAFERs partners with stakeholders at all levels to provide new ways of promoting the health of the public. We pioneer and advance creative, high-impact solutions by conducting innovative research to inform decision-makers, building connecting platforms, and providing direct support to local change agents.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-6">
            {[
              "Innovative research informing policy makers",
              "Platforms & networks connecting people and ideas",
              "Direct support to local change agents",
              "Co-created, meaningful & lasting health solutions"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-sky-600" strokeWidth={2} />
                </div>
                <span className="font-sans text-sm font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP TIERS - Unified Minimalist Cards */}
      <section className="w-full bg-slate-50 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-24">
          
          {/* TIER 1: TRUSTEES */}
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <h3 className="font-serif text-3xl font-medium text-slate-900">
                Trustees
              </h3>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                Executive Governance Board
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustees.map((person) => (
                <div
                  key={person.name}
                  className="bg-white p-8 border border-slate-200 hover:border-sky-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 flex items-center justify-center font-serif text-lg text-sky-700 bg-sky-50 rounded-full mb-6">
                      {person.name.split(' ').pop()?.[0]}
                    </div>
                    <h4 className="font-sans text-lg font-bold text-slate-900 leading-snug group-hover:text-sky-700 transition-colors">
                      {person.name}
                    </h4>
                    <p className="text-sm font-light text-slate-600 leading-relaxed">
                      {person.role}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                     <span className="text-[11px] font-mono text-slate-400 leading-snug max-w-[80%]">
                        {person.institution}
                     </span>
                     <ArrowRight className="w-4 h-4 text-sky-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TIER 2: RESEARCHERS */}
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <h3 className="font-serif text-3xl font-medium text-slate-900">
                Researchers
              </h3>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                Investigative Cohort
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchers.map((person) => (
                <div
                  key={person.name}
                  className="bg-white p-8 border border-slate-200 hover:border-sky-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 flex items-center justify-center font-serif text-lg text-sky-700 bg-sky-50 rounded-full mb-6">
                      {person.name.split(' ').pop()?.[0]}
                    </div>
                    <h4 className="font-sans text-lg font-bold text-slate-900 leading-snug group-hover:text-sky-700 transition-colors">
                      {person.name}
                    </h4>
                    <p className="text-sm font-light text-slate-600 leading-relaxed">
                      {person.role}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                     <span className="text-[11px] font-mono text-slate-400 leading-snug max-w-[80%]">
                        {person.institution}
                     </span>
                     <ArrowRight className="w-4 h-4 text-sky-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TIER 3: ADVISORS */}
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <h3 className="font-serif text-3xl font-medium text-slate-900">
                Advisors
              </h3>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                International Advisory Council
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advisors.map((person) => (
                <div
                  key={person.name}
                  className="bg-white p-8 border border-slate-200 hover:border-sky-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 flex items-center justify-center font-serif text-lg text-sky-700 bg-sky-50 rounded-full mb-6">
                      {person.name.split(' ').pop()?.[0]}
                    </div>
                    <h4 className="font-sans text-lg font-bold text-slate-900 leading-snug group-hover:text-sky-700 transition-colors">
                      {person.name}
                    </h4>
                    <p className="text-sm font-light text-slate-600 leading-relaxed">
                      {person.role}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                     <span className="text-[11px] font-mono text-slate-400 leading-snug max-w-[80%]">
                        {person.institution}
                     </span>
                     <ArrowRight className="w-4 h-4 text-sky-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. INSTITUTIONAL ENGAGEMENT CALLOUT - Matte Navy Editorial Style */}
      <section className="w-full bg-slate-950 text-white py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center flex flex-col items-center gap-8">
           <div className="inline-block border border-sky-500/50 text-sky-400 text-[10px] font-mono uppercase tracking-widest px-4 py-1.5">
            Collaborate With Us
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">
            Partner for <span className="italic text-sky-400">Global Impact</span>
          </h2>
          <p className="text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            We actively invite international universities, health ministries, civil society bodies, and healthcare institutions to partner in clinical trials, policy translation, and research capacity building.
          </p>
          <div className="pt-4">
            <a
              href="mailto:info@wafers.org"
              className="inline-flex items-center gap-3 bg-transparent hover:bg-white text-white hover:text-slate-900 border border-white px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer group"
            >
              <span>Contact Advisory Board</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
