import React, { useState } from 'react';
import pubHeroImg from '../assets/images/publication-img.jpg';
import { Search, Copy, Check, BookOpen, Calendar, MapPin, ArrowRight } from 'lucide-react';

interface PublicationItem {
  id: string;
  category: 'Published Manuscripts' | 'Conference Presentations' | 'Other Published Manuscripts';
  title: string;
  authors: string;
  venue: string;
  year?: string;
  dates?: string;
  location?: string;
  doi?: string;
  url?: string;
  status?: string;
  tags: string[];
}

export const Publications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const publicationsData: PublicationItem[] = [
    // 1. Published Manuscripts
    {
      id: 'pub-ms-01',
      category: 'Published Manuscripts',
      title: 'The Prevalence and Pattern of Comorbid Long-term Conditions with Low back pain and Osteoarthritis in Low-and Middle-Income Countries: A Systematic Review and Meta-Analysis',
      authors: 'Samuel Tushingham, Jason Cottle, Mobolade Adesokan, Omoyemi O. Ogwumike, Akin Ojagbemi, Brendon Stubbs, Francis Fatoye, Opeyemi O. Babatunde',
      venue: 'International Journal of Health Promotion and Education',
      year: '2024',
      doi: '10.1080/14635240.2024.2332911',
      url: 'https://doi.org/10.1080/14635240.2024.2332911',
      status: 'Published',
      tags: ['Multimorbidity', 'Low Back Pain', 'Osteoarthritis', 'Meta-Analysis'],
    },
    {
      id: 'pub-ms-02',
      category: 'Published Manuscripts',
      title: 'Self-management interventions for multiple long-term conditions in Low- and Middle-Income Countries: A Systematic Review',
      authors: 'T. Akhal, M. Gabra, M. Adesokan, O. Babatunde',
      venue: 'Journal of Global Health',
      year: '2024',
      url: 'https://keele-repository.worktribe.com/output/1196744',
      status: 'In Press',
      tags: ['Self-Management', 'Chronic Conditions', 'Global Health'],
    },
    {
      id: 'pub-ms-03',
      category: 'Published Manuscripts',
      title: 'Everyday living Osteoarthritis: Care Gaps and Unmet Needs of Osteoarthritis Patients in Nigeria, West Africa - A Qualitative Study',
      authors: 'T. Owoyemi, I. Alonge, O. Adetunji, E. Ogbu, A. Ogunbanjo, S. White, A. Adebajo, C. Mallen, O. O. Babatunde, K. Dziedzic',
      venue: 'Osteoarthritis and Cartilage Open, 7(1), 100555',
      year: '2024',
      doi: '10.1016/j.ocarto.2024.100555',
      url: 'https://doi.org/10.1016/j.ocarto.2024.100555',
      status: 'Published',
      tags: ['Osteoarthritis', 'Qualitative Study', 'Nigeria', 'Patient-Centred'],
    },

    // 2. Conference Presentations
    {
      id: 'conf-01',
      category: 'Conference Presentations',
      title: 'Co-contextualising and Implementing evidence-based care model for osteoarthritis: Nigerian case study in the Joint Implementation of Guidelines for Osteoarthritis in West-Africa (JIGSAW-A)',
      authors: 'Opeyemi O. Babatunde, Oladapo A. Adetunji, Ibidunni Alonge, Tolulope Owoyemi, Praise Taiwo, Adebimpe Ogunbanjo, Steven Blackburn, Simon White, Adewale Adebajo, Christian Mallen',
      venue: 'OARSI 2024 World Congress on Osteoarthritis',
      year: '2024',
      dates: 'April 18–21, 2024',
      location: 'Vienna, Austria',
      doi: '10.1016/j.joca.2024.02.799',
      url: 'https://doi.org/10.1016/j.joca.2024.02.799',
      status: 'Conference Proceeding',
      tags: ['JIGSAW-A', 'OARSI 2024', 'Vienna', 'Guideline Implementation'],
    },
    {
      id: 'conf-02',
      category: 'Conference Presentations',
      title: 'Challenges Of Implementing A New Model Of Care For Osteoarthritis Among Community Pharmacies In South Western Nigeria: Focus on the Joint Implementation of Guidelines for Osteoarthritis in West-Africa (JIGSAW-A)',
      authors: 'Oladapo Adetunji, Tolulope Owoyemi, Ibidunni Alonge, Adebimpe Ogunbanjo, Praise Taiwo, Jacqui Carter, Simon White, Christian Mallen, Adewale Adebajo, Opeyemi Babatunde',
      venue: 'OARSI 2024 World Congress on Osteoarthritis',
      year: '2024',
      dates: 'April 18–21, 2024',
      location: 'Vienna, Austria',
      doi: '10.1016/j.joca.2024.02.800',
      url: 'https://doi.org/10.1016/j.joca.2024.02.800',
      status: 'Conference Proceeding',
      tags: ['Community Pharmacy', 'JIGSAW-A', 'OARSI 2024', 'South-Western Nigeria'],
    },
    {
      id: 'conf-03',
      category: 'Conference Presentations',
      title: 'Nutrition in older adults with Osteoarthritis and joint pain: Empowering people in sub-Saharan Africa with the right information to live and self-manage well in line with core guideline recommendations',
      authors: 'WAFERs Nutrition & Osteoarthritis Working Group',
      venue: 'International Conference on Nutrition (ICN)',
      year: '2024',
      dates: 'November 04–05, 2024',
      location: 'Cape Town, South Africa',
      status: 'Conference Presentation',
      tags: ['Nutrition', 'Elderly Care', 'Joint Pain', 'Cape Town'],
    },
    {
      id: 'conf-04',
      category: 'Conference Presentations',
      title: 'Everyday living Osteoarthritis: Care Gaps and Unmet Needs of Osteoarthritis Patients in Nigeria, West Africa - A Qualitative Study',
      authors: 'WAFERs Clinical Research Team',
      venue: '25th Annual National Scientific Conference & General Meeting',
      year: '2023',
      dates: 'July 22, 2023',
      location: 'Nigeria',
      status: 'Conference Presentation',
      tags: ['Qualitative Care', 'Scientific Conference', 'Nigeria'],
    },
    {
      id: 'conf-05',
      category: 'Conference Presentations',
      title: 'Management of Osteoarthritis in a West Africa Country: Perspective of Community Pharmacists and Healthcare Professionals',
      authors: 'WAFERs Health Systems Cohort',
      venue: '64th Nigeria Society of Physiotherapists Conference',
      year: '2023',
      dates: 'October 8–14, 2023',
      location: 'Nigeria',
      status: 'Conference Presentation',
      tags: ['Physiotherapy', 'Community Pharmacists', 'Nigeria'],
    },
    {
      id: 'conf-06',
      category: 'Conference Presentations',
      title: 'Diet myths and Osteoarthritis in Africa: Patient Information Needs and Role of Healthcare Professionals',
      authors: 'WAFERs Doctoral & Research Fellows',
      venue: 'Support Program for PhD Students in Africa (SuNREA) Training / Workshop',
      year: '2023',
      dates: 'October 8–14, 2023',
      location: 'South Africa',
      status: 'Workshop & Training',
      tags: ['Diet Myths', 'SuNREA', 'Capacity Building', 'South Africa'],
    },

    // 3. Other Published Manuscripts
    {
      id: 'other-01',
      category: 'Other Published Manuscripts',
      title: 'Everyday living with osteoarthritis in the global South: A qualitative focus group inquiry in Nigeria',
      authors: 'Owoyemi, T., Alonge, I., Adetunji, O., Ogbu, E., Ogunbanjo, A., White, S., Adebajo, A., Mallen, C., Babatunde, O. O., & Dziedzic, K.',
      venue: 'Osteoarthritis and Cartilage Open, 7(1), 100555',
      year: '2024',
      doi: '10.1016/j.ocarto.2024.100555',
      url: 'https://doi.org/10.1016/j.ocarto.2024.100555',
      status: 'Open Access',
      tags: ['Global South', 'Qualitative Focus Groups', 'Nigeria'],
    },
    {
      id: 'other-02',
      category: 'Other Published Manuscripts',
      title: 'CHALLENGES OF IMPLEMENTING A NEW MODEL OF CARE FOR OSTEOARTHRITIS AMONG COMMUNITY PHARMACIES IN SOUTH-WESTERN NIGERIA: Focus on the Joint Implementation of Guidelines for Osteoarthritis in West-Africa (JIGSAW-A)',
      authors: 'Adetunji, O., Owoyemi, T., Alonge, I., Ogunbanjo, A., Taiwo, P., Carter, J., White, S., Mallen, C., Adebajo, A., & Babatunde, O.',
      venue: 'Osteoarthritis and Cartilage, Vol. 32, S538',
      year: '2024',
      doi: '10.1016/j.joca.2024.02.800',
      url: 'https://doi.org/10.1016/j.joca.2024.02.800',
      status: 'Published Supplement',
      tags: ['JIGSAW-A', 'Community Pharmacies', 'South-Western Nigeria'],
    },
    {
      id: 'other-03',
      category: 'Other Published Manuscripts',
      title: 'Co-contextualising and Implementing evidence-based care model for osteoarthritis: Nigerian case study in the Joint Implementation of Guidelines for OsteoArthritis in West-Africa (JIGSAW-A)',
      authors: 'Babatunde, O., Adetunji, O., Alonge, I., Owoyemi, T., Taiwo, P., Ogunbanjo, A., Blackburn, S., White, S., Adebajo, A., & Mallen, C.',
      venue: 'Osteoarthritis and Cartilage, Vol. 32, S537-S538',
      year: '2024',
      doi: '10.1016/j.joca.2024.02.799',
      url: 'https://doi.org/10.1016/j.joca.2024.02.799',
      status: 'Published Supplement',
      tags: ['Care Model', 'JIGSAW-A', 'Nigeria'],
    },
    {
      id: 'other-04',
      category: 'Other Published Manuscripts',
      title: 'Co-development and testing of an extended community pharmacy model of service delivery for managing osteoarthritis: protocol for a sequential, multi-methods study (PharmOA)',
      authors: 'Babatunde, O. O., Cottrell, E., White, S. et al.',
      venue: 'BMC Musculoskeletal Disorders, 25, 54',
      year: '2024',
      doi: '10.1186/s12891-023-07105-2',
      url: 'https://doi.org/10.1186/s12891-023-07105-2',
      status: 'Open Access Protocol',
      tags: ['PharmOA', 'Study Protocol', 'BMC Musculoskeletal'],
    },
    {
      id: 'other-05',
      category: 'Other Published Manuscripts',
      title: 'The Prevalence and Pattern of Comorbid Long-Term Conditions with Low Back Pain and Osteoarthritis in Low- and Middle-Income Countries: A Systematic Review and Meta-Analysis',
      authors: 'Tushingham, Samuel, Jason Cottle, Mobolade Adesokan, Omoyemi O. Ogwumike, Akin Ojagbemi, Brendon Stubbs, Francis Fatoye, and Opeyemi O Babatunde',
      venue: 'International Journal of Health Promotion and Education, April, 1–25',
      year: '2024',
      doi: '10.1080/14635240.2024.2332911',
      url: 'https://doi.org/10.1080/14635240.2024.2332911',
      status: 'Peer-Reviewed',
      tags: ['Systematic Review', 'Meta-Analysis', 'Low Back Pain'],
    },
    {
      id: 'other-06',
      category: 'Other Published Manuscripts',
      title: 'Self-management interventions for common long-term conditions in low- and middle-income countries',
      authors: 'Akhal, T., Gabra, M., Adesokan, M., & Babatunde, O.',
      venue: 'Journal of Global Health',
      year: '2024',
      status: 'In Press',
      url: 'https://keele-repository.worktribe.com/output/1196744',
      tags: ['Self-Management', 'LMICs', 'Journal of Global Health'],
    },
    {
      id: 'other-07',
      category: 'Other Published Manuscripts',
      title: 'JIGSAW-A PROCESS AND FEASIBILITY OF IMPLEMENTING GUIDELINE RECOMMENDATIONS FOR THE CARE OF OSTEOARTHRITIS IN WEST-AFRICA',
      authors: 'Babatunde, O., Adetunji, O., Alonge, I., Owoyemi, T., Ayinmode, E., Ogunbanjo, A., White, S., Adebajo, A., Mallen, C., & Dziedzic, K.',
      venue: 'BMJ Global Health',
      year: '2024',
      status: 'In Press',
      tags: ['BMJ Global Health', 'JIGSAW-A', 'Feasibility Study', 'West Africa'],
    },
  ];

  const categories = [
    'All',
    'Published Manuscripts',
    'Conference Presentations',
    'Other Published Manuscripts',
  ];

  const filteredPublications = publicationsData.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCopyCitation = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full bg-slate-50 overflow-hidden">
      {/* 1. HERO SECTION - Classic Full-Bleed Editorial */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center">
        {/* Full-bleed background image */}
        <img
          src={pubHeroImg}
          alt="Scholarly Medical Literature Archive"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%]"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        {/* Foreground Content - Pure Typography */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-12 pt-24 pb-16 flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
          <div className="inline-flex items-center gap-2 text-sky-300 text-[10px] font-mono uppercase tracking-widest border border-sky-300/30 px-4 py-1.5 rounded-full">
            Scholarly Output & Evidence Repository
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-[6.5rem] font-medium tracking-tight text-white leading-[0.9] -ml-1">
            Pub<span className="italic text-sky-400">lications</span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed font-light mt-4">
            Peer-reviewed manuscripts, clinical implementation protocols, and international conference presentations advancing health systems across West Africa.
          </p>
        </div>
      </section>

      {/* 2. RESEARCH IMPACT METRICS BAR - Clean Grid */}
      <section className="w-full bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center md:divide-x md:divide-slate-200">
            <div className="px-4 space-y-2">
              <span className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 block">16+</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                Published Works & Presentations
              </span>
            </div>
            <div className="px-4 space-y-2">
              <span className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 block">100%</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                Peer-Reviewed Evidence
              </span>
            </div>
            <div className="px-4 space-y-2">
              <span className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 block">Global</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                OARSI, BMJ & Lancet Reach
              </span>
            </div>
            <div className="px-4 space-y-2">
              <span className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 block">JIGSAW-A</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                West-Africa Clinical Model
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEARCH & CATEGORY FILTER BAR - Minimalist */}
      <section className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, author, venue, or keyword..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 text-sm font-sans placeholder-slate-400 focus:outline-hidden focus:border-sky-500 transition-colors rounded-none"
              />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-6 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[11px] font-mono uppercase tracking-widest pb-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer border-b-2 ${
                    selectedCategory === cat
                      ? 'text-sky-700 border-sky-600 font-bold'
                      : 'text-slate-500 border-transparent hover:text-slate-800 hover:border-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESULTS COUNT BAR */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-12 pb-4 flex justify-between items-center text-[11px] font-mono uppercase tracking-widest text-slate-400 border-b border-slate-200">
        <span>Showing {filteredPublications.length} record{filteredPublications.length !== 1 ? 's' : ''}</span>
        <span className="hidden sm:inline">Official WAFERs Research Bibliography</span>
      </div>

      {/* 5. PUBLICATIONS LISTING */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-12 space-y-8 pb-32">
        {filteredPublications.length === 0 ? (
          <div className="border border-slate-200 p-16 text-center text-slate-500 font-sans text-base bg-white">
            No publications matched your search criteria. Try adjusting your filters.
          </div>
        ) : (
          filteredPublications.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-slate-200 p-8 sm:p-10 hover:border-sky-200 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono uppercase tracking-widest font-bold">
                    <span className="text-sky-600">
                      {item.category}
                    </span>
                    {item.status && (
                      <>
                        <span className="text-slate-300">/</span>
                        <span className={`${
                          item.status === 'In Press'
                            ? 'text-amber-600'
                            : 'text-slate-500'
                        }`}>
                          {item.status}
                        </span>
                      </>
                    )}
                    {item.year && (
                      <>
                        <span className="text-slate-300">/</span>
                        <span className="text-slate-500 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.year}
                        </span>
                      </>
                    )}
                  </div>

                  {item.location && (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                  {item.title}
                </h2>

                {/* Venue / Journal / Conference */}
                <div className="flex items-start gap-3 text-base text-slate-700 font-serif italic">
                  <BookOpen className="w-5 h-5 text-sky-600 shrink-0 mt-0.5 not-italic" strokeWidth={1.5} />
                  <span>
                    {item.venue}
                    {item.dates ? ` (${item.dates})` : ''}
                  </span>
                </div>

                {/* Authors */}
                <p className="text-sm font-sans text-slate-600 leading-relaxed font-light">
                  <span className="font-medium text-slate-900">Authors:</span> {item.authors}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-slate-500 px-3 py-1 text-[10px] font-mono uppercase tracking-widest border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 border-t border-slate-100 mt-8 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  {item.doi && (
                    <span className="text-[11px] font-mono text-slate-400 tracking-wide">
                      DOI: {item.doi}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => handleCopyCitation(item.id, `${item.authors} (${item.year || ''}). ${item.title}. ${item.venue}. ${item.doi ? `https://doi.org/${item.doi}` : ''}`)}
                    className="text-slate-600 hover:text-slate-900 px-4 py-2 text-[11px] font-mono font-bold uppercase tracking-widest flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Citation</span>
                      </>
                    )}
                  </button>

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-6 py-2.5 text-[11px] font-mono font-bold uppercase tracking-widest transition-colors inline-flex items-center gap-2 cursor-pointer group/btn"
                    >
                      <span>View Paper</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))
        )}
      </section>

      {/* 6. CALLOUT BANNER - Matte Navy Editorial Style */}
      <section className="w-full bg-slate-950 text-white py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center flex flex-col items-center gap-8">
           <div className="inline-block border border-sky-500/50 text-sky-400 text-[10px] font-mono uppercase tracking-widest px-4 py-1.5">
            Academic Inquiries & Reprints
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">
            Request Full-Text Manuscripts or <span className="italic text-sky-400">Collaboration</span>
          </h2>
          <p className="text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            For peer institutions, health ministries, or researchers seeking raw statistical datasets, supplementary appendices, or co-author opportunities.
          </p>
          <div className="pt-4">
            <a
              href="mailto:info@wafers.org"
              className="inline-flex items-center gap-3 bg-transparent hover:bg-white text-white hover:text-slate-900 border border-white px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer group"
            >
              <span>Contact Research Secretariat</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
