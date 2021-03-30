//impoting styles & animations
import 'aos/dist/aos.css';
//importing next utils
import Image from 'next/image';
//props interface
interface ProjectCardProps {
  imgSource: string;
  alt: string;
  objectPosition: string;
  animationDelay: number;
}
//project card
const ProjectCard: React.FC<ProjectCardProps> = ({
  imgSource,
  alt,
  objectPosition,
  animationDelay,
}) => {
  return (
    <div
      className="project__card "
      data-aos="fade-up"
      data-aos-delay={`${animationDelay > 0 ? animationDelay : ''}`}
    >
      <div className="overlay"></div>
      <Image
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
