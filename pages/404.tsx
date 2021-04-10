//importing animations
import 'aos/dist/aos.css';
//importing components
import NotFoundCard from '../components/NotFound';
import SEO from '../components/SEO';
//404 page
const NotFound = () => {
  //config
  const seoConfig = {
    title: 'Achraf Dev | Not Found',
    description:
      "We couldn't find the page you're looking for. Please check you spelled the url correctly and if there wasn't any network issues.",
  };
  return (
    <>
      <SEO {...seoConfig} />
      <NotFoundCard />
    </>
  );
};

export default NotFound;
