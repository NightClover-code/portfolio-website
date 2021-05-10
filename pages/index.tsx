//importing hooks
import { useEffect, useContext } from 'react';
//importing utils
import { disableScroll, hideNav, portfolioAPI, seoConfigHome } from '../utils';
//importing components
import Hero from '../components/Hero';
import Porfolio from '../components/Porfolio';
import Advantages from '../components/Advantages';
import Skills from '../components/Skills';
import Socials from '../components/Socials';
import Services from '../components/Services';
import SEO from '../components/SEO';
//importing types
import { GetServerSideProps } from 'next';
import {
  AdvantageType,
  HeroType,
  Image,
  SkillType,
  ServiceType,
} from '../interfaces';
//importing context
import { NavContext } from '../context';
//props interface
interface HomepageProps {
  images: Image[];
  skills: SkillType[];
  hero: HeroType;
  advantages: AdvantageType[];
  services: ServiceType[];
}
//homepage
const Homepage: React.FC<HomepageProps> = ({
  images,
  hero,
  services,
  skills,
  advantages,
}) => {
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
  return (
    <>
      <SEO {...seoConfigHome} />
      <main className="app__container">
        <Hero hero={hero} />
        <Porfolio images={images} />
        <Skills skills={skills} />
        <Socials />
        <Advantages advantages={advantages} />
        <Services services={services} />
      </main>
    </>
  );
};

//getting props
export const getServerSideProps: GetServerSideProps = async () => {
  //getting images
  const images = await portfolioAPI.get('/images');
  const skills = await portfolioAPI.get('/skills');
  const advantages = await portfolioAPI.get('/advantages');
  const services = await portfolioAPI.get('/services');
  const hero = await portfolioAPI.get('/heroes');

  return {
    props: {
      images: images.data,
      skills: skills.data,
      advantages: advantages.data,
      services: services.data,
      hero: hero.data[0],
    },
  };
};

export default Homepage;
