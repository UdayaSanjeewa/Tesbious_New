import ProjectCard from "./ProjectCard";

interface ProjectItem {
  id: string;
  title: string;
  year: string;
  imageUrl: string;
}

const projects: ProjectItem[] = [
  {
    id: "hikka-villa",
    title: "Hikka Villa.",
    year: "/2025",
    imageUrl: "/projects/hikkaVilla.jpg",
  },
  {
    id: "core-forge",
    title: "Core Forge",
    year: "/2025",
    imageUrl: "/projects/coreforge.jpg",
  },
  {
    id: "palm-sort",
    title: "Palm Sort.",
    year: "/2024",
    imageUrl: "/projects/palmsort.jpg",
  },
  {
    id: "minvens",
    title: "Minvens.",
    year: "/2025",
    imageUrl: "/projects/Minvens.jpg",
  },
];

const ProjectGrid = () => {
  return (
    <section className="w-full py-20">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
