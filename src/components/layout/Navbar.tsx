import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { useActiveSection } from '../../hooks/useActiveSection';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-40 px-4 sm:px-6">
      <nav
        aria-label="Primary Navigation"
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-[#05070D]/80 backdrop-blur-xl border border-white/15 shadow-glass'
            : 'bg-[#101827]/55 backdrop-blur-lg border border-white/10'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-3 group"
          >
            <span className="h-9 w-9 rounded-lg border border-[#00E5FF]/35 bg-[#05070D]/80 flex items-center justify-center font-display font-bold text-sm text-[#F8FAFC] group-hover:border-[#00E5FF] transition-colors">
              {PROFILE.monogram}
            </span>
            <span className="font-display font-semibold tracking-[0.2em] text-sm text-[#F8FAFC]">
              {PROFILE.wordmark}
              <span className="text-[#00E5FF]">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#00E5FF] bg-[#00E5FF]/10'
                        : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={PROFILE.links.cvUrl}
              download
              className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-[#00E5FF]/40 bg-[#00E5FF]/10 px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#00E5FF] hover:bg-[#00E5FF]/20 hover:border-[#00E5FF] transition-all"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Download CV</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 text-[#F8FAFC] hover:bg-white/10"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div
            id="mobile-navigation-menu"
            className="lg:hidden border-t border-white/10 px-4 py-4 space-y-2 bg-[#05070D]/95 rounded-b-2xl"
          >
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#00E5FF]/10 text-[#00E5FF]'
                          : 'text-[#94A3B8] hover:bg-white/5 hover:text-[#F8FAFC]'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="pt-2 border-t border-white/10">
              <a
                href={PROFILE.links.cvUrl}
                download
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#00E5FF]/40 bg-[#00E5FF]/10 px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#00E5FF]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
