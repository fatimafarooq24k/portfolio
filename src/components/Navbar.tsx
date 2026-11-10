import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '@/data/portfolio';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-ink text-white shadow-xl shadow-ink/20">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#top" onClick={closeMenu} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-300 font-mono text-sm font-medium text-ink">
              {profile.initials}
            </span>
            <span className="text-sm font-medium">{profile.name}</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`rounded-full px-4 py-2 text-sm transition duration-300 hover:bg-white/10 hover:text-brand-300 ${
                  activeId === id ? 'bg-white/10 text-brand-300' : 'text-white/80'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/10 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          className={`grid transition-all duration-300 ease-out md:hidden ${
            menuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <nav className="overflow-hidden">
            <div className="flex flex-col gap-1 px-4 pb-4">
              {sections.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={closeMenu}
                  className={`rounded-2xl px-4 py-3 text-sm transition hover:bg-white/10 ${
                    activeId === id ? 'bg-white/10 text-brand-300' : 'text-white/80'
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand-300"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </header>
  );
}
