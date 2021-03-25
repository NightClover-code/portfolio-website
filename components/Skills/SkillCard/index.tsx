//importing hooks
import { useState } from 'react';
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
  //local state
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="skill__card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>{title}</p>
      {!isHovered && logo.length > 0 && (
        <Image
          src={`/images/skills-light/${logo}`}
          alt={alt}
          width={15}
          height={15}
          quality={100}
        />
      )}
      {isHovered && logo.length > 0 && (
        <Image
          src={`/images/skills-dark/${logo}`}
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
