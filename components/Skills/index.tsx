//importing utils
import { skillsInfo } from '../../utils';
//importing components
import Skill from './SkillCard';
//skills
const Skills = () => {
  return (
    <section className="skills__section">
      <div className="skills__head">
        <h1>
          Technological {''}
          <span className="line__container">
            <span>Skills</span>
            <div className="line"></div>
          </span>
        </h1>
        <p>
          I always enjoy learning new things. Especially the technologies that
          make your website fast, modern and secure.
        </p>
      </div>
      <div className="skills__grid">
        {skillsInfo.map(skill => (
          <Skill title={skill.title} logo={skill.logo} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
