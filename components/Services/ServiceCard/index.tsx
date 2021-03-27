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
        <div className="service__illustration">
          <Image
            src={`/images/services/${currentData.src}`}
            alt={currentData.alt}
            layout="fill"
            quality={100}
            objectFit="contain"
          />
        </div>
        <div className="service__content">
          <h2>{currentData.title}</h2>
          <p>{currentData.description}</p>
          <Button>More Info</Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
