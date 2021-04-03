//importing random id's & animations
import { v4 as uuidv4 } from 'uuid';
import 'aos/dist/aos.css';
//importing types
import { Project } from '../../interfaces';
//importing components
import Skill from '../Skills/SkillCard';
//props interface
interface ProjectSkillsProps {
  project: Project;
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
          I always enjoy learning new things. Especially the technologies that
          make your website fast, modern and secure.
        </p>
      </div>
      <div className="project__skills__grid">
        <div className="container">
          {project.skills.map(skill => (
            <Skill
              key={uuidv4()}
              title={skill.title}
              logo={skill.logo}
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
