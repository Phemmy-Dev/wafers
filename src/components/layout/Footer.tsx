import React from 'react';
import type { NavLinkId } from '../../types';
import logoImg from '../../assets/images/logo.png';

interface FooterProps {
  onSelectTab: (tab: NavLinkId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Col 1: Institute Summary */}
          <div className="md:col-span-6 lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 inline-block">
                <img src={logoImg} alt="WAFERs Logo" className="h-10 w-auto object-contain" />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              We are a non-profit organization that specializes in research, training applied health research and related research. It is being administered by an international board of Advisors and Trustees.
            </p>
            <div className="pt-2 font-mono text-xs text-slate-500 space-y-1">
              <p>West African Institute for Applied Health Research</p>
            </div>
          </div>

          {/* Col 2: Navigation Directory */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-4 border-l-2 border-[#0066cc] pl-2">
              Directory
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onSelectTab('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('who-are-we')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Who We Are
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('publications')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Publications
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('projects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('featured-stories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Featured Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('knowledge-translation-centre')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Knowledge Translation Centre
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Phone */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-4 border-l-2 border-[#0066cc] pl-2">
              Get In Touch
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Contact us today and join our mission in advancing global health through innovative research.
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <span className="text-xs font-mono uppercase text-slate-500 block">Phone</span>
                <p className="font-mono text-xs text-white">08108166902, 08117104322, 07080355573</p>
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-slate-500 block">Email</span>
                <a href="mailto:info@wafers.org" className="text-xs font-mono text-sky-400 hover:underline">
                  info@wafers.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950/90 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} WAFERS RESEARCH INSTITUTE. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

