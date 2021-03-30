//impoting styles & animations
import 'aos/dist/aos.css';
//button
const Button: React.FC = ({ children }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="600"
      className="primary__btn__container"
    >
      <button className="primary__btn">{children}</button>
      <div className="ghost__button"></div>
    </div>
  );
};

export default Button;
