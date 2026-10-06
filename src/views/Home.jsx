import SectionTitle from '../components/SectionTitle';
import About from '../sections/About';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />

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
