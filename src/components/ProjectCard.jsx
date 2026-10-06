import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const {
    number,
    title,
    category,
    description,
    technologies,
    highlights,
    repositoryUrl,
  } = project;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700">
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="text-sm font-medium tracking-[0.2em] text-cyan-300">{number}</span>
        <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
          {category}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-400">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span aria-hidden="true" className="text-cyan-300">·</span>
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs text-slate-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <a
        href={repositoryUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
      >
        View source
        <ExternalLink size={15} aria-hidden="true" />
      </a>
    </article>
  );
};

export default ProjectCard;
