import React, { useEffect } from 'react';
import type { NavLinkId } from '../types';
import heroImg from '../assets/images/4.jpg';
import { ArrowRight, ExternalLink, Compass, ShieldCheck, Building2, Mail, Users } from 'lucide-react';

interface KnowledgeTranslationCentreProps {
  onNavigate?: (tab: NavLinkId) => void;
}

export const KnowledgeTranslationCentre: React.FC<KnowledgeTranslationCentreProps> = ({ onNavigate }) => {
  // Ensure document title reflects the specified page title
  useEffect(() => {
    document.title = 'Knowledge Translation Centre | WAFERs';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full bg-white text-slate-900 overflow-hidden">
      {/* 1. HERO SECTION - Classic Full-Bleed Editorial */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center">
        {/* Full-bleed background image */}
        <img
          src={heroImg}
          alt="Knowledge Translation Centre Assembly"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%]"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        {/* Foreground Content - Pure Typography */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-12 pt-24 pb-16 flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
          <div className="inline-flex items-center gap-2 text-sky-300 text-[10px] font-mono uppercase tracking-widest border border-sky-300/30 px-4 py-1.5 rounded-full">
            An Initiative of WAFERs
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-[6.5rem] font-medium tracking-tight text-white leading-[0.9] -ml-1">
            Knowledge <br className="hidden sm:block" />Translation <span className="italic text-sky-400">Centre</span>
          </h1>

          <div className="font-sans text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed font-light mt-4 space-y-4">
            <p>
              West Africa does not lack evidence. Every year the region produces more research about its own health systems than the year before.
            </p>
            <p>
              What it lacks is a reliable path from that evidence to the decisions that shape people’s health, and an honest account of where that path breaks. WAFERs established the Knowledge Translation Centre (KTC) to work on that path. KTC sits deliberately between the people who produce evidence and the people who must act on it.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHAT KTC DOES - Clean Bento Layout */}
      <section className="w-full bg-slate-50 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-sky-600 font-bold block">
              Core Mandate & Implementation
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 tracking-tight">
              What KTC <span className="italic">does</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Item 1 */}
            <div className="bg-white border border-slate-200 p-10 sm:p-12 hover:border-sky-200 hover:shadow-xl transition-all duration-300 group flex flex-col justify-start">
              <div className="w-12 h-12 flex items-center justify-center text-sky-600 mb-8 border border-slate-100 bg-slate-50 rounded-full group-hover:scale-110 group-hover:bg-sky-50 transition-all duration-500">
                <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-slate-900 mb-4 group-hover:text-sky-700 transition-colors">
                Delivers evidence that decision-makers can use.
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-light">
                Rapid and systematic reviews, policy briefs and technical reports that turn research into action-ready intelligence, and support for organisations to communicate evidence clearly across technical, policy, leadership and public audiences. Every piece of work states what the evidence shows, what it does not show, and what would change the conclusion.
              </p>
            </div>

            {/* Item 2 */}
            <div className="bg-white border border-slate-200 p-10 sm:p-12 hover:border-sky-200 hover:shadow-xl transition-all duration-300 group flex flex-col justify-start">
              <div className="w-12 h-12 flex items-center justify-center text-sky-600 mb-8 border border-slate-100 bg-slate-50 rounded-full group-hover:scale-110 group-hover:bg-sky-50 transition-all duration-500">
                <Compass className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-slate-900 mb-4 group-hover:text-sky-700 transition-colors">
                Helps interventions work in practice, not just on paper.
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-light">
                Practical implementation blueprints for ministries, NGOs and health organisations, and support for scaling public health innovations across the region, designed around what West African health systems can actually sustain.
              </p>
            </div>

            {/* Item 3 */}
            <div className="bg-white border border-slate-200 p-10 sm:p-12 hover:border-sky-200 hover:shadow-xl transition-all duration-300 group flex flex-col justify-start">
              <div className="w-12 h-12 flex items-center justify-center text-sky-600 mb-8 border border-slate-100 bg-slate-50 rounded-full group-hover:scale-110 group-hover:bg-sky-50 transition-all duration-500">
                <Building2 className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-slate-900 mb-4 group-hover:text-sky-700 transition-colors">
                Builds capability inside institutions.
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-light">
                Nine-month field residencies that place senior public health professionals inside host organisations as part of their doctoral work, alongside continuing professional development and leadership programmes for health institutions and their senior teams.
              </p>
            </div>
          </div>

          {/* External Solutions CTA */}
          <div className="pt-8 text-center">
            <a
              href="https://knowledgetranslationcentre.org/solutions"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer group"
            >
              <span>See KTC’s full range of work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. WORK WITH KTC - Matte Navy Editorial Style */}
      <section className="w-full bg-slate-950 text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-block border border-sky-500/50 text-sky-400 text-[10px] font-mono uppercase tracking-widest px-4 py-1.5 rounded-full">
              Institutional Partnership & Engagement
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">
              Work with the <span className="italic text-sky-400">KTC</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Item 1: Host a candidate (Dark Card) */}
            <div className="bg-white/5 border border-white/10 p-10 sm:p-14 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-sky-300 border-b border-white/10 pb-4">
                  <Users className="w-5 h-5" strokeWidth={1.5} />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Residency Track</span>
                </div>
                <h3 className="font-serif text-3xl font-medium text-white">
                  Host a candidate.
                </h3>
                <div className="space-y-4 text-base text-slate-300 font-light leading-relaxed">
                  <p>
                    We are building a network of organisations that will host nine-month field residencies — senior public health professionals working on real problems inside their institutions, as part of a professional doctoral programme by Keele University, UK, in partnership with WAFERs, University of Ibadan, Nigeria and University of health and allied sciences, Ghana.
                  </p>
                  <p>
                    We are talking to ministries, agencies, health systems, NGOs, research institutions and organisations working at the evidence–health interface across Nigeria and Ghana. If that is you, we would like to talk, including if you are unsure whether your organisation is a fit.
                  </p>
                </div>
              </div>

              <div className="pt-10">
                <a
                  href="https://knowledgetranslationcentre.org/get-involved"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer group"
                >
                  <span>Start a conversation</span>
                  <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Item 2: Talk to us about evidence (White Card) */}
            <div className="bg-white text-slate-900 border border-slate-200 p-10 sm:p-14 flex flex-col justify-between shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-sky-700 border-b border-slate-200 pb-4">
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Consultation & Advisory</span>
                </div>
                <h3 className="font-serif text-3xl font-medium text-slate-900">
                  Talk to us about evidence.
                </h3>
                <p className="text-base text-slate-600 font-light leading-relaxed">
                  If you are facing a decision and are not sure what the evidence supports, or how much to trust what you have been given, we would like to hear about it.
                </p>
              </div>

              <div className="pt-10">
                <a
                  href="mailto:info@wafers.org"
                  className="inline-flex items-center gap-3 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer group"
                >
                  <span>Contact KTC</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Institutional Anchor Badge */}
          <div className="pt-16 border-t border-white/10 text-center">
            <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
              Knowledge Translation Centre • An initiative of WAFERs
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
