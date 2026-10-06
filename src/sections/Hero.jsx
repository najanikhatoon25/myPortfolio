import {
  ArrowRight,
  BriefcaseBusiness,
  CodeXml,
  Download,
  Mail,
  MapPin,
} from 'lucide-react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

const Hero = () => {
  return (
    <header id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_40%),radial-gradient(circle_at_right,_rgba(168,85,247,0.18),_transparent_35%)]" />

      <Navbar />

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Najani Khatoon
          </p>
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
            Full Stack Developer
          </p>

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Open to opportunities
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            I build web applications that solve real problems.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I enjoy turning ideas into simple, useful and scalable digital experiences using
            modern web technologies.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#projects" className="gap-2 px-6 py-3">
              View My Work
              <ArrowRight size={16} />
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="cursor-not-allowed gap-2 px-6 py-3 opacity-60"
              disabled
              title="Add your resume PDF to the project to enable this download."
            >
              <Download size={16} />
              Download Resume
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300">
            <a
              href="https://github.com/najanikhatoon25"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <CodeXml size={16} className="text-cyan-300" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/najnisaikh/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <BriefcaseBusiness size={16} className="text-cyan-300" />
              LinkedIn
            </a>
            <a
              href="mailto:najanikhatoon25@navgurukul.org"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Mail size={16} className="text-cyan-300" />
              Email
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-xs text-slate-500">
            <MapPin size={14} />
            Kishanganj, Bihar
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
