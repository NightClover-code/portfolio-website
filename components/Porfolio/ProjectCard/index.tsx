//impoting styles & animations
import 'aos/dist/aos.css';
//importing next utils
import Image from 'next/image';
import Link from 'next/link';
//props interface
interface ProjectCardProps {
  imgSource: string;
  alt: string;
  objectPosition: string;
  animationDelay: number;
  id: string;
}
//project card
const ProjectCard: React.FC<ProjectCardProps> = ({
  imgSource,
  alt,
  objectPosition,
  animationDelay,
  id,
}) => {
  return (
    <Link href={`/${id}`}>
      <div
        className="project__card "
        data-aos="fade-up"
        data-aos-delay={`${animationDelay > 0 ? animationDelay : ''}`}
      >
        <div className="overlay"></div>
        <Image
          src={imgSource}
          alt={`${alt}-preview`}
          layout="fill"
          objectFit="cover"
          quality={100}
          objectPosition={objectPosition}
        />
      </div>
    </Link>
  );
};

export default ProjectCard;
