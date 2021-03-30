//impoting styles & animations
import 'aos/dist/aos.css';
//props interface
interface ButtonInterface {
  dataAos?: string;
  animationDelay?: string;
  onClick?: () => void;
}
//button
const Button: React.FC<ButtonInterface> = ({
  children,
  dataAos,
  animationDelay,
  onClick,
}) => {
  return (
    <div
      data-aos={dataAos}
      data-aos-delay={`${animationDelay}`}
      className="primary__btn__container"
      onClick={onClick}
    >
      <button className="primary__btn">{children}</button>
      <div className="ghost__button"></div>
    </div>
  );
};

export default Button;
