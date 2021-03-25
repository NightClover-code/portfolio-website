const SocialCard: React.FC = ({ children }) => {
  return (
    <div className="socials__card">
      <div className="socials__logo__container">{children}</div>
    </div>
  );
};

export default SocialCard;
