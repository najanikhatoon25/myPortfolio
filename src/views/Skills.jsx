import PageLayout from '../components/PageLayout';
import { skillGroups } from '../data/resume';

const Skills = () => (
  <PageLayout
    eyebrow="Skills"
    title="Tools and skills I work with."
    description="Grouped from the skills listed in my resume."
  >
    <div className="grid min-w-0 gap-5 md:grid-cols-2">
      {skillGroups.map(({ name, skills }) => (
        <section key={name} className="min-w-0 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 max-[320px]:p-4">
          <h2 className="text-lg font-semibold text-white">{name}</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill} className="max-w-full break-words rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-300">
                {skill}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </PageLayout>
);

export default Skills;
