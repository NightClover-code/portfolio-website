//importing random id's
import { v4 as uuidv4 } from 'uuid';
//importing utils
import { imagesInfo } from '../../utils';
//importing components
import ProjectCard from './ProjectCard';
//portfolio
const Porfolio = () => {
  return (
    <section className="portfolio__section">
      <div className="dots__light__container"></div>
      <div className="dots__dark__container"></div>
      <div className="portfolio__head">
        <h1>
          My latest <span>Work</span>
        </h1>
        <p>Some of my latest and greatest projects</p>
      </div>
      <div className="projects__grid">
        <div className="container">
          {imagesInfo.map(source => (
            <ProjectCard
              key={uuidv4()}
              imgSource={`/images/portfolio/${source.src}`}
              alt={source.alt}
              objectPosition={source.objectPosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Porfolio;
