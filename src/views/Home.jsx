import { ArrowDownToLine, ArrowRight, BriefcaseBusiness, CodeXml, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { education, profile } from '../data/resume';

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
            I build web applications using JavaScript and modern web technologies. I enjoy
            turning ideas into practical, user-friendly digital experiences. With hands-on
            experience in frontend and backend development, I focus on solving problems,
            learning continuously, and building useful solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-400/10 px-5 py-3 text-sm font-medium text-amber-100 transition hover:bg-amber-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              <ArrowDownToLine size={16} aria-hidden="true" />
              View / Download Resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              Get in touch <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
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
            Education
          </p>
          <div className="mt-5 space-y-5">
            {education.map((item) => (
              <div key={item.qualification} className="border-l-2 border-amber-400/70 pl-4">
                <h2 className="font-medium text-white">{item.qualification}</h2>
                <p className="mt-1 text-sm text-slate-400">{item.institution}</p>
                <p className="mt-1 text-xs text-slate-500">{item.period}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  </main>
);

export default Home;
