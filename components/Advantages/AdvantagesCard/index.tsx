//importing next utils
import Image from 'next/image';
//props interface
interface AdvantagesCardProps {
  alt: string;
  src: string;
  description: string;
  title: string;
}
//advantages card
const AdvantagesCard: React.FC<AdvantagesCardProps> = ({
  title,
  description,
  alt,
  src,
}) => {
  return (
    <div className="advantage__card">
      <div className="advantage__logo">
        <Image
          src={`/images/advantages/${src}`}
          alt={alt}
          layout="fill"
          quality={100}
        />
      </div>
      <h2 className="title">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default AdvantagesCard;
