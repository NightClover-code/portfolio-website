//importing hooks
import { useState } from 'react';
//importing next utils
import Image from 'next/image';
//props interface
interface SkillCardInterface {
  title: string;
  normalLogo: string;
  invertedLogo: string;
  alt: string;
  span: boolean;
}
//skill card
const SkillCard: React.FC<SkillCardInterface> = ({
  title,
  normalLogo,
  invertedLogo,
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
      {!isHovered && normalLogo && (
        <Image
          src={normalLogo}
          alt={alt}
          width={title === 'Node' ? 25 : 15}
          height={title === 'Node' ? 20 : 15}
          quality={100}
        />
      )}
      {isHovered && invertedLogo && (
        <Image
          src={invertedLogo}
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
