//importing random id's & animations
import { v4 as uuidv4 } from 'uuid';
import 'aos/dist/aos.css';
//importing components
import ProjectCard from './ProjectCard';
//importing types
import { Image } from '../../interfaces';
//portfolio props
interface PortfolioProps {
  images: Image[];
}
//portfolio
const Porfolio: React.FC<PortfolioProps> = ({ images }) => {
  return (
    <section className="portfolio__section">
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
          {images.map(image => (
            <ProjectCard
              key={uuidv4()}
              imgSource={image.imgSource.url}
              alt={image.alt}
              objectPosition={image.objectPosition}
              animationDelay={image.animationDelay}
              id={image.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Porfolio;
