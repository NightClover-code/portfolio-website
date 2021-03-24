import Image from 'next/image';
//hero
const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="text__content">
          <h1>Hi, I’m Achraf, Front End Web Developer and Web Designer</h1>
          <p>
            I design and build beautiful websites for businesses around the
            globe. If you need a modern and powerful website, send me an email.
            If we are a good fit, I will give you a time and cost estimate.
          </p>
          <div className="primary__btn__container">
            <button className="primary__btn">see my work</button>
            <div className="ghost__button"></div>
          </div>
        </div>
        <div className="illustration__container">
          <div className="hero__avatar"></div>
          <div className="hero__dots"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
