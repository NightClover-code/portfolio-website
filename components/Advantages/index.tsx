//importing utils
import { v4 as uuidv4 } from 'uuid';
import 'aos/dist/aos.css';
//importing components
import AdvantagesCard from './AdvantagesCard';
//importing types
import { AdvantageType } from '../../interfaces';
//props interface
interface AdvantagesProps {
  advantages: AdvantageType[];
}
//advantages
const Advantages: React.FC<AdvantagesProps> = ({ advantages }) => {
  return (
    <section className="advantages__section">
      <div className="advantages__head">
        <h1 data-aos="fade-up">
          Why{' '}
          <span className="line__container">
            <span>Work</span>
            <div className="line" data-aos="scale-animation"></div>
          </span>{' '}
          with Me?
        </h1>
        <p data-aos="fade-up" data-aos-delay="200">
          There are many advantages to working with me. Here are a few:
        </p>
      </div>
      <div className="advantages__grid">
        <div className="container">
          {advantages.map(_advantage => {
            //destructuring
            const {
              title,
              alt,
              description,
              image,
              animationDelay,
            } = _advantage;
            return (
              <AdvantagesCard
                key={uuidv4()}
                title={title}
                src={image.url}
                description={description}
                alt={alt}
                animationDelay={animationDelay}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
