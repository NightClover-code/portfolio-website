//importing hooks
import { useEffect, useContext } from 'react';
//importing utils
import { disableScroll, hideNav, portfolioAPI } from '../utils';
//importing components
import Hero from '../components/Hero';
import Porfolio from '../components/Porfolio';
import Advantages from '../components/Advantages';
import Skills from '../components/Skills';
import Socials from '../components/Socials';
import Services from '../components/Services';
import SEO from '../components/SEO';
//importing types
import { GetStaticProps } from 'next';
import { Image } from '../interfaces';
//importing context & config
import { NavContext } from '../context';
import { seoConfig } from '../utils';
//props interface
interface HomepageProps {
  images: Image[];
}
//homepage
const Homepage: React.FC<HomepageProps> = ({ images }) => {
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
  const portfolioConfig = {
    images,
  };
  return (
    <>
      <SEO {...seoConfig} />
      <main className="app__container">
        <Hero />
        <Porfolio {...portfolioConfig} />
        <Skills />
        <Socials />
        <Advantages />
        <Services />
      </main>
    </>
  );
};

//getting props
export const getStaticProps: GetStaticProps = async () => {
  //getting images
  const images = await portfolioAPI.get('/images');
  const skills = await portfolioAPI.get('/skills');
  const advantages = await portfolioAPI.get('/advantages');
  const services = await portfolioAPI.get('/services');

  return {
    props: {
      images: images.data,
      skills: skills.data,
      advantages: advantages.data,
      services: services.data,
    },
  };
};

export default Homepage;
