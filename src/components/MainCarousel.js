import Style from '../styles/MainCarousel.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import SliderOne from '../images/Welcome.png';
import SliderTwo from '../images/Microwave.png';
import SliderThree from '../images/SolarPage.png';
import SliderFour from '../images/OpticFiber.png';
import SliderFive from '../images/PabxPage.png';
const MainCarousel = () => {
  const ArrowLeft = (props) => (
    <FaAngleLeft {...props} className={Style.prev} />
  );
  const ArrowRight = (props) => (
    <FaAngleRight {...props} className={Style.next} />
  );
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };
  return (
    <div className="mx-auto" style={{ width: '92%' }}>
      <Slider {...settings} className="">
        <div className={Style.itemBox}>
          {/* <div className={Style.setMsg}>
            <h1>Welcome To JeviAustine</h1>
            <span>
              It is a long established fact that a reader will be distracted by<br/>
              the readabl content of a page when looking at its layout. The point of using<br/>
              Lorem Ipsum is that it has a more-or-less normal distribution of<br/>
              letters, as opposed to using 'Content here, content here', making<br/>
              it look like readable English.
            </span>
          </div> */}
          <img src={SliderOne} alt="" className={Style.setImg} />
        </div>
        <div className={Style.itemBox}>
          <img src={SliderTwo} alt="" className={Style.setImg} />
        </div>
        <div className={Style.itemBox}>
          <img src={SliderThree} alt="" className={Style.setImg} />
        </div>
        <div className={Style.itemBox}>
          <img src={SliderFour} alt="" className={Style.setImg} />
        </div>
        <div className={Style.itemBox}>
          <img src={SliderFive} alt="" className={Style.setImg} />
        </div>
      </Slider>
    </div>
  );
};

export default MainCarousel;
