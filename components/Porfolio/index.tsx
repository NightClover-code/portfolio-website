//importing utils
import imageSources from '../../utils';
//importing components
import ProjectCard from './ProjectCard';
//portfolio
const Porfolio = () => {
  return (
    <section className="portfolio__section">
      <div className="portfolio__head">
        <h1>
          My latest <span>Work</span>
        </h1>
        <p>Some of my latest and greatest projects</p>
      </div>
      <div className="projects__grid">
        {imageSources.map(source => (
          <ProjectCard imgSource={`/images/portfolio/${source}`} />
        ))}
      </div>
    </section>
  );
};

export default Porfolio;
