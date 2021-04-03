//importing hooks & context
import { useState, useContext } from 'react';
import { NavContext } from '../../context';
//impoting aos animations & jump
import 'aos/dist/aos.css';
import jump from 'jump.js';
//importing components
import Button from '../Button';
//hero
const ProjectHero = () => {
  //local state
  const [loading, setLoading] = useState(false);
  //context api state
  const { isNavHidden } = useContext(NavContext);
  //on click handler
  const onClickHandler = () => {
    //preventing spam
    setTimeout(() => setLoading(true), 10);
    setTimeout(() => setLoading(false), 1000);
    //smooth scrolling
    jump('.portfolio__section', {
      offset: -140,
      duration: 1000,
    });
  };
  return (
    <section
      className={`project__section ${!isNavHidden ? 'reset__hero' : ''}`}
    >
      <div className="container">
        <div className="project__content">
          <div className="text__content" data-aos="fade-up">
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
                onClick={onClickHandler}
                loading={loading}
                className="primary__btn__container"
              >
                visit code
              </Button>
              <Button
                dataAos="fade-up"
                animationDelay="600"
                onClick={onClickHandler}
                loading={loading}
                className="secondary__btn__container"
              >
                visit live site
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
