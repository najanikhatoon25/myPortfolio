const CertificateCard = ({ certificate }) => {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
      <h3 className="font-semibold text-white">{certificate.title}</h3>
      <p className="mt-2 text-sm text-amber-200">{certificate.organization}</p>
      <p className="mt-1 text-xs text-slate-400">{certificate.date}</p>
      <div className="mt-3">
        <a
          href={certificate.image}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center text-sm font-medium text-amber-200 underline decoration-amber-400/40 underline-offset-4 transition hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
        >
          View certificate
        </a>
      </div>
    </article>
  );
};

export default CertificateCard;
