import { useState, useEffect } from 'react';
import type { NavLinkId } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { WhoAreWe } from './pages/WhoAreWe';
import { Publications } from './pages/Publications';
import { Projects } from './pages/Projects';
import { FeaturedStories } from './pages/FeaturedStories';
import { KnowledgeTranslationCentre } from './pages/KnowledgeTranslationCentre';

export function App() {
  const [currentTab, setCurrentTab] = useState<NavLinkId>(() => {
    const rawHash = window.location.hash.replace('#', '');
    const tabPart = rawHash.split('/')[0] as NavLinkId;
    const validTabs: NavLinkId[] = ['home', 'who-are-we', 'publications', 'projects', 'featured-stories', 'knowledge-translation-centre'];
    return validTabs.includes(tabPart) ? tabPart : 'home';
  });

  const [activeProjectSlug, setActiveProjectSlug] = useState<string | null>(() => {
    const rawHash = window.location.hash.replace('#', '');
    const parts = rawHash.split('/');
    return parts[0] === 'projects' && parts[1] ? parts[1] : null;
  });

  const handleSelectTab = (tab: NavLinkId, projectSlug?: string) => {
    setCurrentTab(tab);
    if (tab === 'projects' && projectSlug) {
      setActiveProjectSlug(projectSlug);
      window.location.hash = `projects/${projectSlug}`;
    } else {
      setActiveProjectSlug(null);
      window.location.hash = tab;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '');
      const parts = rawHash.split('/');
      const tabPart = parts[0] as NavLinkId;
      const validTabs: NavLinkId[] = ['home', 'who-are-we', 'publications', 'projects', 'featured-stories', 'knowledge-translation-centre'];
      if (validTabs.includes(tabPart)) {
        setCurrentTab(tabPart);
        if (tabPart === 'projects' && parts[1]) {
          setActiveProjectSlug(parts[1]);
        } else {
          setActiveProjectSlug(null);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      {/* Editorial Navbar with Projects Sublinks Dropdown */}
      <Navbar currentTab={currentTab} onSelectTab={handleSelectTab} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentTab === 'home' && <Home onNavigate={handleSelectTab} />}
        {currentTab === 'who-are-we' && <WhoAreWe />}
        {currentTab === 'publications' && <Publications />}
        {currentTab === 'projects' && (
          <Projects
            activeProjectSlug={activeProjectSlug}
            onSelectProject={(slug) => handleSelectTab('projects', slug)}
          />
        )}
        {currentTab === 'featured-stories' && <FeaturedStories />}
        {currentTab === 'knowledge-translation-centre' && (
          <KnowledgeTranslationCentre onNavigate={handleSelectTab} />
        )}
      </main>

      {/* Institutional Colophon / Footer */}
      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}

export default App;
