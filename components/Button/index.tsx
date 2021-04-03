//impoting styles & animations
import 'aos/dist/aos.css';
//props interface
interface ButtonInterface {
  dataAos?: string;
  animationDelay?: string;
  onClick?: () => void;
  loading?: boolean;
  className?: string;
}
//button
const Button: React.FC<ButtonInterface> = ({
  children,
  dataAos,
  animationDelay,
  onClick,
  loading,
  className,
}) => {
  return (
    <button
      data-aos={dataAos}
      data-aos-delay={animationDelay}
      className={className && className}
      onClick={onClick}
      disabled={loading}
    >
      <div className="primary__btn">{children}</div>
      <div className="ghost__btn"></div>
    </button>
  );
};

export default Button;
