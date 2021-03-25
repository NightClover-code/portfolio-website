//importing next utils
import Image from 'next/image';
//props interface
interface SkillCardInterface {
  title: string;
  logo: string;
  alt: string;
}
//skill card
const SkillCard: React.FC<SkillCardInterface> = ({ title, logo, alt }) => {
  return (
    <div className="skill__card">
      <p>{title}</p>
      {logo.length > 0 && (
        <Image
          className="skill__logo "
          src={`/images/${logo}`}
          alt={`${alt}-project-preview`}
          width={15}
          height={15}
          quality={100}
        />
      )}
    </div>
  );
};

export default SkillCard;
