import PageLayout from '../components/PageLayout';
import CertificateCard from '../components/CertificateCard';
import { certificates, experiences } from '../data/resume';

const Experience = () => (
  <PageLayout
    eyebrow="Experience"
    title="Work and facilitation experience."
    description="Roles and responsibilities as listed in my resume."
  >
    <div className="space-y-5">
      {experiences.map((experience) => (
        <article key={`${experience.role}-${experience.organization}`} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-7">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">{experience.role}</h2>
              <p className="mt-1 text-amber-200">{experience.organization}</p>
            </div>
            <div className="text-sm text-slate-400 md:text-right">
              <p>{experience.period}</p>
              <p className="mt-1">{experience.location}</p>
            </div>
          </div>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-300 marker:text-amber-300">
            {experience.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>

    <section aria-labelledby="certificates-title" className="mt-14">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
          Recognition
        </p>
        <h2 id="certificates-title" className="mt-2 text-2xl font-semibold text-white">
          Certificates
        </h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.title} certificate={certificate} />
        ))}
      </div>
    </section>
  </PageLayout>
);

export default Experience;
