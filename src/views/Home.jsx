import SectionTitle from '../components/SectionTitle';
import About from '../sections/About';
import Hero from '../sections/Hero';

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:px-8">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work that reflects both product thinking and craft."
          subtitle="This portfolio will soon highlight case studies, problem-solving, and the technologies behind each build."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            ['Project One', 'Product UI and experience design for a real-world use case.'],
            ['Project Two', 'Responsive dashboard and frontend architecture optimization.'],
            ['Project Three', 'A polished landing experience built for conversion and clarity.'],
          ].map(([title, description]) => (
            <article key={title} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/20">
              <div className="mb-5 h-40 rounded-2xl border border-slate-700 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(168,85,247,0.14),rgba(15,23,42,0.7))]" />
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-20 md:px-8">
        <SectionTitle
          eyebrow="Experience"
          title="Product-minded frontend work shaped by learning and iteration."
          subtitle="This section is being prepared as the foundation for the full portfolio story and resume highlights."
        />

        <div className="space-y-5">
          {[
            ['Frontend Developer', 'Building responsive interfaces with modern React patterns and reusable components.'],
            ['UI/UX Focus', 'Turning user problems into structured UI flows and accessible product decisions.'],
            ['Continuous Learning', 'Exploring performance improvements, design systems, and user-centered techniques.'],
          ].map(([role, detail]) => (
            <div key={role} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-lg font-medium text-white">{role}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:px-8">
        <div className="rounded-[2rem] border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-violet-500/10 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Let&apos;s build something meaningful together.
              </h2>
            </div>

            <a
              href="mailto:najanikhatoon25@navgurukul.org"
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/20"
            >
              najanikhatoon25@navgurukul.org
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
