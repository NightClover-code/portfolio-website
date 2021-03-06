//importing aos animations
import 'aos/dist/aos.css';
//footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__head">
          <h1 data-aos="fade-up" data-aos-delay="200">
            Want to
            <div className="line__container">
              <span>work?</span>
              <div className="line" data-aos="scale-animation-first"></div>
            </div>{' '}
          </h1>
          <div
            className="footer__description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            If you need a modern and powerful website for your business, startup
            or yourself, I am available for work. You can email me directly at{' '}
            <a href="mailto:achrafdev23@gmail.com">
              <div className="line__container">
                <span>achrafdev23@gmail.com</span>
                <div className="line" data-aos="scale-animation-second"></div>
              </div>{' '}
            </a>
          </div>
        </div>
        <div className="copyright">&copy; All rights reserved - achrafdev</div>
      </div>
    </footer>
  );
};

export default Footer;
