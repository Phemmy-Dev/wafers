import React, { useState, useRef, useEffect } from 'react';
import type { NavLinkId } from '../../types';
import logoImg from '../../assets/images/logo.png';
import { Menu, X, ChevronDown, ArrowRight, ExternalLink } from 'lucide-react';
import { projectSublinks } from '../../data/mockData';

export { projectSublinks };

interface NavbarProps {
  currentTab: NavLinkId;
  onSelectTab: (tab: NavLinkId, projectSlug?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [mobileProjectsExpanded, setMobileProjectsExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems: { id: NavLinkId; label: string; hasDropdown?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'who-are-we', label: 'Who We Are' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Projects', hasDropdown: true },
    { id: 'featured-stories', label: 'Featured Stories' },
    { id: 'knowledge-translation-centre', label: 'Knowledge Translation Centre' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProjectsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-slate-100 sticky top-0 z-50 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-20 sm:h-24">
        {/* Brand / Logo */}
        <div
          onClick={() => onSelectTab('home')}
          className="cursor-pointer group flex items-center gap-3 select-none"
        >
          <img
            src={logoImg}
            alt="WAFERs Research Institute"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 origin-left"
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;

            if (item.hasDropdown) {
              return (
                <div
                  key={item.id}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setProjectsDropdownOpen(true)}
                  onMouseLeave={() => setProjectsDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => {
                      onSelectTab('projects');
                      setProjectsDropdownOpen(false);
                    }}
                    className={`relative px-3 py-2 text-[13px] tracking-[0.05em] uppercase font-sans transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'text-slate-900 font-bold'
                        : 'text-slate-500 font-medium hover:text-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${projectsDropdownOpen ? 'rotate-180 text-slate-900' : 'text-slate-400'}`} />
                    <span className={`absolute -bottom-1 left-3 right-3 h-[2px] bg-sky-600 transition-all duration-300 origin-center ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'}`} />
                  </button>

                  {/* Desktop Dropdown Menu */}
                  <div className={`absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[400px] bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-2 z-50 transition-all duration-300 ${projectsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className="px-4 py-3 mb-2 border-b border-slate-50 flex justify-between items-center text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                      <span>Research Initiatives</span>
                      <span className="text-sky-600 font-bold bg-sky-50 px-2 py-0.5 rounded-full">4 Flagship Projects</span>
                    </div>

                    <div className="space-y-1">
                      {projectSublinks.map((project, idx) => (
                        <button
                          key={project.slug}
                          type="button"
                          onClick={() => {
                            onSelectTab('projects', project.slug);
                            setProjectsDropdownOpen(false);
                          }}
                          className="w-full text-left p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 group cursor-pointer border border-transparent hover:border-slate-100"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-mono font-bold text-sky-600 uppercase tracking-wider">
                              0{idx + 1} // {project.code}
                            </span>
                            <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                               <ArrowRight className="w-3 h-3 text-sky-600" />
                            </div>
                          </div>
                          <h4 className="font-sans text-[13px] font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-tight">
                            {project.title}
                          </h4>
                          <p className="text-[12px] text-slate-500 line-clamp-1 mt-1 font-normal leading-relaxed">
                            {project.shortDesc}
                          </p>
                        </button>
                      ))}
                    </div>

                    <div className="mt-2 p-2 bg-slate-50 rounded-xl">
                      <button
                        type="button"
                        onClick={() => {
                          onSelectTab('projects');
                          setProjectsDropdownOpen(false);
                        }}
                        className="w-full text-center py-2 text-[12px] font-mono font-bold text-slate-700 hover:text-sky-600 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>View All Projects Overview</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`group relative px-3 py-2 text-[13px] tracking-[0.05em] uppercase font-sans transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? 'text-slate-900 font-bold'
                    : 'text-slate-500 font-medium hover:text-slate-900'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-3 right-3 h-[2px] bg-sky-600 transition-all duration-300 origin-center ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-40'}`} />
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center z-[60]">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2.5 rounded-full transition-colors duration-300 ${mobileOpen ? 'bg-slate-100 text-slate-900' : 'bg-transparent text-slate-700 hover:bg-slate-50'}`}
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div 
        className={`md:hidden fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[55] transition-opacity duration-500 ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer Content */}
      <div className={`md:hidden fixed top-0 right-0 h-[100dvh] w-[85%] max-w-[360px] bg-white z-[55] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] flex flex-col ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="flex-1 overflow-y-auto px-6 pt-24 pb-10 flex flex-col gap-6">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;

              if (item.hasDropdown) {
                return (
                  <div key={item.id} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setMobileProjectsExpanded(!mobileProjectsExpanded)}
                      className={`w-full text-left py-4 text-xl font-sans tracking-tight flex items-center justify-between transition-colors ${
                        isActive ? 'font-black text-sky-600' : 'font-medium text-slate-800'
                      }`}
                    >
                      <span>{item.label}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${mobileProjectsExpanded ? 'bg-sky-50' : 'bg-slate-50'}`}>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileProjectsExpanded ? 'rotate-180 text-sky-600' : 'text-slate-400'}`} />
                      </div>
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileProjectsExpanded ? 'max-h-[800px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-4 border-l-2 border-slate-100 space-y-2 py-2">
                        <button
                          type="button"
                          onClick={() => {
                            onSelectTab('projects');
                            setMobileOpen(false);
                          }}
                          className="w-full text-left py-2 text-[12px] font-mono font-bold text-sky-600 flex items-center gap-2"
                        >
                          All Projects Overview <ArrowRight className="w-3 h-3" />
                        </button>

                        {projectSublinks.map((sublink) => (
                          <button
                            key={sublink.slug}
                            type="button"
                            onClick={() => {
                              onSelectTab('projects', sublink.slug);
                              setMobileOpen(false);
                            }}
                            className="w-full text-left py-2.5 text-[15px] font-medium text-slate-600 hover:text-sky-600 transition-colors leading-snug block"
                          >
                            {sublink.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    setMobileOpen(false);
                  }}
                  className={`w-full text-left py-4 text-xl font-sans tracking-tight transition-colors border-b border-slate-50 last:border-0 ${
                    isActive ? 'font-black text-sky-600' : 'font-medium text-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Footer area */}
        <div className="p-6 bg-slate-50 mt-auto border-t border-slate-100">
          <div className="space-y-4">
             <button
                type="button"
                onClick={() => {
                  onSelectTab('publications');
                  setMobileOpen(false);
                }}
                className="w-full py-3.5 px-4 bg-sky-600 text-white text-[12px] font-mono font-bold uppercase tracking-wider rounded-xl shadow-md hover:bg-sky-700 transition-colors flex justify-between items-center"
              >
                <span>Access Publications</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              
              <div className="flex flex-col gap-1 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Contact</span>
                <a href="mailto:info@wafers.org" className="text-[14px] font-medium text-slate-800">info@wafers.org</a>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};
