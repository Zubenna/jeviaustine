import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Style from '../styles/Contact.module.css';
import ContactInfo from '../components/ContactInfo';
const Contact = () => {
  return (
    <div>
      <div className={Style.leftDim}></div>
      <Navigation />
      <ContactInfo />
      <Footer />
      <div className={Style.rightDim}></div>
    </div>
  );
};

export default Contact;
