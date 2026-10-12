import { ArrowDownToLine, ArrowRight, BriefcaseBusiness, CodeXml, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { education, experiences, profile } from '../data/resume';

const Home = () => (
  <main className="relative isolate overflow-hidden">
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(ellipse_at_20%_0%,rgba(245,158,11,0.14),transparent_55%),radial-gradient(ellipse_at_85%_30%,rgba(217,119,6,0.09),transparent_45%)]" />
    <div className="mx-auto w-full max-w-5xl px-6 py-14 sm:py-20 md:px-8 md:py-24 max-[320px]:px-3 max-[320px]:py-9">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.7fr)] lg:gap-14">
        <section>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
            Full Stack Developer
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl max-[320px]:text-3xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            I build web applications and enjoy turning ideas into useful digital experiences.
            My training covered full-stack development and Python, while my work in education
            has strengthened my communication, teamwork, adaptability, and leadership.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              disabled
              title="Upload your resume PDF to enable the download."
              aria-describedby="resume-download-note"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-amber-400/50 bg-amber-400/10 px-5 py-3 text-sm font-medium text-amber-100 opacity-70"
            >
              <ArrowDownToLine size={16} aria-hidden="true" />
              Download Resume
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              Get in touch <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <p id="resume-download-note" className="mt-2 text-xs text-slate-500">
            Resume download will be available when the PDF is added.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-400 max-[200px]:flex-col max-[200px]:items-start">
            <a className="inline-flex min-h-11 items-center gap-2 transition hover:text-amber-200" href={profile.github} target="_blank" rel="noreferrer">
              <CodeXml size={16} aria-hidden="true" /> GitHub
            </a>
            <a className="inline-flex min-h-11 items-center gap-2 transition hover:text-amber-200" href={profile.linkedin} target="_blank" rel="noreferrer">
              <BriefcaseBusiness size={16} aria-hidden="true" /> LinkedIn
            </a>
            <a className="inline-flex min-h-11 items-center gap-2 transition hover:text-amber-200" href={`mailto:${profile.email}`}>
              <Mail size={16} aria-hidden="true" /> Email
            </a>
            <span className="inline-flex min-h-11 items-center gap-2">
              <MapPin size={16} aria-hidden="true" /> {profile.location}
            </span>
          </div>
        </section>

        <aside className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            At a glance
          </p>
          <div className="mt-5 space-y-5">
            <div className="border-l-2 border-amber-400/70 pl-4">
              <p className="text-sm text-slate-400">Current role</p>
              <h2 className="mt-1 font-medium text-white">{experiences[0].role}</h2>
              <p className="mt-1 text-sm text-slate-400">{experiences[0].organization}</p>
            </div>
            <div className="border-l-2 border-slate-700 pl-4">
              <p className="text-sm text-slate-400">Software development</p>
              <h2 className="mt-1 font-medium text-white">{education[0].qualification}</h2>
              <p className="mt-1 text-sm text-slate-400">{education[0].institution}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="rounded-xl bg-slate-950/70 p-4">
                <p className="text-2xl font-semibold text-amber-200">40+</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">students supported</p>
              </div>
              <div className="rounded-xl bg-slate-950/70 p-4">
                <p className="text-2xl font-semibold text-amber-200">30+</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">English sessions</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>
);

export default Home;
