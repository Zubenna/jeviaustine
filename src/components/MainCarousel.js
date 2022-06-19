import Style from '../styles/MainCarousel.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import SliderOne from '../images/welcome.jpg';
import SliderTwo from '../images/microwave.jpeg';
import SliderThree from '../images/solarpanel.jpg';
import SliderFour from '../images/Fiberoptic.jpeg';
// import SliderFive from '../images/PabxPage.png';
const MainCarousel = () => {
  // const welcome = {
  //   backgroundImage: 'url(../mainSlider/welcome.jpeg)',
  //   height: '100vh',
  //   width: '100vw',
  //   // fontSize: '50px',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  // };
  // const microwave = {
  //   backgroundImage: 'url(../mainSlider/microwave.jpeg)',
  //   height: '100vh',
  //   width: '100vw',
  //   // fontSize: '50px',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  // };

  // const solarpanel = {
  //   backgroundImage: 'url(../mainSlider/solarpanel.jpg)',
  //   height: '100vh',
  //   width: '100vw',
  //   // fontSize: '50px',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  // };
  // const fiberoptic = {
  //   backgroundImage: 'url(../mainSlider/Fiberoptic.jpeg',
  //   height: '100vh',
  //   width: '100vw',
  //   // fontSize: '50px',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  // };
  // const ArrowLeft = (props) => (
  //   <FaAngleLeft {...props} className={Style.prev} />
  // );
  // const ArrowRight = (props) => (
  //   <FaAngleRight {...props} className={Style.next} />
  // );
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   prevArrow: <ArrowLeft />,
  //   nextArrow: <ArrowRight />,
  // };
  // return (
  //   <div className="mx-auto" style={{ width: '100%' }}>
  //     <Slider {...settings} className="">
  //       <div className={Style.itemBox}>
  //         {/* <div className={Style.setMsg}>
  //           <h1>Welcome To JeviAustine</h1>
  //           <span>
  //             It is a long established fact that a reader will be distracted by<br/>
  //             the readabl content of a page when looking at its layout. The point of using<br/>
  //             Lorem Ipsum is that it has a more-or-less normal distribution of<br/>
  //             letters, as opposed to using 'Content here, content here', making<br/>
  //             it look like readable English.
  //           </span>
  //         </div> */}
  //         <img src={SliderOne} alt="" className={Style.setImg} />
  //       </div>
  //       <div className={Style.itemBox}>
  //         <img src={SliderTwo} alt="" className={Style.setImg} />
  //       </div>
  //       <div className={Style.itemBox}>
  //         <img src={SliderThree} alt="" className={Style.setImg} />
  //       </div>
  //       <div className={Style.itemBox}>
  //         <img src={SliderFour} alt="" className={Style.setImg} />
  //       </div>
  //       {/* <div className={Style.itemBox}>
  //         <img src={SliderFive} alt="" className={Style.setImg} />
  //       </div> */}
  //     </Slider>
  //   </div>
  // );
  return (
    <div className={Style.itemBox}>
      {/* <h4>React-Bootstrap Carousel Component</h4> */}
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
