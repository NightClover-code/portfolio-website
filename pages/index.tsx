//importing hooks
import { useEffect, useContext } from 'react';
//importing utils
import { disableScroll, hideNav } from '../utils';
//importing components
import Hero from '../components/Hero';
import Porfolio from '../components/Porfolio';
import Advantages from '../components/Advantages';
import Skills from '../components/Skills';
import Socials from '../components/Socials';
import Services from '../components/Services';
import SEO from '../components/SEO';
//importing context
import { NavContext } from '../context';
//homepage
const Homepage = () => {
  //context api state
  const { setIsNavHidden, isNavHidden } = useContext(NavContext);
  //hiding nav for big screens
  useEffect(() => {
    hideNav(setIsNavHidden);
  }, []);
  //disabling scroll when nav open
  useEffect(() => {
    disableScroll(isNavHidden);
  }, [isNavHidden]);
  //config
  const seoConfig = {
    title: 'Achraf Dev | Web Developer | Web Designer | Freelancer',
    description:
      "Hi there, I'm Achraf, a Front End Web Developer and Web Designer. I build powerful and awesome websites using the latest web technologies for businesses around the globe. If you need a modern and powerful website, send me an email.",
    keywords:
      'Web Designer, Web Developer, React, Redux, Javascript, Typescript, Freelancer, Design, Development, SEO, SSR, Portfolio Website, Achraf Dev, Websites, HTML, CSS',
  };
  return (
    <>
      <SEO {...seoConfig} />
      <main className="app__container">
        <Hero />
        <Porfolio />
        <Skills />
        <Socials />
        <Advantages />
        <Services />
      </main>
    </>
  );
};

export default Homepage;
