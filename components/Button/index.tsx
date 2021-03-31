//impoting styles & animations
import 'aos/dist/aos.css';
//props interface
interface ButtonInterface {
  dataAos?: string;
  animationDelay?: string;
  onClick?: () => void;
  loading?: boolean;
}
//button
const Button: React.FC<ButtonInterface> = ({
  children,
  dataAos,
  animationDelay,
  onClick,
  loading,
}) => {
  return (
    <button
      data-aos={dataAos}
      data-aos-delay={animationDelay}
      className="primary__btn__container"
      onClick={onClick}
      disabled={loading}
    >
      <div className="primary__btn">{children}</div>
      <div className="ghost__button"></div>
    </button>
  );
};

export default Button;
