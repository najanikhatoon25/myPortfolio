import SectionTitle from '../components/SectionTitle';

const strengths = [
  {
    title: 'Problem Solver',
    description:
      'I break challenges into manageable steps and work toward practical solutions.',
  },
  {
    title: 'Full Stack Development',
    description:
      'I have hands-on training building, debugging, and deploying web applications.',
  },
  {
    title: 'Continuous Learner',
    description:
      'I keep learning through collaborative projects and adapt to new challenges.',
  },
];

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:px-8">
      <SectionTitle
        eyebrow="About Me"
        title="A developer who values useful solutions and people."
        subtitle="I'm a Full Stack Developer with hands-on training in Python and web application development. I enjoy solving problems by building, debugging, and deploying applications. My experience supporting students as an Academic Coordinator has also strengthened my communication, teamwork, adaptability, and leadership."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {strengths.map(({ title, description }) => (
          <article
            key={title}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
