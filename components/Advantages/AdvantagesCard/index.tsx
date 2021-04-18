//importing aos animations
import 'aos/dist/aos.css';
//importing next utils
import Image from 'next/image';
//props interface
interface AdvantagesCardProps {
  alt: string;
  src: string;
  description: string;
  title: string;
  animationDelay: number;
}
//advantages card
const AdvantagesCard: React.FC<AdvantagesCardProps> = ({
  title,
  description,
  alt,
  src,
  animationDelay,
}) => {
  return (
    <div
      className="advantage__card"
      data-aos="fade-up"
      data-aos-delay={animationDelay}
    >
      <div className="advantage__logo">
        <Image src={src} alt={alt} layout="fill" quality={100} />
      </div>
      <h2 className="title">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default AdvantagesCard;
