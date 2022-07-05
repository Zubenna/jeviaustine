import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Style from '../styles/About.module.css';
import CompanyAbout from '../components/CompanyAbout';
const Contact = () => {
  return (
    <div className={Style.contactBox}>
      <div className={Style.leftDim}></div>
      <div className={Style.deCenter}>
        <Navigation />
        <CompanyAbout />
        <Footer />
      </div>
      <div className={Style.rightDim}></div>
    </div>
  );
};

export default Contact;
