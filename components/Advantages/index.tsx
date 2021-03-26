//importing random id's
import { v4 as uuidv4 } from 'uuid';
//importing utils
import { advantagesInfo } from '../../utils';
//importing components
import AdvantagesCard from './AdvantagesCard';
//advantages
const Advantages = () => {
  return (
    <section className="advantages__section">
      <div className="advantages__head">
        <h1>
          Why{' '}
          <span className="line__container">
            <span>Work</span>
            <div className="front__end__line line"></div>
          </span>{' '}
          with Me?
        </h1>
        <p>There are many advantages to working with me. Here are a few:</p>
      </div>
      <div className="advantages__grid">
        <div className="container">
          {advantagesInfo.map(service => (
            <AdvantagesCard
              key={uuidv4()}
              title={service.title}
              src={service.src}
              description={service.description}
              alt={service.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
