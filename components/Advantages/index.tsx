//importing random id's & animations
import { v4 as uuidv4 } from 'uuid';
import 'aos/dist/aos.css';
//importing utils
import { advantagesInfo } from '../../utils';
//importing components
import AdvantagesCard from './AdvantagesCard';
//advantages
const Advantages = () => {
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
          {advantagesInfo.map(advantage => (
            <AdvantagesCard
              key={uuidv4()}
              title={advantage.title}
              src={advantage.src}
              description={advantage.description}
              alt={advantage.alt}
              animationDelay={advantage.animationDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
