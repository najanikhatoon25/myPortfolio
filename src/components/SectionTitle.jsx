const SectionTitle = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base text-slate-300">{subtitle}</p> : null}
    </div>
  );
};

export default SectionTitle;
