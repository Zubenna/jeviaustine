import Style from '../styles/MainCarousel.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import SliderOne from '../images/welcome.jpg';
import SliderTwo from '../images/microwave.jpeg';
import SliderThree from '../images/solarpanel.jpg';
import SliderFour from '../images/Fiberoptic.jpeg';

const MainCarousel = () => {
  return (
    <div className={Style.itemBox}>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img className={Style.setImg} src={SliderOne} alt="Pic One" />
          <Carousel.Caption id={Style.slideOne} className={Style.msgBox}>
            <h1>WELCOME TO</h1>
            <h1>JEVIAUSTIN</h1>
            <p>
              WE SPECIALIZED IN BRINGING THE LATEST I.T INNOVATION, INTERACTIVE
              TECHNOLOGY width BEST PRACTICES TO COMPANIES NO MATTER THE AREA OF
              SPECIALIZATION OR SIZE
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className={Style.setImg} src={SliderTwo} alt="Pic Two" />
          <Carousel.Caption id={Style.slideTwo} className={Style.msgBox}>
            <h1>MICROWAVE RADIO</h1>
            <p>
              WE DEPLOY WIRELESS PONT-TO-PONT RADIOS THAT COMBINE SPECTRAL AND
              HARDWARE EFFICIENCY MODULARITY FLEXIBILITY AND UPGRADEABILITY IN A
              SINGLE COMPACT SYSTEM
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className={Style.setImg} src={SliderThree} alt="Pic Two" />
          <Carousel.Caption id={Style.slideThree} className={Style.msgBox}>
            <h1>SOLAR ENERGY</h1>
            <p>
              FOR MOST CUSTOMERS, RESDENTIAL OR COMMERCIAL USE, THE ROOF IS THE
              BEST LOCATION FOR SOLAR PANEL INSTALLATION. IT USUALLY ALREADY HAS
              THE STRUCTURAL SPECIFICATIONS THAT THE SOLAR PANELS REQUIRE
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className={Style.setImg} src={SliderFour} alt="Pic Two" />
          <Carousel.Caption id={Style.slideFour} className={Style.msgBox}>
            <h1>OPTIC FIBER</h1>
            <h1>CABLING</h1>
            <p>
              FOR THE UTMOST IN COMMUNICATION QUALITY IN CHANNELS RANGING FROM
              VOICE TO VIDEO, AND APPLICATIONS SUCH AS HIGH SPEED IINTERNET
              ACCESS, FIBER OPTIC CABLING IS A PROVEN SOLUTION WITH MANY COST
              SAVING AND PERFORMANCE BENEFITS
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MainCarousel;
