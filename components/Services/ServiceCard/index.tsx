import Image from 'next/image';

//props interface
interface ServiceCardProps {
  alt: string;
  src: string;
  description: string;
  title: string;
}
//service card
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  alt,
  src,
}) => {
  return (
    <div className="service__card">
      <Image
        src={`/images/${src}`}
        alt={alt}
        layout="fill"
        // objectFit="cover"
        quality={100}
      />
      <h2 className="title">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
