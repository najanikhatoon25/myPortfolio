import PageLayout from '../components/PageLayout';
import CertificateCard from '../components/CertificateCard';
import { certificates, experiences } from '../data/resume';

const englishFacilitatorCertificate = certificates.find((certificate) =>
  certificate.title.includes('English Facilitator'),
);
const nadiMitraCertificate = certificates.find((certificate) =>
  certificate.title.includes('Nadi Mitra'),
);

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
          {experience.role === 'English Facilitator' && englishFacilitatorCertificate ? (
            <div className="mt-6 border-t border-slate-800 pt-5">
              <h3 className="mb-4 text-sm font-medium text-slate-200">Certificate</h3>
              <div className="max-w-xl">
                <CertificateCard certificate={englishFacilitatorCertificate} />
              </div>
            </div>
          ) : null}
        </article>
      ))}
    </div>

    {nadiMitraCertificate ? (
      <article className="mt-8 rounded-2xl border border-amber-400/25 bg-slate-900/50 p-5 sm:p-7">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(15rem,0.8fr)] md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
              Community Participation
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">Nadi Mitra Yatra</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-300 marker:text-amber-300">
              <li>Participated in river-cleaning activities.</li>
              <li>Learned about environmental conservation and protecting natural resources.</li>
              <li>Experienced the value of community participation and collective efforts.</li>
            </ul>
          </div>
          <CertificateCard certificate={nadiMitraCertificate} />
        </div>
      </article>
    ) : null}
  </PageLayout>
);

export default Experience;
