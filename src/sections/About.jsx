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
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:px-8 max-[320px]:px-0">
      <SectionTitle
        as="h1"
        eyebrow="About Me"
        title="I'm Najani Khatoon, a Full Stack Developer."
        subtitle="I build user-friendly web applications, primarily with JavaScript. I have hands-on experience with HTML, Tailwind CSS, React, Node.js, Express.js, and MongoDB, including frontend work, REST APIs, and database integration, plus a basic understanding of Python. My work at NavGurukul strengthened my communication, teamwork, and leadership. I enjoy learning through practical projects and solving real-world problems."
      />

      <div className="grid min-w-0 gap-5 md:grid-cols-3">
        {strengths.map(({ title, description }) => (
          <article
            key={title}
            className="min-w-0 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 max-[320px]:p-4"
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
