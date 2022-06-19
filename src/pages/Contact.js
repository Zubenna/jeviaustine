import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Style from '../styles/Contact.module.css';
import ContactInfo from '../components/ContactInfo';
const Contact = () => {
  return (
    <div className={Style.contactBox}>
      <div className={Style.leftDim}></div>
      <div className={Style.deCenter}>
        <Navigation />
        <ContactInfo />
        <Footer />
      </div>
      <div className={Style.rightDim}></div>
    </div>
  );
};

export default Contact;
