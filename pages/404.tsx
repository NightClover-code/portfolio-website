//importing animations
import 'aos/dist/aos.css';
//importing components
import NotFoundCard from '../components/NotFound';
import SEO from '../components/SEO';
//importing config
import { seoConfigNotFound } from '../utils';
//404 page
const NotFound = () => {
  return (
    <>
      <SEO {...seoConfigNotFound} />
      <NotFoundCard />
    </>
  );
};

export default NotFound;
