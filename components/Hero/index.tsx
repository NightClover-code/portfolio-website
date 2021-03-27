//importing components
import Button from '../Button';
//hero
const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__content">
          <div className="text__content">
            <h1>
              Hi, I’m Achraf, {''}
              <span className="line__container">
                <span>Front End</span>
                <div className="front__end__line line"></div>
              </span>{' '}
              Web Developer and{' '}
              <span className="line__container">
                <span>Web Designer</span>
                <div className="web__designer__line line"></div>
              </span>
            </h1>
            <p>
              I design and build beautiful websites for businesses around the
              globe. If you need a modern and powerful website, send me an
              email. If we are a good fit, I will give you a time and cost
              estimate.
            </p>
            <Button>see my work</Button>
          </div>
          <div className="illustration__container">
            <div className="hero__avatar"></div>
            <div className="hero__dots"></div>
          </div>
        </div>
        <div className="scroll">scroll</div>
      </div>
    </section>
  );
};

export default Hero;
