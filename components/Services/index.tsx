//importing random id's
import { v4 as uuidv4 } from 'uuid';
//importing utils
import { servicesInfo } from '../../utils';
//importing components
import ServiceCard from './ServiceCard';
//services
const Services = () => {
  return (
    <section className="services__section">
      <div className="services__head">
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
      <div className="services__grid">
        <div className="container">
          {servicesInfo.map(service => (
            <ServiceCard
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

export default Services;
