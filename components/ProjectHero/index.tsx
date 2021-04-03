//importing hooks & context
import { useContext } from 'react';
import { NavContext } from '../../context';
//impoting aos animations & jump
import 'aos/dist/aos.css';
//importing components
import Button from '../Button';
//hero
const ProjectHero = () => {
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
            <h1 data-aos="fade-up">Chat App Website</h1>
            <p data-aos="fade-up" data-aos-delay="400">
              I design and build beautiful websites for businesses around the
              globe. If you need a modern and powerful website, send me an
              email. If we are a good fit, I will give you a time and cost
              estimate.
            </p>
            <div className="flex__buttons">
              <Button
                dataAos="fade-up"
                animationDelay="600"
                className="primary__btn__container"
              >
                visit code
              </Button>
              <Button
                dataAos="fade-up"
                animationDelay="600"
                className="secondary__btn__container"
              >
                visit live site
              </Button>
            </div>
          </div>
          <div
            className="illustration__container"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            <img src="/images/portfolio/newsly.png" alt="bookmark" />
            <div className="hero__dots"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
