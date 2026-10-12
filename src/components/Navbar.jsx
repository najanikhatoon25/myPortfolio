import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Education', to: '/education' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 px-6 py-4 backdrop-blur-md md:px-8 max-[320px]:px-2 max-[320px]:py-3">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 max-[320px]:gap-2 max-[240px]:gap-1">
        <NavLink to="/" className="flex shrink-0 items-center gap-3 max-[240px]:gap-1" aria-label="Home">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/50 bg-amber-400/10 text-sm font-semibold text-amber-200 max-[320px]:h-7 max-[320px]:w-7 max-[320px]:text-[10px]">
            NK
          </div>
          <span>
            <span className="block text-sm font-medium uppercase tracking-[0.14em] text-slate-300 max-[320px]:text-[10px] max-[320px]:tracking-normal max-[240px]:text-[9px]">
              Najani Khatoon
            </span>
            <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500 max-[320px]:hidden">
              Full Stack Developer
            </span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 text-sm lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 transition ${isActive ? 'bg-amber-400/10 text-amber-200' : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-200 lg:hidden max-[320px]:min-h-9 max-[320px]:min-w-9 max-[240px]:min-h-8 max-[240px]:min-w-8"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-navigation" className="mx-auto mt-4 max-w-5xl rounded-2xl border border-slate-800 bg-slate-950 p-3 lg:hidden">
          <div className="grid gap-1 text-sm text-slate-200 sm:grid-cols-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 transition ${isActive ? 'bg-amber-400/10 text-amber-200' : 'hover:bg-slate-800'}`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
