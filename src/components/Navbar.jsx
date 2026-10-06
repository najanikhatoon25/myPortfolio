import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Button from './Button';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative mx-auto max-w-6xl px-6 py-6 md:px-8">
      <div className="flex items-center justify-between rounded-full border border-slate-800 bg-slate-950/60 px-4 py-3 shadow-lg shadow-slate-950/20 backdrop-blur-md md:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Go to top">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
            N
          </div>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
            Najani
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="#contact" variant="secondary">
            Let&apos;s Talk
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-200 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen ? (
        <div className="mt-3 rounded-2xl border border-slate-800 bg-slate-950/90 p-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm text-slate-200">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 transition hover:bg-slate-800"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button href="#contact" variant="secondary" className="mt-2 w-full">
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
