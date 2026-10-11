import { ArrowRight, BriefcaseBusiness, CodeXml, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { education, profile } from '../data/resume';

const Home = () => (
  <PageLayout
    eyebrow="Portfolio"
    title={profile.name}
    description={profile.role}
  >
    <div className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(15rem,0.8fr)]">
      <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
        <h2 className="text-lg font-semibold text-white">Professional Summary</h2>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Full Stack Developer with hands-on training in full-stack development and Python.
          My training included building, debugging, and deploying web applications. Academic
          coordination and teaching work have strengthened my communication, teamwork,
          adaptability, problem-solving, and leadership skills.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-400/10 px-5 py-2.5 text-sm font-medium text-amber-200 transition hover:bg-amber-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            View Projects <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            Contact
          </Link>
        </div>
        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-400">
          <a className="inline-flex items-center gap-2 transition hover:text-amber-200" href={profile.github} target="_blank" rel="noreferrer">
            <CodeXml size={16} aria-hidden="true" /> GitHub
          </a>
          <a className="inline-flex items-center gap-2 transition hover:text-amber-200" href={profile.linkedin} target="_blank" rel="noreferrer">
            <BriefcaseBusiness size={16} aria-hidden="true" /> LinkedIn
          </a>
          <a className="inline-flex items-center gap-2 transition hover:text-amber-200" href={`mailto:${profile.email}`}>
            <Mail size={16} aria-hidden="true" /> Email
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} aria-hidden="true" /> {profile.location}
          </span>
        </div>
      </section>

      <aside className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
        <h2 className="text-lg font-semibold text-white">Education</h2>
        <div className="mt-4 space-y-5">
          {education.map((item) => (
            <div key={item.qualification}>
              <h3 className="text-sm font-medium text-slate-100">{item.qualification}</h3>
              <p className="mt-1 text-sm text-slate-400">{item.institution}</p>
              <p className="mt-1 text-xs text-slate-500">{item.period}</p>
            </div>
          ))}
        </div>
        <Link
          to="/education"
          className="mt-6 inline-flex text-sm font-medium text-amber-200 transition hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
        >
          More about education <ArrowRight size={15} className="ml-2" aria-hidden="true" />
        </Link>
      </aside>
    </div>
  </PageLayout>
);

export default Home;
