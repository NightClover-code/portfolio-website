//importing next utils
import Image from 'next/image';
//props interface
interface ProjectCardProps {
  imgSource: string;
}
//project card
const ProjectCard: React.FC<ProjectCardProps> = ({ imgSource }) => {
  return (
    <div className="project__card">
      <Image
        className="portject__preview"
        src={imgSource}
        alt="project-preview"
        width={300}
        height={300}
        objectFit="cover"
        quality={80}
      />
    </div>
  );
};

export default ProjectCard;
