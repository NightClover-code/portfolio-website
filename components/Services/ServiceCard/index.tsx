//importing aos animations & jump
import 'aos/dist/aos.css';
import jump from 'jump.js';
//importing next utils
import Image from 'next/image';
//importing types & hooks
import { useState } from 'react';
//importing components
import Button from '../../Button';
//props interface
interface ServiceCardProps {
  currentData: any;
}
//service card
const ServiceCard: React.FC<ServiceCardProps> = ({ currentData }) => {
  //local state
  const [loading, setLoading] = useState(false);
  //on click handler
  const onClickHandler = () => {
    //preventing spam
    setTimeout(() => setLoading(true), 10);
    setTimeout(() => setLoading(false), 1000);
    //smooth scrolling
    jump('.footer', {
      duration: 1000,
    });
  };
  return (
    <div className="service__card">
      <div className="container">
        <div
          className="service__illustration"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <Image
            src={`/images/services/${currentData.src}.jpg`}
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
          <Button
            dataAos="fade-up"
            animationDelay="1100"
            onClick={onClickHandler}
            loading={loading}
          >
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
