//importing aos animations
import 'aos/dist/aos.css';
//importing next utils
import Image from 'next/image';
//importing types
import { ServicesDataInterface } from '../../../interfaces';
//importing components
import Button from '../../Button';
//props interface
interface ServiceCardProps {
  currentData: ServicesDataInterface;
}
//service card
const ServiceCard: React.FC<ServiceCardProps> = ({ currentData }) => {
  return (
    <div className="service__card">
      <div className="container">
        <div
          className="service__illustration"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <Image
            src={`/images/services/${currentData.src}`}
            alt={currentData.alt}
            layout="fill"
            quality={100}
            objectFit="contain"
          />
        </div>
        <div className="service__content">
          <h2 data-aos="fade-up" data-aos-delay="800">
            {' '}
            {currentData.title}
          </h2>
          <p data-aos="fade-up" data-aos-delay="1000">
            {currentData.description}
          </p>
          <Button dataAos="fade-up" animationDelay="1200">
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
