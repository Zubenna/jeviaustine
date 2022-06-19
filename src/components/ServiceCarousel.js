import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import '../styles/ServiceCarousel.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import serviceOne from '../images/serviceOne.jpg';
import serviceTwo from '../images/serviceTwo.jpg';
import serviceThree from '../images/serviceThree.jpg';
import serviceFour from '../images/serviceFour.jpg';
import serviceFive from '../images/serviceFive.jpg';
import serviceSix from '../images/serviceSix.jpg';

const ServiceCarousel = () => {
  const ArrowLeft = (props) => <FaAngleLeft {...props} className="prev" />;
  const ArrowRight = (props) => <FaAngleRight {...props} className="next" />;

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    lazyLoad: true,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };
  return (
    <div className="setServiceBox" style={{ width: '100%' }}>
      <h2 className="py-4 text-center text-dark">Our Services Profile</h2>
      <Slider {...settings}>
        <div className="card" style={{ width: '18rem' }}>
          <img src={serviceTwo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Transformer Installation </h5>
            <p className="card-text">
              Electrical transformerss have to be installed with the utmost care 
              and precaution else they could lead to internal damage of your equipment.
              We follow all the safety precautions and provide the required safety equipment to all of your
              construction workers which handle the transfromer.

            </p>
       
            <a href="#" className="btn btn-primary">
              LEARN MORE
            </a>
            {/* <Link to="/" className="btn btn-primary">
              LEARN MORE
            </Link> */}
          </div>
          </div>
       

        <div className="card" style={{ width: '18rem' }}>
          <img src={serviceOne} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Instrumentation and Calibration</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* <a href="#" className="btn btn-primary">
              LEARN MORE
            </a> */}
            <Link to="/" className="btn btn-primary">
              LEARN MORE
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src={serviceFour} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Engineering Services</h5>
            <p className="card-text">
              We offer specialized engineering/technical support services 
              to both companies and individual to enable them achieve their iintended goals.

            </p>
            <a href="#" className="btn btn-primary">
              LEARN MORE
            </a>
            {/* <Link to="/" className="btn btn-primary">
              LEARN MORE
            </Link> */}
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src={serviceFive} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Welding and Fabrication</h5>
            <p className="card-text">
              JeviAustine International Company Ltd welding engineers have the experience and knowledge to develop and qualify customized 
              welding procedure specifications (WPS) that are compliant to current codes, standards and applicable service conditons.
            </p>
            <a href="#" className="btn btn-primary">
              LEARN MORE
            </a>
            {/* <Link to="/" className="btn btn-primary">
              LEARN MORE
            </Link> */}
          </div>
        </div>

        {/* <div className={Style.setMargin}> */}
        <div className="card" style={{ width: '18rem' }}>
          <img src={serviceThree} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Haulage/Logistics</h5>
            <p className="card-text">
             The company has metamorphosed from a one truck company into its 
             prsent status where it has fleet of branded trucks, currently based in 
             Port Harcourt with satellite operation acrooss various locations in Nigeria.
            </p>
            <a href="#" className="btn btn-primary">
              LEARN MORE
            </a>
            {/* <Link to="/" className="btn btn-primary">
              LEARN MORE
            </Link> */}
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src={serviceSix} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Marine Logistics and Leasing</h5>
            <p className="card-text">
             We offer a complete range of offshore support vessels of modern design,
             incorporating a modular approach and a high degree of standardisation by  
             using excellent quality.
            </p>
            <a href="#" className="btn btn-primary">
              LEARN MORE
            </a>
            {/* <Link to="/" className="btn btn-primary">
              LEARN MORE
            </Link> */}
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ServiceCarousel;
