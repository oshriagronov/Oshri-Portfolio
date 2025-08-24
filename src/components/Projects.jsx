import ProjectsCard from "./ProjectsCard";
import useFetchProjects from "./fetchProjects";

const Projects = () => {
  // Fetch projects data and loading state using custom hook
  const { isLoading, projects } = useFetchProjects();
  // Show loading indicator while data is being fetched
  if (isLoading) return <div className="loading"></div>;
  // Render the projects section with a title and a list of project cards
  return (
    <section className="py-20 align-element" id="projects">
      {/* Section title */}
      <h2 className="text-3xl text-center title mb-12 md:mb-16">
        Some of my recent projects <span className="hidden md:inline-block">🔭</span>
      </h2>

      {/* Dynamically render each project using the ProjectsCard component */}
      <div className="flex flex-col gap-16 md:gap-24">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
