//importing aos animations
import 'aos/dist/aos.css';
//importing components
import SocialCard from './SocialCard';
import {
  FacebookIcon,
  GithubIcon,
  GmailIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../Icons';
//socials
const Socials = () => {
  return (
    <section className="socials__section">
      <div className="socials__head">
        <h1 data-aos="fade-up">
          <span>Connect</span> With Me
        </h1>
        <p data-aos="fade-up" data-aos-delay="200">
          I love sharing my passion with others. Let's get in touch.
        </p>
      </div>
      <div className="socials__grid">
        <a
          target="_blank"
          href="https://github.com/NightClover-code"
          title="Github"
          rel="noreferrer"
        >
          <SocialCard dataAos="fade-right">
            <GithubIcon />
          </SocialCard>
        </a>
        <a
          target="_blank"
          href="https://twitter.com/AchrafElmouhib"
          title="Twitter"
          rel="noreferrer"
        >
          <SocialCard dataAos="fade-right">
            <TwitterIcon />
          </SocialCard>
        </a>
        <a
          target="_blank"
          href="mailto:achrafdev23@gmail.com"
          title="Gmail"
          rel="noreferrer"
        >
          <SocialCard dataAos="fade-right">
            <GmailIcon />
          </SocialCard>
        </a>
        <a
          target="_blank"
          href="https://web.facebook.com/achraf.elmouhib"
          title="Facebook"
          rel="noreferrer"
        >
          <SocialCard dataAos="fade-left">
            <FacebookIcon />
          </SocialCard>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/achrafdev/"
          title="Instagram"
          rel="noreferrer"
        >
          <SocialCard dataAos="fade-left">
            <InstagramIcon />
          </SocialCard>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/achraf-elmouhib-583563200/"
          title="LinkedIn"
          rel="noreferrer"
        >
          <SocialCard dataAos="fade-left">
            <LinkedInIcon />
          </SocialCard>
        </a>
      </div>
    </section>
  );
};

export default Socials;
