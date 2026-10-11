import PageLayout from '../components/PageLayout';
import { education } from '../data/resume';

const Education = () => (
  <PageLayout
    eyebrow="Education"
    title="Learning and education."
    description="Education and learning details taken from my resume."
  >
    <div className="space-y-5">
      {education.map((item) => (
        <article key={item.qualification} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-7">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">{item.qualification}</h2>
              <p className="mt-1 text-amber-200">{item.institution}</p>
            </div>
            <div className="text-sm text-slate-400 md:text-right">
              <p>{item.period}</p>
              <p className="mt-1">{item.location}</p>
            </div>
          </div>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-300 marker:text-amber-300">
            {item.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        </article>
      ))}
    </div>
  </PageLayout>
);

export default Education;
