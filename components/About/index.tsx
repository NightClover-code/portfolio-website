//importing animations
import 'aos/dist/aos.css';
//about
const About = () => {
  return (
    <section className="about__section">
      <div className="container">
        <div className="about__content">
          <h1 data-aos="fade-up">
            About{' '}
            <div className="line__container">
              <span>Achraf</span>
              <div className="line"></div>
            </div>
          </h1>
          <p data-aos="fade-up" data-aos-delay="400">
            Hello there! My name is Achraf and I'm not your average Front End
            Developer.
            <div className="paragraph__section">
              I started my journey as a self-taught web developer right out of
              High School when I first got fascinated by the web development
              world and wanted to build amazing progressive web apps. Ever since
              I have fallen in love with web development and spend most of my
              days taking my skills to the next-level.
            </div>
            <div className="paragraph__section">
              I've learnt various modern technologies and built a strong
              skillset, which eventually got me to a point where I can
              understand concepts quickly and effectively.
            </div>
            <div className="paragraph__section">
              Nowadays I tend to code all of my projects from scratch in order
              to deliver a unique experience to every company / client.
            </div>
            <div className="paragraph__section">
              Like many other people I enjoy spending my free time increasing my
              knowledge of Web Development and building new and challenging
              projects.
            </div>
            {/* <div className="paragraph__section paragraph__list__container">
              Some of my favorite things to do include:
              <ul>
                <li>
                  Learning modern standards and best practices of the industry.
                </li>
                <li>Contributing to open source projects.</li>
                <li>Building and Designing Modern Websites.</li>
                <li>
                  Learning modern standards and best practices of the industry
                </li>
                <li>
                  Learning new web development technologies to stay up-to-date
                  with the industry.
                </li>
              </ul>
            </div> */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
