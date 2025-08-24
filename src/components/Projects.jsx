import ProjectsCard from "./ProjectsCard";
import useFetchProjects from "./fetchProjects";
const Projects = () => {
  const { isLoading, projects } = useFetchProjects();
  if (isLoading) return <div className="loading"></div>;
  return (
    <section className="py-20 align-element" id="projects">
      <h2 className="text-3xl text-center title mb-12 md:mb-16">
      Some of my recent projects <span className="hidden md:inline-block">🔭</span>
      </h2>
      <div className="flex flex-col gap-16 md:gap-24">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
