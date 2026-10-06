import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:px-8">
      <SectionTitle
        eyebrow="Selected Work"
        title="Projects built to solve practical problems."
        subtitle="A selection of projects from my full-stack and frontend development work."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
