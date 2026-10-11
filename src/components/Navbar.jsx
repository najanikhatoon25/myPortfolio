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
    <nav className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 px-6 py-4 backdrop-blur-md md:px-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
        <NavLink to="/" className="flex shrink-0 items-center gap-3" aria-label="Home">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/50 bg-amber-400/10 text-sm font-semibold text-amber-200">
            NK
          </div>
          <span>
            <span className="block text-sm font-medium uppercase tracking-[0.14em] text-slate-300">
              Najani Khatoon
            </span>
            <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
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
          className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-200 lg:hidden"
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
