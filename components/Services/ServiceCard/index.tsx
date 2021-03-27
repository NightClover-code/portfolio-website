//importing utils
import { servicesInfo } from '../../../utils';
//importing next utils
import Image from 'next/image';
//service card
const ServiceCard = () => {
  return (
    <div className="service__card">
      {/* <div className="service__illustration">
        <Image
          src={`/images/services/${servicesInfo[0].src}`}
          alt={servicesInfo[0].alt}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div> */}
      <div className="service__content">
        <h2>{servicesInfo[0].title}</h2>
        <p>{servicesInfo[0].description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
