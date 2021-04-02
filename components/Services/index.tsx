//importing hooks
import { useRef, useState, useEffect } from 'react';
//importing aos animations
import 'aos/dist/aos.css';
//importing utils
import { servicesInfo } from '../../utils';
//importing components
import ServiceCard from './ServiceCard';
//services
const Services = () => {
  //refs
  const listRef = useRef<HTMLUListElement | null>(null);
  //local state
  const [counter, setCounter] = useState(0);
  const [currentData, setCurrentData] = useState(servicesInfo[0]);
  //on Click Handler
  const onClickHandler = (
    event: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    const el = event.target as HTMLInputElement;
    //changing content if target is an <li>
    if (el.tagName === 'LI') {
      //data attribute
      const id = el.getAttribute('id')!;
      if (listRef.current) {
        const listArray = Array.from(listRef.current.children);
        listArray.map(item => item.classList.remove('active'));
      }
      //changing counter & showing item is active
      setCounter(parseFloat(id));
      el.classList.add('active');
    }
  };
  //changing current data based on counter change
  useEffect(() => {
    setCurrentData(servicesInfo[counter]);
  }, [counter]);
  return (
    <section className="services__section">
      <div className="services__head">
        <h1 data-aos="fade-up">
          What <span>I do</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200">
          My aim is to make it quick and easy for you to get your business to
          scale by providing the following services:
        </p>
      </div>
      <div className="services__list" data-aos="fade-up" data-aos-delay="400">
        <ul onClick={onClickHandler} ref={listRef}>
          <li className="active" id="0">
            Design
          </li>
          <li id="1">Development</li>
          <li id="2">eCommerce</li>
        </ul>
      </div>
      <ServiceCard currentData={currentData} />
    </section>
  );
};

export default Services;
