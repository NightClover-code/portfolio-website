//importing random id's & animations
import { v4 as uuidv4 } from 'uuid';
import 'aos/dist/aos.css';
//importing types
import { ProjectType } from '../../interfaces';
//importing components
import Skill from '../Skills/SkillCard';
//props interface
interface ProjectSkillsProps {
  project: ProjectType;
}
//project skills
const ProjectSkills: React.FC<ProjectSkillsProps> = ({ project }) => {
  return (
    <section className="project__skills__section">
      <div className="project__skills__head">
        <h1 data-aos="fade-up">
          <span>Technologies</span> Used
        </h1>
        <p data-aos="fade-up" data-aos-delay="200">
          This project uses some of the latest and modern web technologies. Here
          are the most prominent ones:
        </p>
      </div>
      <div
        className="project__skills__grid"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="container">
          {project.skill.map(skill => (
            <Skill
              key={uuidv4()}
              title={skill.title}
              normalLogo={skill.normalLogo && skill.normalLogo.url}
              invertedLogo={skill.invertedLogo && skill.invertedLogo.url}
              alt={skill.title}
              span={skill.span}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSkills;
