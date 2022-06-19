import Navigation from '../components/Navigation';
import MainCarousel from '../components/MainCarousel';
import Style from '../styles/Home.module.css';
import ServiceCarousel from '../components/ServiceCarousel';
import CompanyInfo from '../components/CompanyInfo';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className={Style.homeBox}>
      <div className={Style.leftDim}></div>
      <div className={Style.deCenter}>
        <Navigation />
        <MainCarousel />
        <ServiceCarousel />
        <CompanyInfo />
        <Footer />
      </div>
      <div className={Style.rightDim}></div>
    </div>
  );
};

export default Home;
