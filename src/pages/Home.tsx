import React from 'react';
import type { NavLinkId } from '../types';
import heroImg from '../assets/images/1.jpeg';
import multimorbidityImg from '../assets/images/6.png';
import jointImg from '../assets/images/joint.jpg';
import ageImg from '../assets/images/age.jpg';
import burnoutImg from '../assets/images/building-a-healthier.jpg';
import publicationImg from '../assets/images/publication-img.jpg';
import { ArrowRight, BookOpen, GraduationCap, MessageSquareShare, Megaphone, Check, Phone, Mail, Clock, Sparkles } from 'lucide-react';

interface HomeProps {
  onNavigate: (tab: NavLinkId, projectSlug?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* 1. HERO SECTION - Classic Full-Bleed Editorial */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center">
        {/* Full-bleed background image */}
        <img
          src={heroImg}
          alt="WAFERs Research Symposium & Delegation"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Foreground Content - Pure Typography */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-12 pt-20 pb-12 flex flex-col items-center sm:items-start text-center sm:text-left gap-8">
          <div className="inline-flex items-center gap-2 text-sky-300 text-[10px] font-mono uppercase tracking-widest border border-sky-300/30 px-4 py-1.5 rounded-full">
            The West African Institute for Applied Health Research
          </div>

          <h1 className="font-serif text-6xl sm:text-8xl lg:text-[7.5rem] font-medium tracking-tight text-white leading-[0.9] -ml-1">
            WAFE<span className="text-sky-400 italic">Rs</span>
          </h1>

          <p className="font-sans text-lg sm:text-2xl text-slate-200 max-w-2xl leading-relaxed font-light">
            Advancing equitable healthcare by transforming evidence into lasting solutions for low- and middle-income countries.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="w-full sm:w-auto bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Explore Our Research</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('who-are-we')}
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
            >
              <span>Learn About Us</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US - BENTO BOX STYLE */}
      <section className="w-full bg-slate-50 py-24 sm:py-32 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-50/50 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Main Statement */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-px bg-sky-600" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-sky-600 font-bold">
                  Who We Are
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
                Addressing <br className="hidden sm:block" />
                <span className="italic text-sky-700">public health challenges</span> <br className="hidden sm:block" />
                in low-income countries.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                WAFERs is a registered non-profit organization dedicated to research and training. Guided by an international board of advisors, we turn the best evidence and technology into lasting solutions.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => onNavigate('who-are-we')}
                  className="text-sky-600 font-sans font-bold text-sm tracking-wide uppercase flex items-center gap-2 group hover:text-sky-800 transition-colors cursor-pointer"
                >
                  <span className="border-b-2 border-sky-200 group-hover:border-sky-800 pb-0.5 transition-colors">Read Full Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Bento Grid Info Blocks */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0">
              {/* Vision Card */}
              <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-slate-100 group hover:shadow-[0_8px_30px_-10px_rgba(0,102,204,0.1)] transition-all duration-300">
                <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-sans text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To be the game changer for basic services – including health and education using best available evidence and technology in West-Africa.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/20 rounded-bl-full pointer-events-none" />
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 group-hover:bg-sky-400 group-hover:text-slate-900 transition-all duration-300 relative z-10">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-sans text-xl font-bold mb-3 relative z-10">Our Mission</h3>
                <p className="text-sm text-slate-300 leading-relaxed relative z-10">
                  Make basic services more effective using the best available evidence. We promote global health and get research into practice for policy makers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. GUIDING PRINCIPLES TICKER */}
      <section className="w-full bg-sky-700 text-white py-10 overflow-hidden border-y border-sky-800 relative">
        <div className="w-max flex whitespace-nowrap animate-marquee cursor-default">
          {/* We duplicate the content to create a seamless infinite loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12 shrink-0">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-sky-300">Guiding Principles</span>
              
              <div className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="font-serif italic text-3xl sm:text-4xl">Evidence-Driven Impact</span>
              
              <div className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="font-serif italic text-3xl sm:text-4xl">Capacity Building</span>
              
              <div className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="font-serif italic text-3xl sm:text-4xl">Health Equity</span>
              
              <div className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="font-serif italic text-3xl sm:text-4xl">Collaboration & Partnership</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FLAGSHIP INITIATIVES SHOWCASE */}
      <section className="w-full bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono uppercase tracking-widest text-sky-600 font-bold block mb-3">
                Field Deployments
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 tracking-tight">
                Featured <span className="italic">Initiatives</span>
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="hidden md:inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-900 px-6 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Project 1 */}
            <div className="group rounded-3xl overflow-hidden bg-slate-100 relative h-[400px] sm:h-[480px] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer" onClick={() => onNavigate('projects', 'pam-care')}>
              <img src={multimorbidityImg} alt="Multimorbidity Care" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 flex flex-col justify-end h-full">
                <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit border border-white/10">01 // Initiative</span>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white leading-tight mb-4 group-hover:-translate-y-2 transition-transform duration-300">
                  Patient-Centred Approach to Multimorbidity Care
                </h3>
                <div className="overflow-hidden">
                  <span className="text-sky-300 text-sm font-medium flex items-center gap-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    Discover More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group rounded-3xl overflow-hidden bg-slate-100 relative h-[400px] sm:h-[480px] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer" onClick={() => onNavigate('projects', 'jigsaw-africa')}>
              <img src={jointImg} alt="Jigsaw Africa" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/90 via-sky-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 flex flex-col justify-end h-full">
                <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit border border-white/10">02 // Initiative</span>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white leading-tight mb-4 group-hover:-translate-y-2 transition-transform duration-300">
                  Joint Implementation of Guidelines for Osteoarthritis
                </h3>
                <div className="overflow-hidden">
                  <span className="text-sky-300 text-sm font-medium flex items-center gap-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    Discover More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group rounded-3xl overflow-hidden bg-slate-100 relative h-[400px] sm:h-[480px] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer" onClick={() => onNavigate('projects', 'circles-of-joy')}>
              <img src={ageImg} alt="Circles of Joy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 flex flex-col justify-end h-full">
                <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit border border-white/10">03 // Initiative</span>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white leading-tight mb-4 group-hover:-translate-y-2 transition-transform duration-300">
                  Age-Friendly Community Initiative
                </h3>
                <div className="overflow-hidden">
                  <span className="text-sky-300 text-sm font-medium flex items-center gap-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    Discover More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group rounded-3xl overflow-hidden bg-slate-100 relative h-[400px] sm:h-[480px] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer" onClick={() => onNavigate('projects', 'reducing-burnout')}>
              <img src={burnoutImg} alt="Tackling Burnout" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/90 via-sky-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 flex flex-col justify-end h-full">
                <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit border border-white/10">04 // Initiative</span>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white leading-tight mb-4 group-hover:-translate-y-2 transition-transform duration-300">
                  Tackling Burnout Among Healthcare Workers in Nigeria
                </h3>
                <div className="overflow-hidden">
                  <span className="text-sky-300 text-sm font-medium flex items-center gap-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    Discover More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile view all button */}
          <div className="mt-8 flex justify-center md:hidden">
             <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. THE KNOWLEDGE TRANSLATION CENTRE BANNER */}
      <section className="w-full px-4 sm:px-8 py-8">
        <div className="max-w-7xl mx-auto bg-slate-950 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/30 blur-[120px] rounded-full mix-blend-screen pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none -translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 px-8 sm:px-16 py-20 text-center flex flex-col items-center">
             <div className="inline-block border border-sky-500 text-sky-400 text-[10px] font-mono uppercase tracking-widest px-4 py-1.5 mb-8">
                Standing Centre
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
                The Knowledge <span className="italic text-sky-400">Translation</span> Centre
              </h2>
              <div className="max-w-2xl mx-auto space-y-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-10">
                <p>
                  West Africa does not lack evidence. What it lacks is a reliable path from that evidence to the decisions that shape people’s health.
                </p>
                <p>
                  We help governments, health systems and partners find evidence, judge how strong it is, and use it.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('knowledge-translation-centre')}
                className="bg-white text-slate-900 hover:bg-sky-50 px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(255,255,255,0.2)] flex items-center gap-2 cursor-pointer"
              >
                <span>Visit the Centre</span>
                <ArrowRight className="w-4 h-4" />
              </button>
          </div>
        </div>
      </section>

      {/* 6. OUR STRATEGIC FOCUS */}
      <section className="w-full bg-slate-50 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-sky-600 font-bold block">
              Core Strategic Focus
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 tracking-tight">
              Transforming <span className="italic">Evidence into Action</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Focus 1 */}
            <div className="bg-white p-8 rounded-none border border-slate-200 hover:bg-slate-50 transition-colors duration-300 group flex flex-col items-start cursor-pointer">
              <div className="text-sky-700 mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                <GraduationCap className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-slate-900 mb-4 flex items-center gap-3">
                Training & Consultation
                <ArrowRight className="w-5 h-5 text-sky-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-light">
                Building the capacity of healthcare professionals across Africa. We offer novel ideas, implementation strategies for sustainability, and technical expertise.
              </p>
            </div>

            {/* Focus 2 */}
            <div className="bg-white p-8 rounded-none border border-slate-200 hover:bg-slate-50 transition-colors duration-300 group flex flex-col items-start cursor-pointer">
              <div className="text-sky-700 mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                <MessageSquareShare className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-slate-900 mb-4 flex items-center gap-3">
                Health Communication
                <ArrowRight className="w-5 h-5 text-sky-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-light">
                Raising awareness and debunking misconceptions. We provide accurate, engaging information to empower individuals to make informed health decisions.
              </p>
            </div>

            {/* Focus 3 */}
            <div className="bg-white p-8 rounded-none border border-slate-200 hover:bg-slate-50 transition-colors duration-300 group flex flex-col items-start cursor-pointer">
              <div className="text-sky-700 mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                <Megaphone className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-slate-900 mb-4 flex items-center gap-3">
                Advocacy
                <ArrowRight className="w-5 h-5 text-sky-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-light">
                Influencing stakeholders to commit resources and enact policies that stimulate structured guidelines, ensuring healthcare is affordable and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DUAL SPLIT: PUBLICATIONS & VIDEO (Enhanced Layout) */}
      <section className="w-full py-12 px-4 sm:px-8">
         <div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-xl border border-slate-100">
            {/* Left: Publications */}
            <div className="relative bg-slate-950 p-12 sm:p-16 flex flex-col justify-center overflow-hidden min-h-[400px]">
              <img src={publicationImg} alt="Publications" className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-sky-950/80" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <BookOpen className="w-5 h-5 text-sky-300" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-sky-300 font-bold">Research Archive</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-medium text-white leading-tight mb-4">
                  Publications
                </h3>
                <p className="text-slate-300 font-light mb-8 max-w-sm">
                  Access our extensive library of insights shaping healthier futures across the continent.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('publications')}
                  className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                >
                  Browse Archive <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Video */}
            <div className="bg-black relative min-h-[400px]">
              <iframe
                src="https://www.youtube-nocookie.com/embed/v-GG6uw8Jzo?start=7"
                title="WAFERs Initiatives Video"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
         </div>
      </section>

      {/* 8. CONTACT STRIP - Clean Modern Grid */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12">
            
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-100 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 mb-4 shadow-sm group-hover:text-sky-600 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2">Email Us</span>
              <a href="mailto:info@wafers.org" className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors">
                info@wafers.org
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-100 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 mb-4 shadow-sm group-hover:text-sky-600 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2">Call Us</span>
              <a href="tel:08108166902" className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors">
                08108166902
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-100 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 mb-4 shadow-sm group-hover:text-sky-600 transition-colors">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2">Office Time</span>
              <span className="text-sm font-bold text-slate-900">
                Mon - Fri, 9:00 – 6:00PM WAT
              </span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
