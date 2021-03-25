//importing next utils
import Image from 'next/image';
//props interface
interface SkillCardInterface {
  title: string;
  logoLight: string;
  alt: string;
}
//skill card
const SkillCard: React.FC<SkillCardInterface> = ({ title, logoLight, alt }) => {
  return (
    <div className="skill__card">
      <p>{title}</p>
      {logoLight.length > 0 && (
        <Image
          className="skill__logo "
          src={logoLight}
          alt={alt}
          width={15}
          height={15}
          quality={100}
        />
      )}
    </div>
  );
};

export default SkillCard;
