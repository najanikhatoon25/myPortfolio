import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { profile } from '../data/resume';
import Navbar from './Navbar';

const SiteLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />
      <Outlet />
      <footer className="border-t border-slate-800/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-7 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 {profile.name} · {profile.role}</p>
          <div className="flex gap-5">
            <a className="transition hover:text-amber-200" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="transition hover:text-amber-200" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="transition hover:text-amber-200" href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
