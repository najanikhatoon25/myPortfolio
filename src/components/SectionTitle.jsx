const SectionTitle = ({ as: Heading = 'h2', eyebrow, title, subtitle }) => {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
        {eyebrow}
      </p>
      <Heading className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </Heading>
      {subtitle ? <p className="mt-4 text-base text-slate-300">{subtitle}</p> : null}
    </div>
  );
};

export default SectionTitle;
