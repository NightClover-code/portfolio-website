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
    <div className="project__card ">
      <div className="overlay"></div>
      <Image
        className="project__preview"
        src={imgSource}
        alt={`${alt}-project-preview`}
        layout="fill"
        objectFit="cover"
        quality={100}
        objectPosition={objectPosition}
      />
    </div>
  );
};

export default ProjectCard;
