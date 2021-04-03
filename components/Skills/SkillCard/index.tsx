//importing hooks
import { useState } from 'react';
//importing next utils
import Image from 'next/image';
//props interface
interface SkillCardInterface {
  title: string;
  logo: string;
  alt: string;
  span: boolean;
}
//skill card
const SkillCard: React.FC<SkillCardInterface> = ({
  title,
  logo,
  alt,
  span,
}) => {
  //local state
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`skill__card ${span ? 'span__card' : ''}`}
      onMouseEnter={() => setTimeout(() => setIsHovered(true), 50)}
      onMouseLeave={() => setTimeout(() => setIsHovered(false), 50)}
    >
      <p>{title}</p>
      {!isHovered && logo.length > 0 && (
        <Image
          src={`/images/skills-light/${logo}`}
          alt={alt}
          width={title === 'Node' ? 25 : 15}
          height={title === 'Node' ? 20 : 15}
          quality={100}
        />
      )}
      {isHovered && logo.length > 0 && (
        <Image
          src={`/images/skills-dark/${logo}`}
          alt={alt}
          width={title === 'Node' ? 25 : 15}
          height={title === 'Node' ? 20 : 15}
          quality={100}
        />
      )}
    </div>
  );
};

export default SkillCard;
