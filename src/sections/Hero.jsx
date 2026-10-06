import { ArrowRight, BriefcaseBusiness, Globe2, Mail, MapPin } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
  return (
    <header className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_40%),radial-gradient(circle_at_right,_rgba(168,85,247,0.18),_transparent_35%)]" />

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
            N
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">Najani</p>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#experience" className="transition hover:text-white">Experience</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>

        <Button href="#contact" variant="secondary" className="hidden md:inline-flex">
          Let&apos;s Talk
        </Button>
      </nav>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-12 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:pb-24 md:pt-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Available for product and frontend roles
          </div>

          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Building thoughtful digital experiences for people and products.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
            I&apos;m Najani, a frontend developer focused on clean interfaces, performance, and
            product thinking. I design and build polished user experiences that feel simple,
            accessible, and memorable.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#projects" className="gap-2 px-6 py-3">
              View Projects
              <ArrowRight size={16} />
            </Button>
            <Button href="#contact" variant="secondary" className="gap-2 px-6 py-3">
              <Mail size={16} />
              Contact Me
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-cyan-300" />
              Based in India
            </div>
            <a href="https://github.com" className="flex items-center gap-2 transition hover:text-white">
              <Globe2 size={16} className="text-cyan-300" />
              Portfolio
            </a>
            <a href="https://linkedin.com" className="flex items-center gap-2 transition hover:text-white">
              <BriefcaseBusiness size={16} className="text-cyan-300" />
              Experience
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.8)] backdrop-blur-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Profile</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Frontend Engineer</h2>
              </div>
              <div className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                Open to work
              </div>
            </div>

            <div className="space-y-5">
              {[
                ['UI Architecture', 'React, Vite, Design systems'],
                ['Development', 'Responsive, accessible, performance-first'],
                ['Focus', 'Thoughtful interfaces with measurable impact'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
                  <p className="mt-2 text-base text-slate-200">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
