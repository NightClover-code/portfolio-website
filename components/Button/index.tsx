const Button: React.FC = ({ children }) => {
  return (
    <div className="primary__btn__container">
      <button className="primary__btn">{children}</button>
      <div className="ghost__button"></div>
    </div>
  );
};

export default Button;
