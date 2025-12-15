import PortfolioHeading from "@/components/Portfolio/PortfolioHeading";
import ProjectGrid from "@/components/Portfolio/Projects/ProjectsGrid";

export default function PortfolioPage() {
  return (
    <div className="m-5 lg:m-[100px]">
      <PortfolioHeading />
      <div className="lg:mt-[50px]">
        <ProjectGrid />
      </div>
    </div>
  );
}
