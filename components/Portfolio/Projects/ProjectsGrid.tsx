import ProjectCard from "./ProjectCard";

interface ProjectItem {
  id: string;
  title: string;
  year: string;
  imageUrl: string;
}

const projects: ProjectItem[] = [
  {
    id: "1",
    title: "Christina Marks.",
    year: "/2025",
    imageUrl: "/webdev.png",
  },
  {
    id: "2",
    title: "Ceylon Sapphire.",
    year: "/2025",
    imageUrl: "/webdev.png",
  },
  {
    id: "3",
    title: "Neon Horizon.",
    year: "/2024",
    imageUrl: "/webdev.png",
  },
    {
    id: "4",
    title: "Christina Marks.",
    year: "/2025",
    imageUrl: "/webdev.png",
  },
  {
    id: "5",
    title: "Ceylon Sapphire.",
    year: "/2025",
    imageUrl: "/webdev.png",
  },
  {
    id: "6",
    title: "Neon Horizon.",
    year: "/2024",
    imageUrl: "/webdev.png",
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
