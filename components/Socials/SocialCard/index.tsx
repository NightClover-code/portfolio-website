//props interface
interface SocialCardProps {
  dataAos: string;
}
//social card
const SocialCard: React.FC<SocialCardProps> = ({ children, dataAos }) => {
  return (
    <div className="socials__card" data-aos={dataAos} data-aos-delay="400">
      <div className="socials__logo__container">{children}</div>
    </div>
  );
};

export default SocialCard;
