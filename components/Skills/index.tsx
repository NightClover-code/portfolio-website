//importing random id's & animations
import { v4 as uuidv4 } from 'uuid';
import 'aos/dist/aos.css';
//importing utils
import { skillsInfo } from '../../utils';
//importing components
import Skill from './SkillCard';
//skills
const Skills = () => {
  return (
    <section className="skills__section">
      <div className="skills__head">
        <h1 data-aos="fade-up">
          Technological {''}
          <span className="line__container">
            <span>Skills</span>
            <div className="line" data-aos="scale-animation"></div>
          </span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200">
          I always enjoy learning new things. Especially the technologies that
          make your website fast, modern and secure.
        </p>
      </div>
      <div className="skills__grid">
        <div className="container">
          {skillsInfo.map(skill => (
            <Skill
              key={uuidv4()}
              title={skill.title}
              logo={skill.logo}
              alt={skill.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
