//importing hooks & context
import { useContext } from 'react';
import { NavContext } from '../../context';
//importing types
import { Project } from '../../interfaces';
//importing utils
import Image from 'next/image';
//impoting aos animations & jump
import 'aos/dist/aos.css';
//importing components
import Button from '../Button';
//props interface
interface ProjectHeroProps {
  project: Project;
}
//hero
const ProjectHero: React.FC<ProjectHeroProps> = ({ project }) => {
  //context api state
  const { isNavHidden } = useContext(NavContext);
  return (
    <section
      className={`project__section ${!isNavHidden ? 'reset__hero' : ''}`}
    >
      <div className="container">
        <div className="project__content">
          <div className="text__content" data-aos="fade-up">
            <h2>Project Showcase</h2>
            <h1 data-aos="fade-up">{project.title}</h1>
            <p data-aos="fade-up" data-aos-delay="400">
              {project.description}
            </p>
            <div className="flex__buttons">
              <a
                href={`https://github.com/NightClover-code/${project.github}`}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  dataAos="fade-up"
                  animationDelay="600"
                  className="primary__btn__container"
                >
                  visit code
                </Button>
              </a>
              {project.website && (
                <a href={project.website} target="_blank" rel="noreferrer">
                  <Button
                    dataAos="fade-up"
                    animationDelay="600"
                    className="secondary__btn__container"
                  >
                    visit live site
                  </Button>
                </a>
              )}
            </div>
          </div>
          <div
            className="illustration__container"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            <div className="hero__project">
              <Image
                layout="fill"
                src={project.image.url}
                // alt={project.image.alt}
                objectFit="cover"
                // objectPosition={
                //   project.image.objectPosition
                //     ? project.image.objectPosition
                //     : '0% 0%'
                // }
              />
            </div>
            <div className="hero__dots"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
