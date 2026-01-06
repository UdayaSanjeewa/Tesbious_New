import Image from "next/image";
import Link from "next/link";

interface ProjectItem {
  id: string;
  title: string;
  year: string;
  imageUrl: string;
}

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.id}`}
      className="flex flex-col gap-1 lg:gap-2 w-full group cursor-pointer"
    >
      <div className="flex items-center justify-between bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-baseline gap-1">
          <h3 className="text-lg font-manrope font-semibold text-black tracking-tight">
            {project.title}
          </h3>
          <span className="text-xs font-manrope font-semibold text-[#7316ff]">
            {project.year}
          </span>
        </div>

        <button className="text-gray-400 group-hover:text-[#7316ff] transition-colors">
          <svg
            width="20"
            height="6"
            viewBox="0 0 20 6"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3" cy="3" r="3" />
            <circle cx="10" cy="3" r="3" />
            <circle cx="17" cy="3" r="3" />
          </svg>
        </button>
      </div>

      <div className="relative  w-full aspect-[4/3] overflow-hidden rounded-3xl">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-xs"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
    </Link>
  );
}
