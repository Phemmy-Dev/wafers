import React, { useState, useEffect } from 'react';
import { mockFeaturedStories } from '../data/mockData';
import type { FeaturedStory, StoryCategory } from '../types';
import { MediaPlaceholder } from '../components/common/MediaPlaceholder';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Video,
  ExternalLink,
  CheckCircle2,
  Share2,
  Globe,
  Mail,
  Maximize2,
  X,
  Check,
  Building2,
  Sparkles,
  Users,
} from 'lucide-react';
import storiesHeroImg from '../assets/images/HeroImg.jpg';

export const FeaturedStories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeStory, setActiveStory] = useState<FeaturedStory | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const categories: (string | StoryCategory)[] = [
    'All',
    'Webinars & Events',
    'Research Breakthrough',
    'Policy & Impact',
    'Field Dispatches',
    'Institute News',
  ];

  // Sync with URL Hash for direct linkability & back button behavior
  useEffect(() => {
    const handleHash = () => {
      const rawHash = window.location.hash.replace('#', '');
      const parts = rawHash.split('/');
      if (parts[0] === 'featured-stories' && parts[1]) {
        const found = mockFeaturedStories.find((s) => s.slug === parts[1]);
        if (found) {
          setActiveStory(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (parts[0] === 'featured-stories' && !parts[1]) {
        setActiveStory(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenStory = (story: FeaturedStory) => {
    setActiveStory(story);
    window.location.hash = `featured-stories/${story.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setActiveStory(null);
    window.location.hash = 'featured-stories';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const filteredStories = mockFeaturedStories.filter((s) => {
    if (selectedCategory === 'All') return true;
    return s.category === selectedCategory;
  });

  const leadStory = filteredStories.length > 0 ? filteredStories[0] : null;
  const remainingStories =
    selectedCategory === 'All' && leadStory
      ? filteredStories.slice(1)
      : filteredStories;

  // ==========================================
  // 1. STORY DETAIL VIEW
  // ==========================================
  if (activeStory) {
    return (
      <article className="w-full bg-white pb-24 text-slate-900">
        {/* Sticky Utility / Breadcrumb Sub-bar */}
        <div className="sticky top-20 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md py-3 shadow-xs">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
            <button
              onClick={handleBackToList}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-sky-700 transition-colors uppercase tracking-widest cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Stories</span>
            </button>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline-block text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 bg-slate-100 text-slate-600 border border-slate-200">
                {activeStory.category}
              </span>
              <button
                onClick={handleShare}
                type="button"
                className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 px-4 py-1.5 bg-white cursor-pointer transition-colors shadow-2xs"
                title="Copy share link"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Premium Article Header */}
        <header className="w-full bg-slate-950 text-white border-b border-slate-800 py-16 sm:py-24 relative overflow-hidden">
           {/* Optional background subtle texture or image blur could go here */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 space-y-8">
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-block border border-sky-500/50 text-sky-400 text-[10px] font-mono uppercase tracking-widest px-4 py-1.5 rounded-full">
                {activeStory.category}
              </span>
              {activeStory.eventDetails && (
                <span className="inline-flex items-center gap-2 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono uppercase tracking-widest px-4 py-1.5 rounded-full bg-emerald-950/30">
                  <Video className="w-3.5 h-3.5" />
                  International Webinar Series
                </span>
              )}
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] max-w-5xl">
              {activeStory.title}
            </h1>

            {activeStory.subtitle && (
              <p className="text-xl sm:text-2xl text-slate-300 font-serif leading-relaxed italic max-w-3xl">
                {activeStory.subtitle}
              </p>
            )}

            {/* Author Byline & Meta Info */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-10 mt-10 border-t border-slate-800/80 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-serif text-white font-medium text-lg border border-slate-700">
                  {activeStory.author.name[0].toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="uppercase tracking-widest text-[10px] font-bold">By:</span>
                    {activeStory.author.profileUrl ? (
                      <a
                        href={activeStory.author.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white hover:text-sky-300 underline underline-offset-4 transition-colors inline-flex items-center gap-1.5"
                      >
                        {activeStory.author.name}
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>
                    ) : (
                      <span className="font-bold text-white text-sm">{activeStory.author.name}</span>
                    )}
                  </div>
                  <p className="text-slate-500 mt-1">{activeStory.author.role}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-sky-500" />
                  <span>{activeStory.publishedAt}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-500" />
                  <span>{activeStory.readingTime}</span>
                </div>
              </div>
            </div>

            {/* Co-hosting badge strip */}
            {activeStory.coHosts && (
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold mr-2">
                  Jointly Hosted By:
                </span>
                {activeStory.coHosts.map((host) => (
                  <span
                    key={host.shortName}
                    className="inline-flex items-center gap-2 text-xs font-sans font-medium text-slate-300 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full"
                  >
                    <Building2 className="w-3.5 h-3.5 text-sky-500" />
                    {host.name} ({host.shortName})
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Main Article Body & Sidebar Grid */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-16 sm:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-12">
              {/* Lead Excerpt Callout */}
              <div className="border-l-2 border-sky-600 pl-8 text-slate-900">
                <p className="font-serif text-2xl sm:text-3xl leading-relaxed italic font-light">
                  "{activeStory.excerpt}"
                </p>
              </div>

              {/* Body Paragraphs - Editorial Typography */}
              <div className="space-y-8 text-slate-700 font-serif text-lg sm:text-xl leading-relaxed font-light">
                {activeStory.content?.map((paragraph, idx) => (
                  <p key={idx}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Objectives Box - Clean Bento */}
              {activeStory.keyObjectives && activeStory.keyObjectives.length > 0 && (
                <section className="bg-slate-50 border border-slate-200 p-8 sm:p-12 space-y-8">
                  <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
                    <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-700 flex items-center justify-center font-bold border border-sky-100">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-sky-700 font-bold block mb-1">
                        Webinar Agenda
                      </span>
                      <h2 className="font-serif text-3xl font-medium text-slate-900">
                        Key Objectives
                      </h2>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {activeStory.keyObjectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-700 text-base leading-relaxed font-light">
                        <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Speakers & Panelists Roster */}
              {activeStory.speakers && activeStory.speakers.length > 0 && (
                <section className="space-y-8 pt-8 border-t border-slate-200">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sky-600 font-bold block">
                      Global Thought Leadership
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-medium text-slate-900">
                      Distinguished Speakers
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {activeStory.speakers.map((person, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-sky-300 transition-colors group"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                            <span
                              className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 font-bold ${
                                person.type === 'Speaker'
                                  ? 'bg-sky-50 text-sky-700 border border-sky-100'
                                  : 'bg-slate-50 text-slate-600 border border-slate-200'
                              }`}
                            >
                              {person.type}
                            </span>
                            <span className="text-[10px] font-mono uppercase text-slate-400">{person.affiliation}</span>
                          </div>
                          <div>
                             <h3 className="font-serif text-xl font-medium text-slate-900 group-hover:text-sky-700 transition-colors mb-2">
                               {person.name}
                             </h3>
                             <p className="text-sm text-slate-600 leading-relaxed font-light">
                               {person.role}
                             </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Original Post Attribution */}
              {activeStory.originalUrl && (
                <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
                  <span>First published: October 15, 2025</span>
                  <a
                    href={activeStory.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 font-bold hover:text-sky-700 hover:underline inline-flex items-center gap-1.5 transition-colors uppercase tracking-widest"
                  >
                    <span>View original on wafers.org</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Right Sidebar Column (5 cols) */}
            <aside className="lg:col-span-5 space-y-8 lg:sticky lg:top-36">
              {/* Event Schedule & Registration Card */}
              {activeStory.eventDetails && (
                <div className="bg-slate-50 p-8 sm:p-10 border border-slate-200 space-y-8">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-sky-600 font-bold block mb-2">
                        Live Digital Sessions
                      </span>
                      <h3 className="font-serif text-3xl font-medium text-slate-900">
                        Event Schedule
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white text-sky-600 flex items-center justify-center font-bold border border-slate-200 shadow-sm">
                      <Calendar className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-6 text-xs font-mono">
                    <div className="space-y-3">
                      <span className="text-slate-500 uppercase tracking-widest font-bold block">Session Dates</span>
                      <div className="space-y-2">
                        {activeStory.eventDetails.dates.map((date, idx) => (
                          <div
                            key={idx}
                            className="bg-white border border-slate-200 px-4 py-3 flex items-center justify-between text-slate-700 shadow-xs"
                          >
                            <span className="font-bold text-slate-900 uppercase tracking-widest">Part 0{idx + 1}</span>
                            <span className="text-sky-700 font-bold">{date}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="bg-white border border-slate-200 p-4 shadow-xs">
                        <span className="text-slate-500 uppercase tracking-widest font-bold block mb-2 text-[10px]">Time</span>
                        <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-sky-600" />
                          {activeStory.eventDetails.time}
                        </span>
                      </div>
                      <div className="bg-white border border-slate-200 p-4 shadow-xs">
                        <span className="text-slate-500 uppercase tracking-widest font-bold block mb-2 text-[10px]">Platform</span>
                        <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <Video className="w-4 h-4 text-sky-600" />
                          {activeStory.eventDetails.platform}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Primary CTA */}
                  {activeStory.eventDetails.registrationUrl && (
                    <div className="pt-4 space-y-4">
                      <a
                        href={activeStory.eventDetails.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-slate-950 hover:bg-slate-800 text-white py-4 px-6 text-xs font-mono font-bold uppercase tracking-widest transition-colors shadow-lg text-center flex items-center justify-center gap-3 cursor-pointer group"
                      >
                        <span>Register (Zoom)</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <p className="text-[11px] text-center text-slate-500 font-mono leading-relaxed">
                        Don’t miss this opportunity to engage with global thought leaders.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Webinar Flyer Card with Lightbox trigger */}
              {activeStory.coverImage && (
                <div className="bg-slate-50 border border-slate-200 p-4 space-y-3">
                  <div className="relative group cursor-pointer overflow-hidden border border-slate-200 bg-white" onClick={() => setIsLightboxOpen(true)}>
                    <img
                      src={activeStory.coverImage}
                      alt={activeStory.title}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 text-white text-xs font-mono font-bold uppercase tracking-widest backdrop-blur-sm">
                      <Maximize2 className="w-4 h-4" />
                      <span>View Flyer</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-500 pt-2 px-2">
                    <span className="font-bold">Official Poster</span>
                    <button
                      onClick={() => setIsLightboxOpen(true)}
                      className="text-sky-700 font-bold hover:underline cursor-pointer flex items-center gap-1.5"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>Enlarge</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Contact Card */}
              {activeStory.contactInfo && (
                <div className="bg-slate-950 text-white p-8 border border-slate-800 space-y-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold block mb-2">
                    Research Secretariat
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-white mb-6">
                     Connect With Us
                  </h3>
                  <div className="flex flex-col gap-4 text-sm font-mono font-light">
                    {activeStory.contactInfo.website && (
                      <a
                        href={activeStory.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                      >
                        <Globe className="w-4 h-4 text-sky-500" />
                        <span>wafersonline.org</span>
                      </a>
                    )}
                    {activeStory.contactInfo.email && (
                      <a
                        href={`mailto:${activeStory.contactInfo.email}`}
                        className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                      >
                        <Mail className="w-4 h-4 text-sky-500" />
                        <span>{activeStory.contactInfo.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Quick Navigation Card */}
              <div className="pt-4">
                <button
                  onClick={handleBackToList}
                  className="w-full text-center border border-slate-900 bg-transparent hover:bg-slate-900 text-slate-900 hover:text-white text-xs font-mono font-bold uppercase tracking-widest py-4 px-6 transition-colors cursor-pointer group"
                >
                  <span className="inline-block group-hover:-translate-x-1 transition-transform mr-2">←</span> 
                  Browse Other Stories
                </button>
              </div>
            </aside>
          </div>
        </div>

        {/* Lightbox Modal for Flyer Image */}
        {isLightboxOpen && activeStory.coverImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center bg-white p-2 sm:p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 text-white bg-slate-900 hover:bg-sky-600 p-3 rounded-full cursor-pointer z-10 transition-colors shadow-lg"
                aria-label="Close flyer preview"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={activeStory.coverImage}
                alt="Webinar Poster Full View"
                className="max-h-[80vh] w-auto object-contain"
              />
              <div className="w-full py-4 px-4 flex items-center justify-between text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                <span>WHO • GIN • WAFERs Joint Webinar Series</span>
                {activeStory.eventDetails?.registrationUrl && (
                  <a
                    href={activeStory.eventDetails.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 hover:text-sky-700 transition-colors inline-flex items-center gap-2"
                  >
                    <span>Register Here</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </article>
    );
  }

  // ==========================================
  // 2. STORIES INDEX VIEW (Listing Page)
  // ==========================================
  return (
    <div className="w-full bg-white text-slate-900">
      {/* Page Hero Header - Editorial Style */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center">
        <img
          src={storiesHeroImg}
          alt="Field Dispatches, Essays & Breakthroughs"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-12 pt-24 pb-16 flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
          <div className="inline-flex items-center gap-2 text-sky-300 text-[10px] font-mono uppercase tracking-widest border border-sky-300/30 px-4 py-1.5 rounded-full">
            Field Dispatches, Essays & Breakthroughs
          </div>
          
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-[6.5rem] font-medium tracking-tight text-white leading-[0.9] -ml-1">
            Featured <span className="italic text-sky-400">Stories</span>
          </h1>
          
          <p className="font-sans text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed font-light mt-4">
            In-depth dispatches, methodology explainers, webinar proceedings, and policy commentaries authored by institute fellows and global partners.
          </p>
        </div>
      </section>

      {/* Category Filter Bar - Elegant Underline Tabs */}
      <section className="border-b border-slate-200 bg-white sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-8 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-mono uppercase tracking-widest whitespace-nowrap shrink-0 transition-colors cursor-pointer pb-1 border-b-2 ${
                  selectedCategory === cat
                    ? 'text-sky-700 border-sky-600 font-bold'
                    : 'text-slate-400 border-transparent hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-slate-400 hidden md:inline shrink-0">
            Showing {filteredStories.length} {filteredStories.length === 1 ? 'Dispatch' : 'Dispatches'}
          </span>
        </div>
      </section>

      {/* Stories Listing Container */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-24 sm:py-32 space-y-24">
        
        {/* LEAD / PRIMARY FEATURED STORY CARD */}
        {selectedCategory === 'All' && leadStory && (
          <div className="bg-slate-950 text-white overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Flyer / Visual Slot (6 cols) */}
              <div
                className="lg:col-span-6 relative min-h-[400px] bg-slate-900 overflow-hidden cursor-pointer"
                onClick={() => handleOpenStory(leadStory)}
              >
                {leadStory.coverImage ? (
                  <img
                    src={leadStory.coverImage}
                    alt={leadStory.title}
                    className="absolute inset-0 w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                ) : (
                  <MediaPlaceholder
                    aspectRatio="full"
                    type="image"
                    label={`${leadStory.category} Visual Slot`}
                    className="h-full w-full absolute inset-0"
                  />
                )}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-950 shadow-lg">
                  Lead Story
                </div>
              </div>

              {/* Story Narrative / CTA (6 cols) */}
              <div className="lg:col-span-6 p-10 sm:p-14 lg:p-16 flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold">
                    <span>{leadStory.category}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{leadStory.publishedAt}</span>
                  </div>

                  <h2
                    onClick={() => handleOpenStory(leadStory)}
                    className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white hover:text-sky-400 transition-colors leading-[1.1] cursor-pointer"
                  >
                    {leadStory.title}
                  </h2>

                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                    {leadStory.excerpt}
                  </p>

                  {/* Co-host indicators if available */}
                  {leadStory.coHosts && (
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                      <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-slate-500">
                        Joint Initiative:
                      </span>
                      {leadStory.coHosts.map((host) => (
                        <span
                          key={host.shortName}
                          className="text-[10px] font-mono font-bold uppercase text-slate-300 bg-white/5 border border-white/10 px-3 py-1"
                        >
                          {host.shortName}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="text-xs font-mono text-slate-400">
                    <span className="uppercase tracking-widest text-[10px] block mb-1">Author</span>
                    <span className="text-white font-bold">{leadStory.author.name}</span>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => handleOpenStory(leadStory)}
                      className="w-full sm:w-auto bg-white hover:bg-slate-200 text-slate-950 px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest transition-colors inline-flex items-center justify-center gap-3 cursor-pointer group"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* REMAINING STORIES GRID (When multiple stories exist) */}
        {remainingStories.length > 0 && (
          <div className="space-y-12">
            {selectedCategory === 'All' && (
              <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                <h3 className="font-serif text-3xl font-medium text-slate-900">
                  More Featured <span className="italic">Dispatches</span>
                </h3>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {remainingStories.map((story) => (
                <article
                  key={story.id}
                  onClick={() => handleOpenStory(story)}
                  className="group cursor-pointer bg-white flex flex-col h-full"
                >
                  <div className="flex-1 flex flex-col">
                    {/* Visual Media Header */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 mb-6">
                      {story.coverImage ? (
                         <img
                           src={story.coverImage}
                           alt={story.title}
                           className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                         />
                      ) : (
                        <MediaPlaceholder
                          aspectRatio="full"
                          type="image"
                          label={`${story.category} Visual`}
                          className="h-full w-full absolute inset-0"
                        />
                      )}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                        {story.category}
                      </div>
                    </div>

                    <div className="space-y-4 flex-1">
                      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                        <span>{story.publishedAt}</span>
                        <span>{story.readingTime}</span>
                      </div>

                      <h2 className="font-serif text-2xl font-medium text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                        {story.title}
                      </h2>

                      <p className="text-base text-slate-600 leading-relaxed font-light line-clamp-3">
                        {story.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest font-bold">
                    <span className="text-slate-500">{story.author.name}</span>
                    <span className="text-slate-900 group-hover:text-sky-700 transition-colors flex items-center gap-2">
                      Read Story <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Empty State when a filter yields 0 stories */}
        {filteredStories.length === 0 && (
          <div className="border border-slate-200 bg-slate-50 p-16 text-center flex flex-col items-center justify-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-300">
               <Users className="w-8 h-8" />
            </div>
            <div className="space-y-2">
               <h3 className="font-serif text-2xl font-medium text-slate-900">No stories found</h3>
               <p className="text-base text-slate-600 font-light">
                 Try selecting another category or view all dispatches.
               </p>
            </div>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold uppercase tracking-widest px-8 py-4 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
