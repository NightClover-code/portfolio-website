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
        src={imgSource}
        alt="project-preview"
        width={'auto'}
        height={'auto'}
      />
    </div>
  );
};

export default ProjectCard;
