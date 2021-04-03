//importing hooks & context
import { useState, useContext } from 'react';
import { NavContext } from '../../context';
//impoting aos animations & jump
import 'aos/dist/aos.css';
import jump from 'jump.js';
//importing components
import Button from '../Button';
//hero
const Hero = () => {
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
    <section className={`hero__section ${!isNavHidden ? 'reset__hero' : ''}`}>
      <div className="container">
        <div className="hero__content">
          <div className="text__content" data-aos="fade-up">
            <h1 data-aos="fade-up">
              Hi, I’m Achraf, {''}
              <span className="line__container">
                <span>Front End</span>
                <div className="line" data-aos="scale-animation-first"></div>
              </span>{' '}
              Web Developer and{' '}
              <span className="line__container">
                <span>Web Designer</span>
                <div className="line" data-aos="scale-animation-second"></div>
              </span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="400">
              I design and build beautiful websites for businesses around the
              globe. If you need a modern and powerful website, send me an
              email. If we are a good fit, I will give you a time and cost
              estimate.
            </p>
            <Button
              dataAos="fade-up"
              animationDelay="600"
              onClick={onClickHandler}
              loading={loading}
            >
              see my work
            </Button>
          </div>
          <div
            className="illustration__container"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            <div className="hero__avatar"></div>
            <div className="hero__dots"></div>
          </div>
        </div>
      </div>
      <div className="scroll__block">
        <div className="scroll__arrow"></div>
        <div className="scroll__text">scroll</div>
      </div>
    </section>
  );
};

export default Hero;
