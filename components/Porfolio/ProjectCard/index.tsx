//importing next utils
import Image from 'next/image';
//props interface
interface ProjectCardProps {
  imgSource: string;
  alt: string;
  objectPosition: string;
}
//project card
const ProjectCard: React.FC<ProjectCardProps> = ({
  imgSource,
  alt,
  objectPosition,
}) => {
  return (
    <div className="project__card">
      <Image
        className="portject__preview"
        src={imgSource}
        alt={`${alt}-project-preview`}
        width={250}
        height={250}
        objectFit="cover"
        quality={85}
        objectPosition={objectPosition}
      />
    </div>
  );
};

export default ProjectCard;
