import { useRef } from 'react';
import { X } from 'lucide-react';

const CertificateCard = ({ certificate }) => {
  const dialogRef = useRef(null);

  const closeDialog = () => dialogRef.current?.close();

  const handleDialogKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeDialog();
    }
  };

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50">
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="group block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-amber-300"
        aria-label={`View certificate: ${certificate.title}`}
      >
        <img
          src={certificate.image}
          alt={certificate.alt}
          className="aspect-[4/3] w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <span className="block p-5">
          <span className="block font-semibold text-white">{certificate.title}</span>
          <span className="mt-2 block text-sm text-amber-200">{certificate.organization}</span>
          <span className="mt-1 block text-xs text-slate-400">{certificate.date}</span>
          <span className="mt-4 block text-xs text-slate-500">Select to view certificate</span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={certificate.title}
        onKeyDown={handleDialogKeyDown}
        className="max-h-[92dvh] max-w-[min(96vw,1100px)] overflow-visible bg-transparent p-0 text-slate-100 backdrop:bg-slate-950/90"
      >
        <div className="relative rounded-2xl border border-slate-700 bg-slate-950 p-3 shadow-2xl sm:p-5">
          <button
            type="button"
            onClick={closeDialog}
            className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 bg-slate-900 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
            aria-label="Close certificate preview"
          >
            <X size={18} aria-hidden="true" />
          </button>
          <img
            src={certificate.image}
            alt={certificate.alt}
            className="max-h-[82dvh] max-w-[90vw] rounded-lg object-contain"
          />
          <p className="mt-3 text-center text-sm text-slate-300">{certificate.title}</p>
        </div>
      </dialog>
    </article>
  );
};

export default CertificateCard;
