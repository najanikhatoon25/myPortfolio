import { Printer } from 'lucide-react';
import { education, experiences, profile, skillGroups } from '../data/resume';
import { projects } from '../data/projects';

const Resume = () => (
  <main className="resume-page mx-auto my-8 w-full max-w-4xl px-4 sm:px-8">
    <div className="resume-actions mb-5 flex flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-slate-400">
        Use Print, then select “Save as PDF” to download a copy.
      </p>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-amber-400/50 bg-amber-400/10 px-5 py-2.5 text-sm font-medium text-amber-100 transition hover:bg-amber-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
      >
        <Printer size={16} aria-hidden="true" />
        Print / Save as PDF
      </button>
    </div>

    <article className="resume-paper rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl sm:p-10">
      <header className="border-b border-slate-700 pb-6">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{profile.name}</h1>
        <p className="mt-2 text-lg font-medium text-amber-200">{profile.role}</p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-300">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          <a href={profile.github}>{profile.github.replace('https://', '')}</a>
          <a href={profile.linkedin}>{profile.linkedin.replace('https://www.', '')}</a>
          <span>{profile.location}</span>
        </div>
      </header>

      <section className="resume-section mt-7">
        <h2 className="resume-heading">Professional Summary</h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          I build web applications using JavaScript and modern web technologies. I enjoy
          turning ideas into practical, user-friendly digital experiences. With hands-on
          experience in frontend and backend development, I focus on solving problems,
          learning continuously, and building useful solutions.
        </p>
      </section>

      <section className="resume-section mt-7">
        <h2 className="resume-heading">Experience</h2>
        <div className="mt-3 space-y-5">
          {experiences.map((experience) => (
            <article key={experience.role}>
              <div className="flex flex-wrap justify-between gap-x-4">
                <h3 className="font-semibold text-white">
                  {experience.role} · {experience.organization}
                </h3>
                <span className="text-sm text-slate-400">{experience.period}</span>
              </div>
              <p className="text-sm text-slate-400">{experience.location}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-300">
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section mt-7">
        <h2 className="resume-heading">Projects</h2>
        <div className="mt-3 space-y-4">
          {projects.map((project) => (
            <article key={project.number}>
              <h3 className="font-semibold text-white">
                {project.title} · {project.technologies.join(', ')}
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-300">{project.description}</p>
              <a className="text-sm text-amber-200" href={project.repositoryUrl}>
                {project.repositoryUrl}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section mt-7">
        <h2 className="resume-heading">Education</h2>
        <div className="mt-3 space-y-4">
          {education.map((item) => (
            <article key={item.qualification}>
              <div className="flex flex-wrap justify-between gap-x-4">
                <h3 className="font-semibold text-white">
                  {item.qualification} · {item.institution}
                </h3>
                <span className="text-sm text-slate-400">{item.period}</span>
              </div>
              <p className="text-sm text-slate-400">{item.location}</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">{item.details.join(' ')}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section mt-7">
        <h2 className="resume-heading">Skills</h2>
        <dl className="mt-3 space-y-2">
          {skillGroups.map(({ name, skills }) => (
            <div key={name} className="text-sm leading-6">
              <dt className="inline font-semibold text-white">{name}: </dt>
              <dd className="inline text-slate-300">{skills.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  </main>
);

export default Resume;
