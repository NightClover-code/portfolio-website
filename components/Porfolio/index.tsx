//importing random id's & animations
import { v4 as uuidv4 } from 'uuid';
import 'aos/dist/aos.css';
//importing utils
import { imagesInfo } from '../../utils';
//importing components
import ProjectCard from './ProjectCard';
//portfolio
const Porfolio = () => {
  return (
    <section className="portfolio__section">
      {/* <div className="dots__light__container"></div> */}
      {/* <div className="dots__dark__container"></div> */}
      <div className="portfolio__head">
        <h1 data-aos="fade-up">
          My latest <span>Work</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Some of my latest and greatest projects
        </p>
      </div>
      <div className="projects__grid">
        <div className="container">
          {imagesInfo.map(source => (
            <ProjectCard
              key={uuidv4()}
              imgSource={`/images/portfolio/${source.src}`}
              alt={source.alt}
              objectPosition={source.objectPosition}
              animationDelay={source.animationDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Porfolio;
