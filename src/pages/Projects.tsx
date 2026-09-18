import React, { useState, useEffect } from 'react';
import { projectSublinks } from '../data/mockData';
import { ArrowLeft, ArrowRight, Check, FileText } from 'lucide-react';
import jigsawHeroImg from '../assets/images/joint.jpg';
import circlesHeroImg from '../assets/images/newsletter2Img.png';
import burnoutHeroImg from '../assets/images/building-a-healthier.jpg';
import pamHeroImg from '../assets/images/news img.png';
import allProjectsHeroImg from '../assets/images/HeroImg0.jpg';
import circle1Img from '../assets/images/circles/1.jpg';
import circle2Img from '../assets/images/circles/2.jpg';
import circle3Img from '../assets/images/circles/3.jpg';
import circle4Img from '../assets/images/circles/4.jpg';

interface ProjectsProps {
  activeProjectSlug?: string | null;
  onSelectProject?: (slug: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  activeProjectSlug,
  onSelectProject,
}) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(activeProjectSlug || 'all');

  useEffect(() => {
    if (activeProjectSlug) {
      setSelectedSlug(activeProjectSlug);
    }
  }, [activeProjectSlug]);

  const handleSwitchTab = (slug: string) => {
    setSelectedSlug(slug);
    if (onSelectProject) {
      onSelectProject(slug);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper component for the Next Project banner
  const NextProjectBanner = ({ nextSlug, nextTitle }: { nextSlug: string, nextTitle: string }) => (
    <section className="w-full bg-slate-950 text-white py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center flex flex-col items-center gap-8">
          <div className="inline-block border border-sky-500/50 text-sky-400 text-[10px] font-mono uppercase tracking-widest px-4 py-1.5">
          Explore More WAFERs Initiatives
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
          Next: <span className="italic text-sky-400">{nextTitle}</span>
        </h2>
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => handleSwitchTab(nextSlug)}
            className="w-full sm:w-auto bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>View Next Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            type="button"
            onClick={() => handleSwitchTab('all')}
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
          >
            <span>All Projects Overview</span>
          </button>
        </div>
      </div>
    </section>
  );

  // Helper component for the Sub-Navigation
  const SubNavigation = () => (
    <section className="border-b border-slate-200 bg-white sticky top-20 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => handleSwitchTab('all')}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-900 transition-colors cursor-pointer font-bold uppercase tracking-widest self-start sm:self-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Projects</span>
        </button>
        <div className="flex items-center gap-6 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
          {projectSublinks.map((sub, idx) => (
            <button
              key={sub.slug}
              type="button"
              onClick={() => handleSwitchTab(sub.slug)}
              className={`text-xs font-mono uppercase tracking-widest whitespace-nowrap shrink-0 transition-colors cursor-pointer pb-1 border-b-2 ${
                selectedSlug === sub.slug
                  ? 'text-sky-700 border-sky-600 font-bold'
                  : 'text-slate-400 border-transparent hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              0{idx + 1}. {sub.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );

  // -------------------------------------------------------------
  // DEDICATED VIEW: JIGSAW-AFRICA
  // -------------------------------------------------------------
  if (selectedSlug === 'jigsaw-africa') {
    return (
      <div className="w-full bg-white overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[60vh] flex items-center justify-center">
          <img
            src={jigsawHeroImg}
            alt="JIGSAW-A"
            className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-12 pt-24 pb-16 flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
            <div className="inline-flex items-center gap-2 text-sky-300 text-[10px] font-mono uppercase tracking-widest border border-sky-300/30 px-4 py-1.5 rounded-full">
              Project 01 // Flagship Care Model
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[5rem] font-medium tracking-tight text-white leading-[1] -ml-1">
              JOINT IMPLEMENTATION OF GUIDELINES FOR OSTEOARTHRITIS IN <span className="italic text-sky-400">WEST-AFRICA</span>
            </h1>
            <p className="font-sans text-base sm:text-xl text-slate-200 max-w-3xl leading-relaxed font-light mt-4">
              A pioneering initiative elevating primary care services and delivering supported self-management models for osteoarthritis across West Africa.
            </p>
          </div>
        </section>

        {/* Sub-Navigation moves below hero */}
        <SubNavigation />

        {/* PROJECT BRIEF & ORIGINS - Split Layout */}
        <section className="w-full bg-slate-50 py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-sky-600 font-bold block">
                  Project Brief
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 tracking-tight">
                  The <span className="italic">Challenge</span>
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-light border-l-2 border-sky-600 pl-6 py-2">
                  JIGSAW-A offers invaluable support to elevate primary care services in West-African countries and is dedicated to meeting the unmet needs of individuals afflicted by osteoarthritis (OA).
                </p>
              </div>
              <div className="lg:col-span-7 space-y-8 pt-2">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light">
                  Across the world, Osteoarthritis is usually managed in primary care, and delivery of quality osteoarthritis care is highly variable. Self-management of long-term illnesses and support for self-management are emphasised in clinical guidelines, but patients say they need help from primary care to achieve self-management.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light">
                  Using research by Keele University and methods piloted in the UK, JIGSAW-A implements a model of supported self-management for osteoarthritis – joint pain that typically affects those 45 and older and limits their everyday activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TEAMS & THE PROJECT - Bento Layout */}
        <section className="w-full bg-white py-24 sm:py-32 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Box 1 */}
                <div className="bg-slate-50 p-8 sm:p-12 border border-slate-200">
                   <h3 className="font-serif text-3xl font-medium text-slate-900 mb-6">The Teams</h3>
                   <p className="text-base text-slate-600 leading-relaxed font-light">
                      JIGSAW-A works through an international community of practice, bringing together academics, primary-care health professionals, industry partners and citizens in shaping local solutions to implementation challenges. The team is founded on academic leadership, dedicated projects management, a committed network of clinical champions, and patients champions with lived experience of osteoarthritis.
                   </p>
                </div>
                {/* Box 2 */}
                <div className="bg-slate-50 p-8 sm:p-12 border border-slate-200">
                   <h3 className="font-serif text-3xl font-medium text-slate-900 mb-6">The Project</h3>
                   <p className="text-base text-slate-600 leading-relaxed font-light">
                      JIGSAW-A helps the systematic implementation of international guidelines and quality standards for osteoarthritis across West-African countries. The goal is to monitor and ensure consistent care for osteoarthritis, the most common chronic joint pain condition, and to help patients understand and self-manage their ailment.
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* WHY IT IS A WAFERS PROJECT */}
        <section className="w-full bg-slate-950 text-white py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400 font-bold block">
                  Strategic Alignment
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-white">
                  Why it is a WAFERs <span className="italic text-sky-400">Project</span>
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  This project of empowering patients is essential for WAFERs to undertake. It's a strategic pathway to:
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                  <h3 className="font-sans text-xl font-bold text-white mb-4">
                    "Bring Care Home"
                  </h3>
                  <p className="text-base text-slate-300 leading-relaxed font-light">
                    because it enables patients to manage their own care with the support from our healthcare professionals.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                  <h3 className="font-sans text-xl font-bold text-white mb-4">
                    "Transforming Healthcare"
                  </h3>
                  <p className="text-base text-slate-300 leading-relaxed font-light">
                    because it improves management of chronic conditions, a challenging Healthcare problem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <NextProjectBanner nextSlug="circles-of-joy" nextTitle="Circles of Joy" />
      </div>
    );
  }

  // -------------------------------------------------------------
  // DEDICATED VIEW: CIRCLES OF JOY
  // -------------------------------------------------------------
  if (selectedSlug === 'circles-of-joy') {
    return (
      <div className="w-full bg-white overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[60vh] flex items-center justify-center">
          <img
            src={circlesHeroImg}
            alt="Circles of Joy"
            className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-12 pt-24 pb-16 flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
            <div className="inline-flex items-center gap-2 text-sky-300 text-[10px] font-mono uppercase tracking-widest border border-sky-300/30 px-4 py-1.5 rounded-full">
              Project 02 // Age-Friendly Communities
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[6.5rem] font-medium tracking-tight text-white leading-[0.9] -ml-1">
              Circles of <span className="italic text-sky-400">Joy</span>
            </h1>
            <p className="font-sans text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed font-light mt-4">
              Creating age-friendly community environments where older adults thrive through wellness activities, healthcare support, and joyful connection.
            </p>
          </div>
        </section>

        {/* Sub-Navigation */}
        <SubNavigation />

        {/* PROJECT BRIEF */}
        <section className="w-full bg-slate-50 py-24 sm:py-32">
          <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center space-y-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-sky-600 font-bold block">
              Project Brief
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 tracking-tight">
              Community & <span className="italic">Connection</span>
            </h2>
            <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
              <p>
                Circles of Joy is a community support initiative designed to create aged-friendly environments where older adults can thrive. At Circles of Joy, older adults find friendship, encouragement, and opportunities for personal growth through wellness activities, healthcare support, and meaningful community engagement. Our goal is to empower every member to live a healthy, fulfilling, and joyful life.
              </p>
              <p>
                As part of our continued efforts to promote inclusion and well-being, Circles of Joy is proudly supported by the BRC Block in Biomedical Research Community Group. This funding helps us expand our reach and deepen our impact, ensuring that older adults in underserved communities have access to resources that support healthy ageing.
              </p>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS & IMAGES */}
        <section className="max-w-7xl mx-auto px-6 sm:px-12 py-24 sm:py-32 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 space-y-8">
              <h2 className="font-serif text-4xl font-medium text-slate-900 tracking-tight">
                Program Highlights
              </h2>
              <ul className="space-y-4">
                {[
                  "Wellness programs tailored to promote physical and mental health.",
                  "Supportive and inclusive community.",
                  "Access information and resources for healthy living",
                  "Interactive sessions, discussions, and shared experiences"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                     <Check className="w-5 h-5 text-sky-600 mt-0.5 shrink-0" />
                     <span className="text-base text-slate-600 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                {[circle1Img, circle2Img, circle3Img, circle4Img].map((img, i) => (
                  <div key={i} className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img src={img} alt={`Circles of joy community ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <NextProjectBanner nextSlug="reducing-burnout" nextTitle="Reducing Burnout" />
      </div>
    );
  }

  // -------------------------------------------------------------
  // DEDICATED VIEW: REDUCING BURNOUT
  // -------------------------------------------------------------
  if (selectedSlug === 'reducing-burnout') {
    return (
      <div className="w-full bg-white overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[60vh] flex items-center justify-center">
          <img
            src={burnoutHeroImg}
            alt="Burnout"
            className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-12 pt-24 pb-16 flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
            <div className="inline-flex items-center gap-2 text-sky-300 text-[10px] font-mono uppercase tracking-widest border border-sky-300/30 px-4 py-1.5 rounded-full">
              Project 03 // Workforce Wellbeing
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[5rem] font-medium tracking-tight text-white leading-[1] -ml-1">
              Building a Healthier <span className="italic text-sky-400">Workforce</span>
            </h1>
            <p className="font-sans text-base sm:text-xl text-slate-200 max-w-3xl leading-relaxed font-light mt-4">
              Caring for those who care for others—establishing Nigeria's first national clinical guidelines to tackle burnout and build healthcare workforce resilience.
            </p>
          </div>
        </section>

        {/* Sub-Navigation */}
        <SubNavigation />

        {/* PROJECT BRIEF */}
        <section className="w-full bg-slate-50 py-24 sm:py-32">
          <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center space-y-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-sky-600 font-bold block">
              Project Brief
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 tracking-tight">
              Tackling Burnout in <span className="italic">Nigeria</span>
            </h2>
            <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
              <p>
                Nigeria’s healthcare workers are the backbone of its health system—but they are under immense pressure. With critical workforce shortages, challenging working conditions, and increasing demands, burnout among healthcare workers (HCWs) has become an urgent concern. Despite this, Nigeria currently lacks a formal, published national guideline specifically addressing burnout and workforce wellbeing.
              </p>
              <p>
                At WAFERs, we’re leading an initiative focused on understanding and addressing this gap—because we believe that caring for those who care for others is essential to strengthening health systems and achieving Universal Health Coverage (UHC) and Sustainable Development Goals (SDGs).
              </p>
            </div>
          </div>
        </section>

        {/* THE THREE PHASES */}
        <section className="max-w-7xl mx-auto px-6 sm:px-12 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 p-10 flex flex-col">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold mb-4">Phase 1 (Completed)</span>
              <h3 className="font-serif text-2xl font-medium text-slate-900 mb-6">Nationwide Survey</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light mb-4">
                From late 2024 to early 2025, we completed the first nationwide survey on burnout and wellbeing among healthcare workers in Nigeria. This gathered vital insights from health professionals across diverse roles and regions.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-light mt-auto">
                The findings highlight a widespread need for urgent, systemic interventions focusing on healthy workplace cultures over individual resilience.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-10 flex flex-col">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold mb-4">Phase 2 (Active)</span>
              <h3 className="font-serif text-2xl font-medium text-slate-900 mb-6">Key Informant Interviews</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                With healthcare leaders, policymakers, frontline workers, and institutional representatives across Nigeria. This will deepen our understanding of the systemic drivers of burnout, and the opportunities to embed wellbeing into organisational practice.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-10 flex flex-col text-white">
               <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest font-bold mb-4">What's Next: Phase 3</span>
               <h3 className="font-serif text-2xl font-medium text-white mb-6">Consortium & Repository</h3>
               <p className="text-sm text-slate-300 leading-relaxed font-light mb-6 border-l-2 border-sky-500 pl-4">
                  A national consortium of experts and institutions to lead the charge in addressing burnout, co-creating solutions, and driving policy advocacy grounded in Nigerian realities.
               </p>
               <p className="text-sm text-slate-300 leading-relaxed font-light border-l-2 border-sky-500 pl-4 mt-auto">
                  Build a living repository of key stakeholders and champions central to the development and scale-up of a national HCW wellbeing support package.
               </p>
            </div>
          </div>
        </section>

        <NextProjectBanner nextSlug="pam-care" nextTitle="PAM (Multimorbidity Care)" />
      </div>
    );
  }

  // -------------------------------------------------------------
  // DEDICATED VIEW: PAM CARE
  // -------------------------------------------------------------
  if (selectedSlug === 'pam-care') {
    return (
      <div className="w-full bg-white overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[60vh] flex items-center justify-center">
          <img
            src={pamHeroImg}
            alt="PAM"
            className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-12 pt-24 pb-16 flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
            <div className="inline-flex items-center gap-2 text-sky-300 text-[10px] font-mono uppercase tracking-widest border border-sky-300/30 px-4 py-1.5 rounded-full">
              Project 04 // Multimorbidity Care Models
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[5rem] font-medium tracking-tight text-white leading-[1] -ml-1">
              Pump-Priming for Person-Centred Multimorbidity Care in <span className="italic text-sky-400">Africa (PAM)</span>
            </h1>
            <p className="font-sans text-base sm:text-xl text-slate-200 max-w-3xl leading-relaxed font-light mt-4">
              Shaping the future of person-centred healthcare in Africa for patients managing complex, multiple long-term conditions.
            </p>
          </div>
        </section>

        {/* Sub-Navigation */}
        <SubNavigation />

        {/* PROJECT BRIEF */}
        <section className="w-full bg-slate-50 py-24 sm:py-32">
          <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center space-y-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-sky-600 font-bold block">
              Overview
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 tracking-tight">
              Shaping the Future of <span className="italic">Healthcare</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
              We&apos;re shaping the future of healthcare for people in Africa living with multimorbidity—that means managing two or more long-term conditions like diabetes, high blood pressure, and chronic pain all at once. Right now, most healthcare guidelines only focus on single conditions and are based on research from outside Africa. But that approach doesn&apos;t reflect the daily realities of people here. We&apos;re working to change that.
            </p>
          </div>
        </section>

        {/* WHAT WE'RE DOING */}
        <section className="max-w-7xl mx-auto px-6 sm:px-12 py-24 sm:py-32">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-6">
                 <h2 className="font-serif text-4xl font-medium text-slate-900 tracking-tight mb-8">
                    What We're Doing
                 </h2>
                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 bg-slate-50 text-sky-700 font-serif text-xl italic">
                       1
                    </div>
                    <div>
                       <h3 className="font-sans text-lg font-bold text-slate-900 mb-2">Connecting Experts</h3>
                       <p className="text-base text-slate-600 font-light leading-relaxed">
                          We brought together researchers, doctors, nurses, and most importantly, patients from Nigeria, Kenya, Sierra Leone, and South Africa for a ground-breaking workshop in Johannesburg. We sat around the table with people from the UK (Keele University) to share ideas.
                       </p>
                    </div>
                 </div>
                 
                 <div className="flex gap-6 mt-8">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 bg-slate-50 text-sky-700 font-serif text-xl italic">
                       2
                    </div>
                    <div>
                       <h3 className="font-sans text-lg font-bold text-slate-900 mb-2">Listening to Patients</h3>
                       <p className="text-base text-slate-600 font-light leading-relaxed">
                          We are listening to the real experts—the people living with these conditions every day. Their stories are guiding our research, helping us design healthcare that fits their actual lives.
                       </p>
                    </div>
                 </div>

                 <div className="flex gap-6 mt-8">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 bg-slate-50 text-sky-700 font-serif text-xl italic">
                       3
                    </div>
                    <div>
                       <h3 className="font-sans text-lg font-bold text-slate-900 mb-2">Building Solutions Together</h3>
                       <p className="text-base text-slate-600 font-light leading-relaxed">
                          By uniting patients, health workers, and researchers, we are designing new ways to support people in managing their multiple health conditions effectively and affordably.
                       </p>
                    </div>
                 </div>
              </div>

              <div className="bg-slate-50 p-10 border border-slate-200 flex flex-col justify-center">
                 <FileText className="w-10 h-10 text-sky-700 mb-6" strokeWidth={1.5} />
                 <h3 className="font-serif text-3xl font-medium text-slate-900 mb-6">Why This Matters</h3>
                 <p className="text-base text-slate-600 font-light leading-relaxed mb-6">
                    Because nobody should have to navigate a complex healthcare system alone or follow advice that doesn't work for their circumstances.
                 </p>
                 <p className="text-base text-slate-600 font-light leading-relaxed font-bold">
                    This project is a crucial step towards healthcare in Africa that truly understands and supports the whole person.
                 </p>
              </div>
           </div>
        </section>

        <NextProjectBanner nextSlug="all" nextTitle="All Projects Overview" />
      </div>
    );
  }


  // -------------------------------------------------------------
  // FALLBACK: MASTER ALL PROJECTS OVERVIEW
  // -------------------------------------------------------------
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center">
        <img
          src={allProjectsHeroImg}
          alt="Research and Initiatives Overview"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-12 pt-24 pb-16 flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
          <div className="inline-flex items-center gap-2 text-sky-300 text-[10px] font-mono uppercase tracking-widest border border-sky-300/30 px-4 py-1.5 rounded-full">
            Flagship Initiatives & Consortia
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-[6.5rem] font-medium tracking-tight text-white leading-[0.9] -ml-1">
            Our <span className="italic text-sky-400">Projects</span>
          </h1>
          <p className="font-sans text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed font-light mt-4">
            A portfolio of high-impact research, clinical implementations, and community wellness programs reshaping healthcare in West Africa and beyond.
          </p>
        </div>
      </section>

      {/* PROJECTS DIRECTORY GRID */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-24 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Project Card: JIGSAW-A */}
          <div 
            onClick={() => handleSwitchTab('jigsaw-africa')}
            className="group cursor-pointer border border-slate-200 bg-white hover:border-sky-200 hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
          >
            <div className="aspect-[16/9] w-full overflow-hidden relative">
               <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors z-10" />
               <img src={jigsawHeroImg} alt="JIGSAW-A" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
               <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-sky-700">
                  Project 01
               </div>
            </div>
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <h2 className="font-serif text-3xl font-medium text-slate-900 mb-4 group-hover:text-sky-700 transition-colors">
                JIGSAW-Africa
              </h2>
              <p className="text-base text-slate-600 font-light leading-relaxed mb-8 flex-1">
                Elevating primary care services and delivering supported self-management models for osteoarthritis across West Africa by implementing globally acclaimed guidelines.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-900 group-hover:text-sky-600 transition-colors">
                Explore Initiative <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Project Card: Circles of Joy */}
          <div 
            onClick={() => handleSwitchTab('circles-of-joy')}
            className="group cursor-pointer border border-slate-200 bg-white hover:border-sky-200 hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
          >
            <div className="aspect-[16/9] w-full overflow-hidden relative">
               <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors z-10" />
               <img src={circlesHeroImg} alt="Circles of Joy" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
               <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-sky-700">
                  Project 02
               </div>
            </div>
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <h2 className="font-serif text-3xl font-medium text-slate-900 mb-4 group-hover:text-sky-700 transition-colors">
                Circles of Joy
              </h2>
              <p className="text-base text-slate-600 font-light leading-relaxed mb-8 flex-1">
                A community support initiative designing age-friendly environments where older adults can thrive through wellness activities, healthcare support, and meaningful engagement.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-900 group-hover:text-sky-600 transition-colors">
                Explore Initiative <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Project Card: Reducing Burnout */}
          <div 
            onClick={() => handleSwitchTab('reducing-burnout')}
            className="group cursor-pointer border border-slate-200 bg-white hover:border-sky-200 hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
          >
            <div className="aspect-[16/9] w-full overflow-hidden relative">
               <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors z-10" />
               <img src={burnoutHeroImg} alt="Reducing Burnout" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
               <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-sky-700">
                  Project 03
               </div>
            </div>
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <h2 className="font-serif text-3xl font-medium text-slate-900 mb-4 group-hover:text-sky-700 transition-colors">
                Reducing Burnout
              </h2>
              <p className="text-base text-slate-600 font-light leading-relaxed mb-8 flex-1">
                Establishing Nigeria's first national clinical guidelines to tackle burnout and build healthcare workforce resilience through robust policy advocacy and systemic reform.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-900 group-hover:text-sky-600 transition-colors">
                Explore Initiative <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Project Card: PAM */}
          <div 
            onClick={() => handleSwitchTab('pam-care')}
            className="group cursor-pointer border border-slate-200 bg-white hover:border-sky-200 hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
          >
            <div className="aspect-[16/9] w-full overflow-hidden relative">
               <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors z-10" />
               <img src={pamHeroImg} alt="PAM Care" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
               <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-sky-700">
                  Project 04
               </div>
            </div>
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <h2 className="font-serif text-3xl font-medium text-slate-900 mb-4 group-hover:text-sky-700 transition-colors">
                PAM (Multimorbidity Care)
              </h2>
              <p className="text-base text-slate-600 font-light leading-relaxed mb-8 flex-1">
                Pump-Priming for Person-Centred Multimorbidity Care in Africa. Shaping the future of healthcare for patients managing complex, multiple long-term conditions.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-900 group-hover:text-sky-600 transition-colors">
                Explore Initiative <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CALLOUT BANNER - Matte Navy Editorial Style */}
      <section className="w-full bg-slate-950 text-white py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center flex flex-col items-center gap-8">
           <div className="inline-block border border-sky-500/50 text-sky-400 text-[10px] font-mono uppercase tracking-widest px-4 py-1.5">
            Partner with WAFERs
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">
            Propose a <span className="italic text-sky-400">Research Initiative</span>
          </h2>
          <p className="text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            We partner with international academic institutions, health ministries, and funders to design and deploy high-impact clinical interventions across West Africa.
          </p>
          <div className="pt-4">
            <a
              href="mailto:info@wafers.org"
              className="inline-flex items-center gap-3 bg-transparent hover:bg-white text-white hover:text-slate-900 border border-white px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer group"
            >
              <span>Submit Project Proposal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
